"use client";
import styles from '../../word.module.css'
import axios from "axios";
import { usePathname } from "next/navigation";
import { useState } from "react";

  
export default function DataDescription() {
  const [descriptions, setdescriptions] = useState([{title: null, content: null}]);
  const [message, setMessage] = useState<string | null>(null);
  const [catagory, setCatagory] = useState<string | null>(null);
  const pathname = usePathname();
  const [count, setCount] = useState<number>(0);
  const handleSearch = async () => {
      try {
        // 아래의 코드는 뭔가 골치아픈데, 차후 해결해야할 문제임.
        const path = pathname.split('/')
        const word = path[1]
        const catagory = path[2]
        setCatagory(catagory);
        const server = process.env.NEXT_PUBLIC_SERVER_BASE_URL;
        const instance = '/content/description'; 
        const response = await axios.post(server + instance, { word, catagory });
        console.log('response :', response.data);
        setdescriptions(response.data);
        setMessage(response.data?.message);
        const count = 1
      } catch (error: any) {
          console.error(error);
          setMessage(error.response?.data.message);
          const count = 1
      }
  };

  if (count == 0) {
      handleSearch();
      setCount(1);
  };
  // 수정
    
    return (
      <div className={styles.container}>
      <h2 className={styles.header}>{catagory}</h2>
      {descriptions.map((item, index) => (
          <div key={index}>
              <h3 className={styles.title}>{index+1}. {item.title}</h3>
              <p className={styles.paragraph}>{item.content}</p>
              <br/>
          </div>
      ))}
      
  </div>
    );
}