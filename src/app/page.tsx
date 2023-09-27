import Searchbar from "./(Searchbar)/Searchbar";
import styles from './page.module.css';
import Login from "./(login)/login";


export default function HomePage() {
    return (
        <>
            <p className={styles.title}>History for Everything</p>
            <p className={styles.semititle}>with Eight Sights</p>
                
            <Searchbar />
            <div style={{marginTop:'90%'}}>
                <div className={styles.bottomcontainer}>
                <Login>
                    <p className={styles.normaltext}>로그인</p>
                </Login>
                </div>
                <br/>
                <div className={styles.bottomcontainer}>
                <Login>
                    <p className={styles.normaltext}>회원가입</p>
                </Login>
                </div>
            </div>
            
        </>
    );
}

