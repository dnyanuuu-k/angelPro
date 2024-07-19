import React, { useRef, useEffect, useState } from "react";
import "./globals.css";
import { X } from "lucide-react";

function Deposithistory({ onClose }) {
  const ModalRef = useRef();
  const [deposit, setDeposit] = useState([]);

  const closeModal = (e) => {
    if (ModalRef.current === e.target) {
      onClose();
    }
  };

  useEffect(() => {
    async function fetchDeposit() {
      try {
        const response = await fetch("/api/sellusdt");
        const data = await response.json();
        setDeposit(data.data);
        console.log(data, "deposit");
      } catch (error) {
        console.log("Error in Deposithistory: " + error);
      }
    }
    fetchDeposit();
  }, []);

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
        <div className="bg-orange-600 rounded-xl px-20 py-10 flex flex-col gap-3 items-center mx-4">
          <h1 className="text-3x1 font-extrabold text-white">
            Deposit History
          </h1>
          <form>
            <table>
              <thead>
                <tr>
                  <th className="text-md px-6 py-3">Transaction ID</th>
                  <th className="text-md px-6 py-3">Amount</th>
                </tr>
              </thead>
              <tbody>
                {deposit &&
                  deposit.map((deposit) => (
                    <tr key={deposit._id}>
                      <td>{deposit.txref}</td>
                      <td>{deposit.usdtVol}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Deposithistory;
