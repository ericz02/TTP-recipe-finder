import React from 'react';

const Contact = () => {
  const handleButtonClick = () => {
    alert('Does absolutely nothing.')
  };

  return (
    <div className="flex flex-col items-center justify-center h-[600px] bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Contact</h1>
      <p className="text-lg text-center">Welcome to our contact page! We're excited to hear from you.</p>
      <p className='text-lg text-center mb-8'>For feedback please reach out to us.</p>
      <button className="px-4 py-2 bg-slate-500 text-white font-bold rounded shadow hover:bg-slate-600" onClick={handleButtonClick}>Send Message</button>
      <p className="text-sm text-gray-500 mt-2">(Note: The button doesn't actually do anything)</p>
    </div>
  );
};

export default Contact;
