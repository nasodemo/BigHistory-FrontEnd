"use client"

import React, { useState , useCallback, useEffect, useRef} from 'react';
import styles from './questions.module.css';
import data from '../../../../../public/data.json';
import { usePathname } from 'next/navigation';
import axios from 'axios';


const useForceUpdate = () => {
  const [, setTick] = useState(0);
  return useCallback(() => setTick(tick => tick + 1), []);
}

interface PopupPosition {
  top: number;
  left: number;
}

const Quesitons = () => {
  const [word, setWord] = useState<string | null>(null);
  const [questions, setQuestions] = useState([{question: null, tag: null, answer: null}]);
  const [message, setMessage] = useState<string | null>(null);
  const pathname = usePathname();
  const [loading, setLoading] = useState<boolean>(false);

  const tagToString = (questions: any) => {
    for (let i = 0; i < questions.length; i++) {
      if (typeof(questions[i].tag)=='object') { 
        let tag = questions[i].tag;
        let str = '';
        for (let j = 0; j < tag.length; j++) {
          str += tag[j];
          if (j < tag.length - 1) {
            let n = tag[j].length;
            str += ' & ';
          }
        }
      questions[i].tag = str;
    }}
    return questions;
  }
  const handleSearch = async () => {
    try {
      console.log('question handleSearch 돌아가는중')
      const path = pathname.split('/');
      const word = decodeURI(path[1]);
      setWord(word);
      const server = process.env.NEXT_PUBLIC_SERVER_BASE_URL;
      const instance = '/questionRoutes/gptquestion';
      let response = await axios.post(server + instance, { word, questionsNum: 5 }); // questionsNum 옵션에 5를 보내면 새로운 질문을 생성하지 않습니다.
      console.log('response :', response.data);
      response.data.questions = tagToString(response.data.questions);
      setQuestions(response.data.questions);
      setMessage(response.data?.message);
    } catch (error: any) {
        console.error('error 발생 in question', error)
        setMessage(error.response?.data.message);
        }
    };

  const getAnswer = async (question: string | null, tag: any) => {
    try {
      const index = questions.findIndex((item) => item.question === question);
      if (questions[index].answer != '') {
        return;
      } else {
        const path = pathname.split('/');
        const word = decodeURI(path[1]);
        setWord(word);
        setLoading(true);
        const server = process.env.NEXT_PUBLIC_SERVER_BASE_URL;
        const instance = '/questionRoutes/answer';
        const response = await axios.post(server + instance, { word, question, tag });
        setLoading(false);

        if (response.data) {
          let newQuestions = [...questions];
          newQuestions[index].answer = response.data.answer;
          newQuestions = tagToString(newQuestions);
          console.log('newQuestions :', newQuestions);
          setQuestions(newQuestions);
        }
        setMessage(response.data?.message);
      }
    } catch (error: any) {
      console.error('error 발생 in getAnswer', error); 
      setMessage(error.response?.data.message);
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<{question: string, tag: string, answer: string} | null>(null); ;  
  const [popupPosition, setPopupPosition] = useState<PopupPosition | null>(null);
  const forceUpdate = useForceUpdate();
  
  const updatePopupPosition = () => { 
      let top;
    
    if (window.scrollY <175) {
      top=200;
    } else {
      top = (window.scrollY - 150);
    }
    let left;
    
    if (screen.width < 800) {
        left = (screen.width * 24/10);
    } else {
        left = 2000 ;
    }
    
    setPopupPosition({ top, left });
};
  

  const handleButtonClick = (item : any) => {
    setSelectedItem(item);
    setIsPopupVisible(true);
    forceUpdate();
    updatePopupPosition(); 
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
    
  };



  return (
    <div >
      <div >
      {questions && questions.map((item, index) => (
        <React.Fragment key={index}>
          <div className={styles.center}>
          <button className={styles.styledButton} onClick={() => {
              handleButtonClick(item); 
              getAnswer(item.question, item.tag);
            }}>
            <h5>{item.tag} 융합질문</h5>
            <p>{item.question}</p>
          </button>
          </div>
        </React.Fragment>
      ))}
      <div>
      {isPopupVisible && selectedItem && popupPosition &&(
       questions.map((item, index)=>(
          <div 
          className={styles.popup} 
          style={{
          top: `${popupPosition.top}px`,
          left: `${popupPosition.left}px`,
          transform: 'translate(-50%, -50%)',
          position: 'absolute',
          zIndex: 1000}} 
          key={index}>
            <div style={{display:'flex'}}>
            <h3>ChatGPT의 답변</h3>
            <button style={{position:'absolute',right:'10px',fontSize:'20px', height:'30px', border:'none',backgroundColor:'transparent'}} onClick={handleClosePopup}>x</button>
            </div>
            <p>{selectedItem?.answer}</p>
            {loading==true && (
              <p>GPT가 답변을 생각하고 있어요.<br/>잠시만 기다려주세요!</p>
            )}
         </div>
        ))
      )}
      </div>
      </div>
    </div>
  );
};

export default Quesitons;
