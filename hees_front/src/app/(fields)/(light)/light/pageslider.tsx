"use client"

import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import Carousel from './Carousel';
import styles from '@/app/(fields)/field.module.css'
import Link from 'next/link';
import ShowInputform from '@/app/components/ShowInputform';

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

                    <p style={{fontSize:'9pt'}}>키워드와 관련된 학문융합적 질문을 만들어보세요! </p>

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
                <ShowInputform></ShowInputform>
            <Link href={"/addquestion"} style={{textDecoration:'none', color:'black'}}>
                <div>
                    <p style={{textDecoration:'none', fontSize:'10pt'}}>
                    도움이 필요해요
                    </p>
                </div>
            </Link>
            
            <br />
                </div>
            </Slider>
            
        </div>
    );
};

export default Pageslider;