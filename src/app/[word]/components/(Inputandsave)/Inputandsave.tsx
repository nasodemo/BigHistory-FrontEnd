import React, { useState, useEffect } from 'react';
import { AiOutlinePlusCircle, AiOutlineClose } from 'react-icons/ai'; // 추가
import StyledButton from '@/app/(components)/(styledbutton)/styledbutton';
import styles from './Inputandsave.module.css'

type InputandsaveProps = {
  onSave: (data: string) => void;
};

type InputandsaveEntry = {
  id: number;
  value: string;
};

const Inputandsave: React.FC<InputandsaveProps> = ({ onSave }) => {
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [inputHistory, setInputHistory] = useState<InputandsaveEntry[]>([]);

  useEffect(() => {
    const savedHistory = localStorage.getItem('inputHistory');
    if (savedHistory) {
      setInputHistory(JSON.parse(savedHistory));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('inputHistory', JSON.stringify(inputHistory));
  }, [inputHistory]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleSaveClick = () => {
    const lastEntry = inputHistory[inputHistory.length - 1];
    const newId = lastEntry ? lastEntry.id + 1 : 1;
  
    const newInputandsaveEntry: InputandsaveEntry = { id: newId, value: inputValue };
    setInputHistory([...inputHistory, newInputandsaveEntry]);
    setInputVisible(false);
    setInputValue('');
  };

  const handleClearClick = () => {
    setInputHistory([]);
    localStorage.removeItem('inputHistory'); // 추가
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
            </StyledButton>
            <span className={styles.deleteEntryButton} onClick={() => handleEntryDelete(entry.id)}>
              <AiOutlineClose size={12} /> 
            </span>
          </div>
        ))}

        {!inputVisible && (
          <div>
            <textarea
              id='textarea2'
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
                    저장
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

export default Inputandsave;