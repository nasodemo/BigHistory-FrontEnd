import Image from "next/image";
import Searchbar from "./Searchbar";
import styles from './Home.module.css';
import '@/app/components/styles.module.css';
import Login from "./login"
import {BsOctagonFill} from 'react-icons/bs'


export default function HomePage() {
    return (
        <div>
            <p className={styles.title}>History for Everything</p>
            <p className={styles.semititle}>with Eight Sights</p>
                
            <Searchbar />
            <div className={styles.bottomcontainer}>
            <Login>
                <p className={styles.normaltext}>로그인</p>
            </Login>
            <p></p>
            <Login>
                <p className={styles.normaltext}>회원가입</p>
            </Login>
            </div>
        </div>
    );
}

