"use client"

import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import styles from './pageslider.module.css';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Link from 'next/link';
import StyledButton from '../../../(components)/(styledbutton)/styledbutton'
import Roundbox from '../(roundbox)/roundbox';
import ShowInputform from '@/app/(components)/(Inputform)/ShowInputform';
import Inputandsaveshow from '../(Inputandsave)/Inputandsaveshow';
import data from '../../../../../public/data.json'
import Quesitons from '../{questions)/questions';

const Pageslider: React.FC = () => {
    const [currentslide, setcurrentslide] = useState<number>(0);
    const sliderRef = useRef<Slider | null>(null);  // Slider 타입 명시

    const settings = {
        infinite: false,
        arrows: false,
        dots:false,
        slidesToShow:1,
        speed: 1000,
        afterChange: (current: number) => setcurrentslide(current)  // 명시적 타입 정의
    };

    const goToSlide = (slideIndex: number) => {
        if (sliderRef && sliderRef.current) {
            sliderRef.current.slickGoTo(slideIndex);  // 타입 오류를 방지하기 위한 조건
        }
    };

    return (
        <>
          <div className={styles.pagesliderWrapper}>
            <div className="bar-navigation">
              {['8Sights', '질문 만들기', '질문'].map((bar, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`${styles.barNavigationButton} ${currentslide === index ? styles.barNavigationButtonActive : styles.barNavigationButtonInactive}`}
                >
                  {bar}
                </button>
              ))}
            </div>
            <Slider {...settings} ref={sliderRef}>
              <div>
                <h2>&nbsp;8 관점</h2>
                <p>&nbsp;제시된 8 관점을 통해 {data.word}에 대해 탐구해 보아요. </p>
                <div className={styles.placecenter}>
                  <div className={styles.flexContainer}>
                    <Link href='word/education' className={styles.textdeconone}><Roundbox>교육학</Roundbox></Link>
                    <Link href='word/naturescience' className={styles.textdeconone}><Roundbox>자연과학</Roundbox></Link>
                    <Link href='word/liberalarts' className={styles.textdeconone}><Roundbox>인문학</Roundbox></Link>
                  </div>
                  <div className={styles.flexContainer}>
                    <Link href='word/socience' className={styles.textdeconone}><Roundbox>사회학</Roundbox></Link>
                    <Link href='word/' className={styles.textdeconone}><Roundbox>8Sights</Roundbox></Link>
                    <Link href='word/mechanics' className={styles.textdeconone}><Roundbox>공학</Roundbox></Link>
                  </div>
                  <div className={styles.flexContainer}>
                    <Link href='word/medicine' className={styles.textdeconone}><Roundbox>의약학</Roundbox></Link>
                    <Link href='word/art_physical' className={styles.textdeconone}><Roundbox>예술<br/>체육학</Roundbox></Link>
                    <Link href='word/agriculture_ocean' className={styles.textdeconone}><Roundbox>농수<br/>해양학</Roundbox></Link>
                  </div>
                </div>
                
              </div>
              <div>
                <h2>나의 융합 질문</h2>
                <p>8가지 분야의 글을 읽으면서 생긴 궁금증을 바탕으로 나만의 학문융합 질문을 적어보세요. </p>
                <h4>어떤 학문 분야들과 관련한 질문이 생겼나요?</h4>
                <hr/>
                <h4>키워드와 관련된 현상에는 무엇이 있나요?</h4>
                <hr/>
                <h4>자신이 생각한 질문을 적어주세요.</h4>
                <Inputandsaveshow></Inputandsaveshow>
                <br />
              </div>
              <div>
                <h2>Big Questions for {data.word}</h2>
                <p>2개 이상의 학문을 융합하여 선정한 키워드에 대한 질문을 만들어 보세요! 만든 질문에 대한 가능한 답변을 GPT로 생성해드립니다. </p>
                <br/>
                <Quesitons></Quesitons>
                <p className={styles.smalltext}>위의 질문들을 보면서 나만의 최종 융합질문을 적어봅시다.</p>
                <ShowInputform></ShowInputform>
              </div>
            </Slider>
          </div>
        </>
      );
    };
    
    export default Pageslider;


