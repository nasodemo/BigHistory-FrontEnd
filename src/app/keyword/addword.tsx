'use client';
import { useState } from 'react';
import axios from 'axios';

const AddWord: React.FC = () => {
  const [word, setWord] = useState<string>('');
  const [summery, setsummery] = useState<string>('');
  const [question, setquestion] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async () => {
    try {
      console.log(summery);
      await axios.post('http://localhost:4000/api/test/add', { word, summery, question });
      setMessage('Word added successfully!');
    } catch (error: any) {
      console.error(error);
      if (error.response?.data) {
          setMessage(error.response?.data.message);
        }
      else {
          setMessage(error);
      }    
    }
  };

  return (
    <div>
      <h2>Add a Word</h2>
      <div>
        <input
          placeholder="Word"
          value={word}
          onChange={e => setWord(e.target.value)}
        />
      </div>
      <div>
        <textarea
          placeholder="summery"
          value={summery}
          onChange={(e) => setsummery(e.target.value)}
        />
      </div>
      <div>
        <textarea
          placeholder="question"
          value={question}
          onChange={(e) => setquestion(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>Add</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default AddWord;