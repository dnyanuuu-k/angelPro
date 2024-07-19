import React, { useRef, useState } from "react";
import "./globals.css";
import { X, Copy } from "lucide-react";
import Image from "next/image";
import QR from "@/app/QR.jpeg";
import { useRouter } from "next/navigation";

function Deposit({ onClose }) {
  const ModalRef = useRef();

  const closeModal = (e) => {
    if (ModalRef.current === e.target) {
      onClose();
    }
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [txid, setTxid] = useState("");
  const [amount, setAmount] = useState("");
  const [copyText, setCopytext] = useState("");
  const router = useRouter();

  const handleCopy = () => {
    navigator.clipboard.writeText(copyText);
    alert("copied");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !txid || !amount) {
      alert("All the fields are required.");
      return;
    }
    try {
      // const res = await fetch("http://localhost:3000/api/deposit", {
      const res = await fetch("/api/deposit", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name, email, txid, amount }),
      });
      alert(`You Have Successfully Deposited  ${amount} $`);
      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      ref={ModalRef}
      onClick={closeModal}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="mt-10 flex flex-col gap-5 text-white">
        <button onClick={onClose} className="place-self-end">
          <X size={30} />
        </button>
        <div className="bg-orange-600 z-30 rounded-xl px-20 py-10 flex flex-col gap-3 items-center mx-4">
          <h1 className="text-3x1 font-bold text-white">DEPOSIT YOUR FUNDS</h1>
          <h3 className="font-bold text-black">Scan this QR to pay</h3>
          <Image src={QR} alt="my-image" width={100} height={100} />
          <p className="font-bold max-w-md text-center">
            If have transaction fee, don't forget to add it. The transfer amount
            must match the deposit amount
          </p>
          <form onSubmit={handleSubmit}>
            <input
              className="w-full px-4 py-3 text-black border-black rounded-md"
              placeholder="Enter your name"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            ></input>
            <br />
            <br />
            <input
              className="w-full px-4 py-3 text-black border-black rounded-md"
              placeholder="Enter your email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            ></input>
            <br />
            <br />
            <input
              className="w-full px-4 py-3 text-black border-black rounded-md"
              placeholder="Enter your txid"
              name="txid"
              id="txid"
              value={txid}
              onChange={(e) => setTxid(e.target.value)}
              required
            ></input>
            <br />
            <br />
            <input
              className="w-full px-4 py-3 text-black border-black rounded-md"
              placeholder="Enter the amount"
              name="amount"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            ></input>
            <br />
            <br />
            <p value={copyText} onChange={(e) => setCopytext(e.target.value)}>
              TXii93QZLLpFEWpz32WES1bJiWQDjnrD14{" "}
              <button type="button" onClick={handleCopy}>
                <Copy />
              </button>{" "}
            </p>
            <button
              className="mt-4 w-full flex item-center justify-center gap-2 px-5 py-3 font-medium rounded-md bg-black"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Deposit;
