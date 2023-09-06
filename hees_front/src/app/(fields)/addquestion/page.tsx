import styles from '@/app/(fields)/field.module.css'
import InputWithCopyButton from '@/app/components/InputWithCopyButton'

export default function threshold1() {
    return (
    <>
    <p className={styles.headingLg}>Make Your Own Question</p>
    <p style={{fontSize:'10pt'}}>가이드라인에 따라 자신만의 창의적인 질문을 <br/>만들고 해결해보아요</p>
    
    <p style={{fontSize:'15pt', fontWeight:'bold'}}>관심있는 분야를 선택해보세요</p>

    <button style={{height:'25px', width:'60px', borderRadius:'35px', border:'none', padding:'0', backgroundColor: 'lightgreen'}}>
        <p style={{fontSize:'1pt'}}>자연과학</p>
    </button>
    &nbsp;
    <button style={{height:'25px', width:'60px', borderRadius:'35px', border:'none', padding:'0', backgroundColor: 'lightgreen'}}>
        <p style={{fontSize:'1pt'}}>인문학</p>
    </button>
    &nbsp;
    <button style={{height:'25px', width:'60px', borderRadius:'35px', border:'none', padding:'0', backgroundColor: 'lightgreen'}}>
        <p style={{fontSize:'1pt'}}>예술체육학</p>
    </button>
    &nbsp;
    <button style={{height:'25px', width:'60px', borderRadius:'35px', border:'none', padding:'0', backgroundColor: 'lightgreen'}}>
        <p style={{fontSize:'1pt'}}>교육학</p>
    </button>

    <br/>
    <br/>

    <p style={{fontSize:'15pt', fontWeight:'bold'}}>키워드와 관련한 자신의 경험을 떠올려보세요</p>

    <p style={{lineHeight:'10'}}>.</p>

    <InputWithCopyButton></InputWithCopyButton>
    </>
    )
};