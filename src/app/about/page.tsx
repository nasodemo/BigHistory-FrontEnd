import styles from './about.module.css'
import Image from 'next/image'


export default function Home() {
    return(
        <>
        <div className={styles.container}>
            <h1>What is OASIS?</h1>
            <div className={styles.flex}>
                <Image className={styles.logo} src='/logo.png' alt='' width={100} height={100}></Image>
                <p className={styles.comment}>OASIS(Online AI-based System for Inquiry Studies)는 중등학교 학생의 융합적 사고 증진을 위하여 개발된 웹앱입니다.
                    <br/>
                    OASIS에서 새로운 지식을 생성하고 창의적인 질문을 만들어보세요.
                </p>
            </div>
            <hr/>
            <h1>How to use OASIS</h1>
            <h3>01 궁금한 키워드 검색하기</h3>
            <h3>02 8가지 분야의 지식 읽기</h3>
            <h3>03 나만의 융합 질문 만들기</h3>
            <h3>04 ChatGPT 및 사람들의 질문 구경하기</h3>
            <h3>05 나의 최종 질문 입력하고 답변 읽기</h3>
            <hr/>
            <h1>Eight Sights</h1>
            <p>&nbsp;Eight Sights는 한국연구재단이 제시하는 학문 대분류에 기반하여 다음과 같이 구성되어 있습니다.</p>
        </div>
       
        </>
    )
}
