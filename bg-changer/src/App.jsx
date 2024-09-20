import React, { useState } from 'react';

function App() {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  const getButtonStyle = (index) => {
    return activeButton === index
      ? {
          border: '2px solid #FF936B', // Change this to your desired border color
          color: '#FF936B', // Change this to your desired text color
        }
      : {
          border: '2px solid transparent', // Default border style for inactive buttons
          color: '#ffffff', // Default text color for inactive buttons
        };
  };

  return (
    <div className='w-full h-screen bg-black'>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-slate-600 px-3 py-2 rounded-3xl'>
          <button
            onClick={() => handleButtonClick(0)}
            className='outline-none px-4 py-1 rounded-full shadow-lg transition ease-in-out delay-150'
            style={getButtonStyle(0)}
          >
            Home
          </button>
          <button
            onClick={() => handleButtonClick(1)}
            className='outline-none px-4 py-1 rounded-full shadow-lg transition ease-in-out delay-150'
            style={getButtonStyle(1)}
          >
            About
          </button>
          <button
            onClick={() => handleButtonClick(2)}
            className='outline-none px-4 py-1 rounded-full shadow-lg transition ease-in-out delay-150'
            style={getButtonStyle(2)}
          >
            Testimonials
          </button>
          <button
            onClick={() => handleButtonClick(3)}
            className='outline-none px-4 py-1 rounded-full shadow-lg transition ease-in-out delay-150'
            style={getButtonStyle(3)}
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;