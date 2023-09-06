"use client"

import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import Carousel from './Carousel';
import styles from '@/app/(fields)/field.module.css'
import Link from 'next/link';
import ShowInputform from '@/app/components/ShowInputform';
import InputWithCopyButton from '@/app/components/InputWithCopyButton';

const Pageslider: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const sliderRef = useRef<Slider | null>(null);  // Slider 타입 명시

    const settings = {
        infinite: true,
        speed: 1000,
        afterChange: (current: number) => setCurrentSlide(current)  // 명시적 타입 정의
    };

    const goToSlide = (slideIndex: number) => {
        if (sliderRef && sliderRef.current) {
            sliderRef.current.slickGoTo(slideIndex);  // 타입 오류를 방지하기 위한 조건
        }
    };

    return (
        <div className="Pageslider" style={{ width: '300px', padding: '5px' }}>
            <div className="bar-navigation">
                {['질문', '8Sights', '질문 만들기'].map((bar, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        style={{
                            width: '33.33%',
                            background: 'white',
                            borderColor: 'transparent',
                            borderBottomWidth:'4px',
                            borderBottomColor: currentSlide === index ? '#A1DBD8' : 'transparent',  // 바닥 border 색상만 변경
                            height: '30px',
                            color: 'black',
                            outline: 'none',
                            borderWidth: '0 0 2px',  // 바닥 border 크기 설정
                            boxShadow: 'none',
                            transition: 'borderBottomColor 0.3s'  // 애니메이션 효과 추가 (선택사항)
                        }}
                    >
                        {bar}
                    </button>
                ))}
            </div>
            <Slider {...settings} ref={sliderRef}>
                <div>
                    <p className={styles.headingLg}>
                    Big Questions for 빛
                    </p>  

                    <br/>

                    <Carousel/>
            
                </div>
                    <div>
                    <p className={styles.headingLg}>주요 8 관점</p>
                    <div style={{display:'flex', alignContent:'space-evenly', padding:'10px'}}>
                    {/* <RoundBox>자연과학</RoundBox> */}
                    {/* <RoundBox>인문학</RoundBox>
                    <Box>교육학</Box>
                    </div>
                    <div style={{display:'flex', alignContent: 'space-evenly', padding: '10px'}}>
                    <Box>사회학</Box>
                    <Box>예술체육학</Box>
                    <Box>공학</Box>
                    </div>
                    <div style={{display:'flex', alignContent: 'space-evenly', padding: '10px'}}>
                    <Box>의약학</Box>
                    <Box>농수해양학</Box> */}
                    </div>
                </div>
                <div>
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


                    <div style={{lineHeight:'0.5'}}>
                        <p style={{fontWeight:'bolder', fontSize:'14pt'}}>키워드와 관련된 학문융합적 </p>
                        <p style={{fontWeight:'bolder', fontSize:'14pt'}}>질문을 만들어보세요 </p>
                    </div>
            
                    <ShowInputform></ShowInputform>
            
                    <br />
                </div>
            </Slider>
            
        </div>
    );
};

export default Pageslider;