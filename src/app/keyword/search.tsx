'use client';

import axios from 'axios';
import { useState } from 'react';

const Home = () => {
  const [word, setWord] = useState<string>("");
  const [summery, setsummery] = useState<string | null>(null);
  const [question, setquestion] = useState<string | null>(null);
  const [description, setdescription] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const handleSearch = async () => {
    try {
      console.log(word, '입력됨');
      const server = process.env.NEXT_PUBLIC_SERVER_BASE_URL;
      let instance = '/content/summery'; 
      let response = await axios.post(server + instance, { word });
      console.log('response1 :', response);
      setsummery(response.data.summery);
      instance = '/content/question'; 
      response = await axios.post(server + instance, { word });
      console.log('response :', response);
      setquestion(response.data.question);
      instance = '/content/description'; 
      response = await axios.post(server + instance, { word });
      console.log('response :', response);
      setdescription(response.data.description);
      setMessage(response.data?.message);
    } catch (error: any) {
      console.error(error);
      setMessage(error.response.data.message);
    }
  };

  return (
    <div>
      <h1>Word Search</h1>
      <input 
        type="text" 
        value={word}
        onChange={(e) => setWord(e.target.value)}
        placeholder="Enter a word"
      />
      <button onClick={handleSearch}>Search</button>
      <div>
      <br/>
        <p>summery line</p>
        {summery && <p>{summery}</p>}
      </div>
      <div>
        <br/>
        <p>question line</p>
        {question && <p>{question} <br/> typeof question: {typeof(question)}</p>}
      </div>
      <div>
        <br/>
        <p>description line</p>
        {description && <p>{description}</p>}
      </div>
      <div>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default Home;