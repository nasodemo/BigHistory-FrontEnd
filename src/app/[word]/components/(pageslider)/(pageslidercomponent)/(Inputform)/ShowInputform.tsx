'use client'

import InputForm from "./Inputform";
import { useState } from "react";


const ShowInputform = () => {
    const [savedData, setSavedData] = useState<string>(''); // 'savedData' 타입 지정
  
    const handleSave = (data: string) => { // 'data'의 타입을 'string'으로 지정
      setSavedData(data);
    };

  
    return (
      <div>
        <br/>
        <InputForm onSave={handleSave} />
        {savedData && <form id='saveddata'> {savedData} </form>}
      </div>
    );
  };
  
  export default ShowInputform;