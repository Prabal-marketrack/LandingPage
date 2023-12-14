import React, { useEffect, useRef } from 'react';
import './News.css';
import { useStateContext } from '../../../context/StateContext';
import NewsAnimation from './../../../lotties/NewsAnimation.json';
import { FaNewspaper } from 'react-icons/fa';
import Lottie from "lottie-react";

const News = () => {
    const { isChecked, isLottiePlay } = useStateContext();
    const newsRef = useRef(null);
    useEffect(() => {
        if (!isChecked && isLottiePlay) {
            newsRef.current.setSpeed(0.8);
            newsRef.current.playSegments([1, 200], true);
        }
        else if (isChecked) {
            newsRef.current.setSpeed(1);
            newsRef.current.playSegments([200, 700], true);
        }
    });
    return (
        <>
            <div className='news hide-lottie'>
                <div className='news-heading'>
                    <h1 className='news-heading-text'>
                        <span>News</span>
                        <FaNewspaper style={{ paddingLeft: '12px' }} />
                    </h1>
                </div>
                <div className="news-lottie">
                    <Lottie
                        lottieRef={newsRef}
                        animationData={NewsAnimation}
                        autoplay={false}
                        loop={false}
                    />
                </div>
            </div>
            <div className="skeleton-text hide-everything">
                <div className="flex-col alignItems-center">
                    <span>News</span>
                    <FaNewspaper/>
                </div>
            </div>
        </>
    )
}

export default News;