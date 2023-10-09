import React, { useState } from 'react';
import styles from './InputWithCopyButton.module.css';

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
    <div id='inputandcopy' title='inputandcopy'>
      <textarea
        id='copyinput'
        name='copyinput'
        title='copyinput'
        rows={4}
        value={inputValue}
        onChange={handleInputChange}
        placeholder=''
        className={styles.textareaStyle}
      />
      <button 
        id='copybutton'
        name='copybutton'
        onClick={handleCopyClick} 
        className={styles.copyButtonStyle}>
        Copy
      </button>
    </div>
  );
};

export default InputWithCopyButton;