"use client";
import styles from '../../word.module.css'
import axios from "axios";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
  
export default function DataSummery() {
    const [summery, setsummery] = useState<string | null>(null);
    const [message, setMessage] = useState<string | null>(null);
    const pathname = usePathname();
    const [count, setCount] = useState<number>(0);
    const handleSearch = async () => {
        try {
            // 아래의 코드는 뭔가 골치아픈데, 차후 해결해야할 문제임.
          const path = pathname.split('/')
          const word = path[1]
          const server = process.env.NEXT_PUBLIC_SERVER_BASE_URL;
          const instance = '/content/summery'; 
          const response = await axios.post(server + instance, { word });
          console.log('response :', response.data);
          setsummery(response.data.summery);
          setMessage(response.data?.message);
          const count = 1
        } catch (error: any) {
            console.error(error);
            setMessage(error.response.data.message);
            const count = 1
        }
    
    };

    if (count == 0) {
        handleSearch();
        setCount(1);
    }
    // 수정

    return (
      <div>
        <p className={styles.generalText}>
        {summery && <p>{summery}</p>}
        </p>
      </div>
    );
}