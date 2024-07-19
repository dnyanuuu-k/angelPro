import React, {useRef} from 'react'
import './globals.css'
import { X, Copy } from 'lucide-react';
import { useEffect, useState } from 'react';

function Exchangehistory({onClose}) {

    const ModalRef = useRef();

    const [sell, setSell] = useState([]);
    const closeModal = (e) => {
        if(ModalRef.current === e.target){
            onClose();
        }
    }

    useEffect(() => {
        async function fetchSell() {
          const response = await fetch('/api/sellusdts');
          const data = await response.json();
          setSell(data);
          console.log(data, "sell")
        }
        
        fetchSell();
      }, []);

  return (
    <div ref={ModalRef} onClick={closeModal} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
        <div className='mt-10 flex flex-col gap-5 text-white'>
            <button onClick={onClose} className='place-self-end'>
                <X size={30}/>
            </button>
            <div className='bg-orange-600 rounded-xl px-20 py-10 flex flex-col gap-3 items-center mx-4'>
                <h1 className='text-3x1 font-bold text-white'>Exchange History</h1>
                <form>
                <table>
        <thead>
          <tr>
            <th className='text-md px-6 py-3'>Amount</th>
            <th className='text-md px-6 py-3'>Mobile Number</th>
            <th className='text-md px-6 py-3'>Blockchain Id</th>
            <th className='text-md px-6 py-3'>Account Number</th>
            <th className='text-md px-6 py-3'>IFSC Code</th>
            <th className='text-md px-6 py-3'>Account Holder Name</th>
          </tr>
        </thead>
        <tbody>
          {sell && sell?.map(sell => (
            <tr key={sell._email}>
              <td className='text-md px-6 py-3'>{sell.usdtVol}</td>
              <td className='text-md px-6 py-3'>{sell.phone}</td>
              <td className='text-md px-6 py-3'>{sell.txref}</td>
              <td className='text-md px-6 py-3'>{sell.accnum}</td>
              <td className='text-md px-6 py-3'>{sell.accifsc}</td>
              <td className='text-md px-6 py-3'>{sell.accname}</td>
            </tr>
          ))}
        </tbody>
      </table>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Exchangehistory