// import Lightpage from "./lightpage";

// export default function lightmain() {
//     return(
//         <Lightpage/>
//     )
// }


import styles from '@/app/(fields)/field.module.css'
import Box from "@/app/components/box";
import "public/image/check.svg"
import Link from 'next/link';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import ShowInputform from '@/app/components/ShowInputform';
import Carousel from './Carousel';
import Pageslider from './pageslider';



export default function threshold1() {
    return (
        <>
            <div className={styles.iconWithText}>
            <p className={styles.headingLg}>
                빛
            </p>
            <BsFillCheckCircleFill className={styles.check}></BsFillCheckCircleFill>
            </div>
            
            <p className={styles.generalText}>
            &nbsp;빛(light)이란 좁은 의미에서 가시광선, 즉 일반적으로 사람이 볼 수 있는 영역의 전자기파를 의미하고, 넓은 의미에서 전파, 적외선, X선 등 모든 영역의 전자기파를 의미한다. 물리학에서 주로 넓은 뜻으로 쓰인다.
            </p>
            <hr/>
            <Pageslider></Pageslider>
            <br/>
            <br/>
        </>
    ); 
};
