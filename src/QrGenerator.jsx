import React, { useState } from 'react';
import QRCode from 'react-qr-code';

const QRCodeGenerator = () => {
  const [link, setLink] = useState('');

  const handleInputChange = (event) => {
    setLink(event.target.value);
  };

  return (
    <div className='flex justify-center items-center h-screen flex-col '>
        <h1 className=' font-medium text-3xl m-5'>QR Code Generator</h1>

        {link && <QRCode value={link} className='bg-zinc-500 rounded-xl'/>}
        <input type="text" value={link} onChange={handleInputChange} placeholder="Paste link here" className='m-5 bg-zinc-500 rounded-xl p-2 text-white'/>
    </div>
  );
};

export default QRCodeGenerator;
