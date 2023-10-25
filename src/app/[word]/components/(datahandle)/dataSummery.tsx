"use client";
import styles from '../../word.module.css'
import axios from "axios";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
  
export default function DataSummery() {
    const [summery, setsummery] = useState<string | null>(null);
    const [message, setMessage] = useState<string | null>(null);
    const pathname = usePathname();

    const handleSearch = async () => {
        try {
          const path = pathname.split('/')
          const word = decodeURI(path[1]);
          const server = process.env.NEXT_PUBLIC_SERVER_BASE_URL;
          const instance = '/content/summery'; 
          const response = await axios.post(server + instance, { word });
          console.log('summery :', response.data);
          setsummery(response.data.summery);
          setMessage(response.data?.message);
        } catch (error: any) {
            console.error('error 발생 in summery')
        }
    };

    useEffect(() => {
        console.log('summery 작동 시작')
        handleSearch();
    }, []);
    // 수정

    return (
      <div className={styles.generalText}>
        &nbsp;{summery && <p>{summery}</p>}
      </div>
    );
}