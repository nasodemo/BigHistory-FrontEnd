"use client"

import React, { useState , useCallback} from 'react';
import styles from './questions.module.css'
import data from '../../../../../public/data.json'


const useForceUpdate = () => {
  const [, setTick] = useState(0);
  return useCallback(() => setTick(tick => tick + 1), []);
}

const Quesitons = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState<{question: string, tag: string, answer: string} | null>(null); ;  
    const forceUpdate = useForceUpdate();

  const questions=[
    {question: data.questions.question1, tag: data.questions.tag1, answer: data.questions.answer1},
    {question: data.questions.question2, tag: data.questions.tag2, answer: data.questions.answer2}
  ]

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