import styles from '../field.module.css'
import Box from "@/app/components/box";
import Header from '@/app/components/Header';
import Link from 'next/link';



export default function threshold1() {
    return (
        <div className={styles.container}>
        <header className={styles.headingLg}>
            언어
        </header>
        <Box>
            <p className={styles.list}>&nbsp; 물리학적인 원리와 광학적 현상을 바탕으로, 빛의 표현과 상징성이 예술과 문학에서 어떻게 다루어지며, 이로 인해 어떤 감정과 아이디어가 전달되는지 알아보세요.</p>
            <Link href='/' className={styles.hashText}>#물리학</Link> <Link className={styles.hashText} href='/'>#인문학</Link>
        </Box>
        </div>
    );
}
