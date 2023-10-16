"use client"

import React, { useState, useEffect } from 'react';
import { AiOutlinePlusCircle, AiOutlineClose } from 'react-icons/ai'; // 추가
import StyledButton from '../(styledbutton)/styledbutton';
import styles from './Inputform.module.css'

type InputFormProps = {
  onSave: (data: string) => void;
};

type InputEntry = {
  id: number;
  value: string;
};

const InputForm: React.FC<InputFormProps> = ({ onSave }) => {
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [inputHistory, setInputHistory] = useState<InputEntry[]>([]);

  useEffect(() => {
    const savedHistory = localStorage.getItem('inputHistory');
    if (savedHistory) {
      setInputHistory(JSON.parse(savedHistory));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('inputHistory', JSON.stringify(inputHistory));
  }, [inputHistory]);

  const handleButtonClick = () => {
    setInputVisible(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleSaveClick = () => {
    const lastEntry = inputHistory[inputHistory.length - 1];
    const newId = lastEntry ? lastEntry.id + 1 : 1;

    const newInputEntry: InputEntry = { id: newId, value: inputValue };
    setInputHistory([...inputHistory, newInputEntry]);
    setInputVisible(false);
    setInputValue('');
  };

  const handleClearClick = () => {
    setInputHistory([]);
    localStorage.removeItem('inputHistory');
  };

  const handleEntryDelete = (id: number) => {
    const newHistory = inputHistory.filter(entry => entry.id !== id);
    setInputHistory(newHistory);
  };

  return (
    <div>
      <div>
      {inputHistory.map((entry) => (
        <div className={styles.entryStyle} key={entry.id}>
          <StyledButton>
            {entry.value}
            <span className={styles.deleteEntryButton} onClick={() => handleEntryDelete(entry.id)}>
              <AiOutlineClose size={12} /> 
            </span>
          </StyledButton>   
        </div>
      ))}

        {!inputVisible && (
          <div className={styles.centerItems}>
            <button title='plusbutton' onClick={handleButtonClick} className={styles.buttonStyle}>
              <AiOutlinePlusCircle className={styles.iconStyle} />
            </button>
          </div>
        )}

        {inputVisible && (
          <div>
            <textarea
              id='textarea1'
              title='textarea1'
              rows={4}
              value={inputValue}
              onChange={handleInputChange}
              className={styles.textareaStyle}
            />
            <div className={styles.placesidetoside}>
              <div>
                <button 
                  type="button"
                  title='question'
                  id='question'
                  onClick={handleSaveClick}
                  className={styles.saveButtonStyle}
                >
                  질문
                </button>
              </div>
              &nbsp;
              <div>
                <button 
                  type="button"
                  title='delete'
                  id='delete'
                  onClick={handleClearClick}
                  className={styles.deleteButtonStyle}
                >
                  전체 삭제
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InputForm;