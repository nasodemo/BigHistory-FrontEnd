import Searchbar from "./(Searchbar)/Searchbar";
import styles from './page.module.css';
import Link from "next/link";


export default function HomePage() {
    return (
        <>
            <p className={styles.title}>History for Everything</p>
            <p className={styles.semititle}>with Eight Sights</p>
                
            <Searchbar />
            <div style={{marginTop:'90%'}}>
                <div className={styles.bottomcontainer}>
                    <div className={styles.loginBox}>
                        <Link href='/login'>
                        <p className={styles.normaltext}>로그인</p>
                        </Link>
                    </div>
                <br/>
                    <div className={styles.loginBox}>
                        <Link href='/register'>
                        <p className={styles.normaltext}>회원가입</p>
                        </Link>
                    </div>
                </div>
            </div>
            
        </>
    );
}

