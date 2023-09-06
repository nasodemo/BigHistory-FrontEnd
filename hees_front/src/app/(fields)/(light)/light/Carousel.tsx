"use client"

import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Link from 'next/link';
import styles from '@/app/(fields)/field.module.css'
import Box from '@/app/components/box';
import { TbBoxPadding } from 'react-icons/tb';

interface carousel {
    children: any; 
  }


const Carousel =()=>{
    const settings={
        dots:true,
        infinite:true,
        speed:1000,
    }
    return(
        <div className="carousel" style={{width:'300px', padding:'5px'}}>
            <Slider{...settings}>
                <div>
                    <div>
                        <Link href='/lightq1' style={{textDecoration:'none'}}>
                        <Box>
                            <p className={styles.list}>&nbsp; 물리학적인 원리와 광학적 현상을 바탕으로, 빛의 표현과 상징성이 예술과 문학에서 어떻게 다루어지며, 이로 인해 어떤 감정과 아이디어가 전달되는지 알아보세요.</p>
                            <p></p>
                            <Link className={styles.hashText} href='/'>#물리학</Link> <Link className={styles.hashText} href='/'>#인문학</Link>
                        </Box>
                        </Link>
                    </div>
                    <div>
                        <p></p>
                        <Link href='/'  style={{textDecoration:'none'}}>
                        <Box>
                            <p className={styles.list}>&nbsp; 빛이 생물체의 생존과 발전에 어떠한 영향을 미치는지, 광합성과 같은 생물학적 과정과 빛의 상호작용에 대해 자세히 설명해주세요.</p>
                            <p></p>
                            <Link className={styles.hashText} href='/'>#물리학</Link> <Link className={styles.hashText} href='/'>#생명과학</Link>
                        </Box>
                        </Link>
                    </div>
                    
                    <div>
                        <p></p>
                        <Link href='/'  style={{textDecoration:'none'}}>
                        <Box>
                            <p className={styles.list}>&nbsp; 빛이 생물체의 생존과 발전에 어떠한 영향을 미치는지, 광합성과 같은 생물학적 과정과 빛의 상호작용에 대해 자세히 설명해주세요.</p>
                            <p></p>
                            <Link className={styles.hashText} href='/'>#물리학</Link> <Link className={styles.hashText} href='/'>#생명과학</Link>
                        </Box>
                        </Link>
                    </div>
                </div>
                <div>
                    <div>
                        <Link href='/lightq1' style={{textDecoration:'none'}}>
                        <Box>
                            <p className={styles.list}>&nbsp; 물리학적인 원리와 광학적 현상을 바탕으로, 빛의 표현과 상징성이 예술과 문학에서 어떻게 다루어지며, 이로 인해 어떤 감정과 아이디어가 전달되는지 알아보세요.</p>
                            <p></p>
                            <Link className={styles.hashText} href='/'>#물리학</Link> <Link className={styles.hashText} href='/'>#인문학</Link>
                        </Box>
                        </Link>
                    </div>
                    <div>
                        <p></p>
                        <Link href='/'  style={{textDecoration:'none'}}>
                        <Box>
                            <p className={styles.list}>&nbsp; 빛이 생물체의 생존과 발전에 어떠한 영향을 미치는지, 광합성과 같은 생물학적 과정과 빛의 상호작용에 대해 자세히 설명해주세요.</p>
                            <p></p>
                            <Link className={styles.hashText} href='/'>#물리학</Link> <Link className={styles.hashText} href='/'>#생명과학</Link>
                        </Box>
                        </Link>
                    </div>
                    
                    <div>
                        <p></p>
                        <Link href='/'  style={{textDecoration:'none'}}>
                        <Box>
                            <p className={styles.list}>&nbsp; 빛이 생물체의 생존과 발전에 어떠한 영향을 미치는지, 광합성과 같은 생물학적 과정과 빛의 상호작용에 대해 자세히 설명해주세요.</p>
                            <p></p>
                            <Link className={styles.hashText} href='/'>#물리학</Link> <Link className={styles.hashText} href='/'>#생명과학</Link>
                        </Box>
                        </Link>
                    </div>
                </div>
                <div>
                <div>
                        <Link href='/lightq1' style={{textDecoration:'none'}}>
                        <Box>
                            <p className={styles.list}>&nbsp; 물리학적인 원리와 광학적 현상을 바탕으로, 빛의 표현과 상징성이 예술과 문학에서 어떻게 다루어지며, 이로 인해 어떤 감정과 아이디어가 전달되는지 알아보세요.</p>
                            <p></p>
                            <Link className={styles.hashText} href='/'>#물리학</Link> <Link className={styles.hashText} href='/'>#인문학</Link>
                        </Box>
                        </Link>
                </div>
                <div>
                        <p></p>
                        <Link href='/'  style={{textDecoration:'none'}}>
                        <Box>
                            <p className={styles.list}>&nbsp; 빛이 생물체의 생존과 발전에 어떠한 영향을 미치는지, 광합성과 같은 생물학적 과정과 빛의 상호작용에 대해 자세히 설명해주세요.</p>
                            <p></p>
                            <Link className={styles.hashText} href='/'>#물리학</Link> <Link className={styles.hashText} href='/'>#생명과학</Link>
                        </Box>
                        </Link>
                    </div>
                    
                    <div>
                        <p></p>
                        <Link href='/'  style={{textDecoration:'none'}}>
                        <Box>
                            <p className={styles.list}>&nbsp; 빛이 생물체의 생존과 발전에 어떠한 영향을 미치는지, 광합성과 같은 생물학적 과정과 빛의 상호작용에 대해 자세히 설명해주세요.</p>
                            <p></p>
                            <Link className={styles.hashText} href='/'>#물리학</Link> <Link className={styles.hashText} href='/'>#생명과학</Link>
                        </Box>
                        </Link>
                    </div>
                </div>
            </Slider>
            <br/>
        </div>
    );
}

export default Carousel;