import React, { useEffect, useRef } from 'react';
import Lottie from "lottie-react";
import HeroAnimation from "../../lotties/HeroAnimationCompressed.json";
import './HeroBanner.css';
import HeroForm from './EmailForm/HeroForm';
import { useStateContext } from '../../context/StateContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const HeroBanner = () => {
    const { setBannerVisible } = useStateContext();
    const lottieRef = useRef();
    useEffect(() => {
        setTimeout(() => {
            lottieRef.current.play();
            setBannerVisible(true);
            ScrollTrigger.refresh();console.log("hello");
        }, 1000);
    }, [setBannerVisible]);
    return (
        <div className='banner' id='trigger-element'>
            <HeroForm animationTime={'4.5s'}/>
            <div className="animation-container ease-in-out">
                <Lottie
                    lottieRef={lottieRef}
                    animationData={JSON.parse(JSON.stringify(HeroAnimation))}
                    autoplay={false}
                    loop={true}
                />
            </div>
        </div>
    );
}

export default HeroBanner;