import Searchbar from "./(Searchbar)/Searchbar";
import styles from './page.module.css';
import Link from "next/link";
import Image from "next/image";


export default function HomePage() {
    return (
        <>
            <div style={{ display:'grid', justifyItems: 'center'}}>
            <div style={{marginTop:'60px', marginBottom:'15px', height:'50px', display:'flex', position:'relative', placeItems:'center'}}>
                <p className={styles.title}>OASIS</p>&nbsp;&nbsp;
                <Image src={'/logo.png'} alt='' width={40} height={40} style={{left:0}}></Image>
            </div>
            <Searchbar />
            <br/>
            
            </div>
            {/* <div style={{marginTop:'90%'}}>
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
            </div> */}
            
        </>
    );
}

