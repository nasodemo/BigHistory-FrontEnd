"use client"

import React, { useState, useEffect } from 'react';
import { AiOutlinePlusCircle, AiOutlineClose } from 'react-icons/ai'; // 추가
// import StyledButton from '../(styledbutton)/styledbutton';
import styles from './Inputform.module.css'
import axios from 'axios';
// Inputform은 question input만 받으니 만큼 파일 위치를 question 안으로 옮겨주었다.
// 실제 유저 기능 구현시, 변경될 기능이 많아보이니, 주석을 잘 달아주시면 좋을 것 같네요.
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
  // const [questions, setquestions] = useState([{question: null, tag: null, answer: null}]);

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
  
  const handleSaveClick = async () => {
    try {
      console.log('new question을 위한 handleSaveClick 돌아가는중')
      const path = window.location.pathname.split('/');
      const word = decodeURI(path[1]);
      const server = process.env.NEXT_PUBLIC_SERVER_BASE_URL;
      const instance = '/questionRoutes/makequestions';
      console.log('inputValue :', inputValue);
      await axios.post(server + instance, { word, question: inputValue });
      return;
      // setquestions(response.data.questions);
    } catch (error: any) {
        console.error('error 발생 in handleSaveClick function')
    }
    
    // (10.21. 기준) 아래는 레거시 코드.
    // const lastEntry = inputHistory[inputHistory.length - 1];
    // const newId = lastEntry ? lastEntry.id + 1 : 1;

    // const newInputEntry: InputEntry = { id: newId, value: inputValue };
    // setInputHistory([...inputHistory, newInputEntry]);

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
      {/* {inputHistory.map((entry) => (
        <div className={styles.entryStyle} key={entry.id}>
          <StyledButton>
            {entry.value}
            <span className={styles.deleteEntryButton} onClick={() => handleEntryDelete(entry.id)}>
              <AiOutlineClose size={12} /> 
            </span>
          </StyledButton>   
        </div>
      ))} */}

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
              placeholder="창의 융합 질문을 만들어봐요!"
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