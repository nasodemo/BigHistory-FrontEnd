import Box from "@/app/components/box";
import styles from "@/app/(fields)/field.module.css"
import Link from "next/link";


export default function threshold1() {
    return (
        <>
        <p></p>
        <Box>
            <p className={styles.list}>&nbsp; 물리학적인 원리와 광학적 현상을 바탕으로, 빛의 표현과 상징성이 예술과 문학에서 어떻게 다루어지며, 이로 인해 어떤 감정과 아이디어가 전달되는지 알아보세요.</p>
            <p></p>
            <Link className={styles.hashText} href='/'>#물리학</Link> <Link className={styles.hashText} href='/'>#인문학</Link> 
            {/* <AiTwotoneStar style={{width: '20px', height: '20px'}}></AiTwotoneStar> */}
        </Box>

        <Box>
                    <p></p>
                        <div className={styles.generalText}>
                        &nbsp;빛은 물리학적인 원리와 광학적 현상을 통해 많은 예술과 문학 작품에서 중요한 상징성과 의미를 가지고 다뤄지고 있습니다. 이러한 다양한 표현과 상징성은 빛의 특성, 색상, 빛과 어둠의 대립, 빛의 속도 등과 연관되어 다양한 감정과 아이디어를 전달합니다.
                        <br />
                        <p>빛과 어둠의 대립: 빛은 종종 지식, 진리, 영성 등의 상징성을 갖습니다. 어둠은 불확실성, 미지의 영역, 무지 등을 나타낼 수 있습니다. 이러한 대립은 많은 작품에서 인간 경험의 복잡성과 양면성을 나타내는 데 사용됩니다.</p>
                        <p>빛의 색상: 빛의 색상은 문화적인 맥락과 연관되어 다양한 감정과 아이디어를 전달합니다. 예를 들어, 붉은색은 열정, 사랑, 위험을 상징할 수 있고, 푸른색은 평온, 차분함, 무한성을 나타낼 수 있습니다. 작가들은 색상을 이용하여 감정적인 의미와 미적인 경험을 강조합니다.</p>
                        <p>빛의 변화와 시간: 빛의 변화는 시간과 연결되어 변화의 과정과 불변의 원리를 나타내는 데 사용됩니다. 일출과 일몰은 새로운 시작과 종료, 변화와 연속성을 상징하는데 자주 활용됩니다.</p>
                        <p>빛의 속도와 환경: 빛의 속도는 빠르고 불가능한 것을 나타내는 데 사용됩니다. 또한 빛의 속도와 환경 간의 관계는 인간의 경계와 자연의 순환을 나타내는 데 활용될 수 있습니다.</p>
                        </div>
        </Box>
        <br/>
        
        </>
    );
}