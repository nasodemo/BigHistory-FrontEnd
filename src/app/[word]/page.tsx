import styles from './word.module.css'
import { BsFillCheckCircleFill } from 'react-icons/bs';
import Pageslider from './components/(pageslider)/pageslider';
import data from '../../../public/data.json'
import DataWord from './components/(datahandle)/dataWord';
import DataSummery from './components/(datahandle)/dataSummery';


export default function Lightmain() {


    return (
        <div>
            <br/>
            <div className={styles.iconWithText}>
            
            {/* <h1> */}
                {/* &nbsp;{data.word} */}
            {/* </h1> */}
            <DataWord></DataWord>
            {/* 수정 */}

            <BsFillCheckCircleFill className={styles.check}></BsFillCheckCircleFill>
            </div>

            {/* <p className={styles.generalText}>
            &nbsp;{data.summary}
            </p> */}
            <DataSummery/>
            {/* 수정 */}
            <hr/>
            <Pageslider></Pageslider>
            <br/>
            <br/>
        </div>
    ); 
};
