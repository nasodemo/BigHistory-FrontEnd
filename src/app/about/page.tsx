import styles from './about.module.css'

export default function Home() {
    return(
        <>
        <p className={styles.bigbold}>자연과학</p>
        <p className={styles.bigbold}>인문학</p>
        <p className={styles.bigbold}>예술체육학</p>
        <p className={styles.bigbold}>사회학</p>
        <p className={styles.bigbold}>교육학</p>
        </>
    )
}