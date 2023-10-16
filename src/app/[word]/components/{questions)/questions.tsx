"use client"

import React, { useState , useCallback} from 'react';
import styles from './questions.module.css';
import data from '../../../../../public/data.json';
import { usePathname } from 'next/navigation';
import axios from 'axios';


const useForceUpdate = () => {
  const [, setTick] = useState(0);
  return useCallback(() => setTick(tick => tick + 1), []);
}

const Quesitons = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState<{question: string, tag: string, answer: string} | null>(null); ;  
    const forceUpdate = useForceUpdate();
    const [word, setword] = useState<string | null>(null);
    const [questions, setquestions] = useState([{question: null, tag: null, answer: null}]);
    const [message, setMessage] = useState<string | null>(null);
    const pathname = usePathname();
    const [count, setCount] = useState<number>(0);
    const handleSearch = async () => {
        try {
          // 아래의 코드는 뭔가 골치아픈데, 차후 해결해야할 문제임.
          const path = pathname.split('/');
          const word = path[1];
          setword(word);
          const server = process.env.NEXT_PUBLIC_SERVER_BASE_URL;
          const instance = '/content/questions'; 
          const response = await axios.post(server + instance, { word });
          console.log('response :', response.data);
          setquestions(response.data.questions);
          setMessage(response.data?.message);
          const count = 1;
        } catch (error: any) {
            console.error(error);
            setMessage(error.response?.data.message);
            const count = 1;
        }
    
    };
  
    if (count == 0) {
        handleSearch();
        setCount(1);
    };
    // 수정

  // const questions=[
  //   {question: data.questions.question1, tag: data.questions.tag1, answer: data.questions.answer1},
  //   {question: data.questions.question2, tag: data.questions.tag2, answer: data.questions.answer2}
  // ]
  // 수정

  const handleButtonClick = (item : any) => {
    setSelectedItem(item);
    setIsPopupVisible(true);
    forceUpdate();
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div>
      {questions.map((item, index) => (
        <React.Fragment key={item.question}>
          <button className={styles.styledButton} onClick={() => handleButtonClick(item)}>
            <h5>{item.tag} 융합질문</h5>
            <p>{item.question}</p>
          </button>
        </React.Fragment>
      ))}

      {isPopupVisible && selectedItem && (
       questions.map((item, index)=>(
        <div className={styles.popup} key={item.answer}>
            <div style={{display:'flex'}}>
            <h3>ChatGPT의 답변</h3>
            <button style={{position:'absolute',right:'10px',fontSize:'20px', height:'30px', border:'none',backgroundColor:'transparent'}} onClick={handleClosePopup}>x</button>
            </div>
          <p>{selectedItem.answer}</p>
        </div>
        ))
        
      )}
    </div>
  );
};

export default Quesitons;