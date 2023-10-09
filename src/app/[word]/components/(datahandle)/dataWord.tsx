'use client'
import { useState } from 'react';
import styles from '../../word.module.css'
import { usePathname } from "next/navigation";
// interface DataWordProps {
//     word: string;
//     message: string | null;
// }

export default function DataWord() {
    const [word, setWord] = useState<string>("");
    const [count, setCount] = useState<number>(0);
    const pathname = usePathname();

    const handleSearch = async () => {
        // 아래의 코드는 뭔가 골치아픈데, 차후 해결해야할 문제임.
        const path = pathname.split('/')
        setWord(path[1])
        // console.log(path[1], 'asdf', word,  '워드가 뭘까용?');
    };

    if (count == 0) {
        console.log('count가 0이라서 검색을 시작합니다.');
        handleSearch();
        setCount(1);
    }
    return (
        <div className={styles.iconWithText}>
            {word && <h1>{word}</h1>}
        </div>
    );
}