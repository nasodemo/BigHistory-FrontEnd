"use client"

import React, { useState } from 'react';

const InputWithCopyButton = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(inputValue)
      .then(() => {
        console.log('Text copied to clipboard');
      })
      .catch((error) => {
        console.error('Error copying text to clipboard:', error);
      });
  };

  return (
    <div>
      <textarea
        rows={4}
        value={inputValue}
        onChange={handleInputChange}
        style={{
          borderRadius: '5px',
          padding: '10px',
          width: '100%',
          resize:'none'
        }}
      />
        <button onClick={handleCopyClick} 
        style={{borderRadius:'0px', border:'none', padding:'10px'}}>
        Copy
        </button>
    </div>
  );
};

export default InputWithCopyButton;