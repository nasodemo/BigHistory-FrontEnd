"use client"

import React, { useState , useCallback, useEffect} from 'react';
import styles from './questions.module.css';
import data from '../../../../../../public/data.json';
import { usePathname } from 'next/navigation';
import axios from 'axios';


const useForceUpdate = () => {
  const [, setTick] = useState(0);
  return useCallback(() => setTick(tick => tick + 1), []);
}

const Quesitons =  () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState<{question: string, tag: string, answer: string} | null>(null); ;  
    const forceUpdate = useForceUpdate();

    const [word, setword] = useState<string | null>(null);
    const [questions, setquestions] = useState([{question: null, tag: null, answer: null}]);
    const [message, setMessage] = useState<string | null>(null);
    const pathname = usePathname();

    const handleSearch = async () => {
        try {
          console.log('question handleSearch 돌아가는중')
          const path = pathname.split('/');
          const word = decodeURI(path[1]);
          setword(word);
          const server = process.env.NEXT_PUBLIC_SERVER_BASE_URL;
          const instance = '/content/questions';
          const response = await axios.post(server + instance, { word });
          console.log('response :', response.data);
          setquestions(response.data.questions);
          setMessage(response.data?.message);
        } catch (error: any) {
            console.error('error 발생 in question')
            // console.error(error);
            setMessage(error.response?.data.message);
        }
    
    };
    
  const makeQuestions = async (question: string) => {
    try {
      console.log('searchquestion \n before of question', question)
      if (question == 'loading') {
        console.log('loading..')
        setMessage('loading')
        return
      }
      
      const path = pathname.split('/');
      const word = decodeURI(path[1]);
      setword(word);
      const server = process.env.NEXT_PUBLIC_SERVER_BASE_URL;
      const instance = '/content/answer';
      const response = await axios.post(server + instance, { word, question });
      // console.log('response :', response.data);
      if (response.data) {
        // console.log('response.data :', response.data);
        const index = questions.findIndex((item) => item.question === question);
        const newQuestions = [...questions];
        newQuestions[index].answer = response.data;
        console.log('newQuestions :', newQuestions);
        setquestions(newQuestions);
      }
      setMessage(response.data?.message);
    } catch (error: any) {
      console.error('error 발생 in makeQuesiton') 
      setMessage(error.response?.data.message);
    }
  };
  
  useEffect(() => {
    console.log('summery 작동 시작')
    handleSearch();
  }, []);
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
      {questions && questions.map((item, index) => (
        <React.Fragment key={item.question}>
          <button className={styles.styledButton} 
            onClick={() => {
              handleButtonClick(item); 
              makeQuestions(item.question || 'loading');
            }}>
            <h5>{item.tag} 융합질문</h5>
            <p>{item.question}</p>
          </button>
        </React.Fragment>
      ))}
      {/* 나중에 팝업창 개선해야될듯요. ESC */}
      {isPopupVisible && selectedItem && ( questions &&
       questions.map((item, index)=>(
        <div className={styles.popup} key={item.question}>
            <div style={{ display:'flex' }}>
            <h3>ChatGPT의 답변</h3>
            <button style={{position:'absolute',right:'10px',fontSize:'20px', height:'30px', border:'none',backgroundColor:'transparent'}} onClick={handleClosePopup}>x</button>
            </div>
            <br/>
            <p>{ selectedItem && selectedItem?.answer}</p>
        </div>
        )))
      }
    </div>
  );
};

export default Quesitons;