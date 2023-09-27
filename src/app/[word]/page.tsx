import styles from './word.module.css'
import "public/check.svg"
import { BsFillCheckCircleFill } from 'react-icons/bs';
import Pageslider from './components/(pageslider)/pageslider';
import data from '../../../public/data.json'


export default function Lightmain() {


    return (
        <div>
            <br/>
            <div className={styles.iconWithText}>
            <h1>
                &nbsp;{data.word}
            </h1>
            <BsFillCheckCircleFill className={styles.check}></BsFillCheckCircleFill>
            </div>
            <p className={styles.generalText}>
            &nbsp;{data.summary}
            </p>
            <hr/>
            <Pageslider></Pageslider>
            <br/>
            <br/>
        </div>
    ); 
};
