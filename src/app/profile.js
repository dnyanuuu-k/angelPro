import React, {useRef} from 'react'
import './globals.css'
import { X, Copy } from 'lucide-react';
import Image from 'next/image';
import QR from "@/app/QR.jpeg";
import { useState } from 'react';
import Exchangehistory from './exchangehistory';
import Deposithistory from './deposithistory';
import { useSession } from 'next-auth/react';

function Profile({onClose}) {
    const ModalRef = useRef();

    const { status, data: session } = useSession();
    const closeModal = (e) => {
        if(ModalRef.current === e.target){
            onClose();
        }
    }

    const [copyText, setCopytext] = useState('')
    const handleCopy=()=>{
        navigator.clipboard.writeText(copyText)
        alert('copied')
    }
    const [showExchange, setShowExchange] = useState(false);
    const [ShowDeposit, setShowDeposit] = useState(false);

    if (status === "authenticated"){

  return (
    <div ref={ModalRef} onClick={closeModal} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
        <div className='mt-10 flex flex-col gap-5 text-white'>
            <button onClick={onClose} className='place-self-end'>
                <X size={30}/>
            </button>
            <div className='bg-orange-600 rounded-xl px-20 py-10 flex flex-col gap-3 items-center mx-4'>
            <h1 className='text-3x1 font-bold text-white'>YOUR PROFILE</h1>
                    <input className='w-full px-4 py-3 text-black border-black rounded-md' placeholder='User name' name='name' id='name' value={session?.user?.name} required disabled></input>
                    <input className='w-full px-4 py-3 text-black border-black rounded-md' placeholder='user email' name='email' id='email' value={session?.user?.email} required disabled></input>
                    <button type='submit' className='mt-4 w-full flex item-center justify-center gap-2 px-5 py-3 font-medium rounded-md bg-black' onClick={() => setShowExchange(true)}>Exchange History</button>
                    <button type='submit' className='mt-4 w-full flex item-center justify-center gap-2 px-5 py-3 font-medium rounded-md bg-black' onClick={() => setShowDeposit(true)}>Deposit History</button>
            </div>
            {showExchange && <Exchangehistory onClose={() => setShowExchange(false)}/>}
            {ShowDeposit && <Deposithistory onClose={() => setShowDeposit(false)}/>}
        </div>
    </div>
  )
}
}

export default Profile