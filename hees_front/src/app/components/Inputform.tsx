import React, { useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import styles from './styles.module.css'

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

  const handleButtonClick = () => {
    setInputVisible(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleSaveClick = () => {
    const newInputEntry: InputEntry = { id: Date.now(), value: inputValue };
    setInputHistory([...inputHistory, newInputEntry]);
    setInputVisible(false); // 입력 버튼을 누르면 입력창을 숨김
    setInputValue('');
  };

  const handleClearClick = () => {
    setInputHistory([]);
  };

  return (
    <div>
      <div>
        {inputHistory.map((entry) => (
          <div style={{paddingBottom:'20px'}}>
          <div key={entry.id} className={styles.prettyBox}>
            {entry.value}
          </div>
          </div>
        ))}

        {!inputVisible && ( // inputVisible이 false일 때 버튼을 보임
          <div style={{ display: 'grid', placeItems: 'center' }}>
            <button onClick={handleButtonClick} style={{ background: 'none', border: 'none' }}>
              <AiOutlinePlusCircle style={{ color: 'lightgray', width: '40px', height: '40px' }} />
            </button>
            
          </div>
        )}

        {inputVisible && (
          <div>
            <textarea
              rows={4}
              value={inputValue}
              onChange={handleInputChange}
              style={{
                borderRadius: '5pt',
                paddingLeft: '20px',
                paddingRight: '20px',
                paddingTop: '13px',
                paddingBottom: '13px',
                fontFamily: '-moz-initial',
                fontSize: '9pt',
                height: '100px',
                width: '90%',
                resize: 'none',
              }}
            />
            <div style={{ paddingLeft:'70%'}}>
            <button onClick={handleSaveClick} 
                    style={{backgroundColor:'#afdbd8', 
                            borderRadius:'35px', 
                            paddingTop:'8px', 
                            paddingBottom:'8px', 
                            paddingLeft:'12px', 
                            paddingRight:'12px',
                            border:'none',
                            fontSize:'9pt'
                            }}> 
              질문
            </button>
            </div>
          </div>
        )}
        <div style={{paddingLeft:'70%', paddingTop:'3px'}}>
        <button onClick={handleClearClick}
                style={{backgroundColor:'lightgray', 
                borderRadius:'35px', 
                paddingTop:'8px', 
                paddingBottom:'8px', 
                paddingLeft:'12px', 
                paddingRight:'12px',
                border:'none',
                fontSize:'9pt'
                }}
                >
          삭제
        </button>
        </div>
      </div>
    </div>
  );
};

export default InputForm;