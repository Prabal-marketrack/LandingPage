import React, { useState, useLayoutEffect } from 'react';
import './FeaturesSectionMobile.css';
import { FaSearch } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FaNewspaper } from "react-icons/fa";
import News from './News/News';
import Concalls from './Concalls/Concalls';
import CorporateFillings from './CorporateFillings/CorporateFillings';
import Forensic from './Forensic/Forensic';
import HeroForm from '../Banner/EmailForm/HeroForm';
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useStateContext } from '../../context/StateContext';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const tl3 = gsap.timeline();

const FeaturesSectionMobile = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { isChecked } = useStateContext();
    const itemsArray = Array.from({ length: 246 }, (_, index) => index);
    let totalCards = 4;
    const updateCarousel = (val) => {
        const carousel = document.getElementById('carousel');
        const cardWidth = document.querySelector('.features-carousel-card').offsetWidth;
        carousel.style.transform = `translateX(${-(currentIndex + val + 4) % 4 * cardWidth}px)`;
    }
    const prevCard = () => {
        console.log("Prev Called");
        setCurrentIndex((currentIndex - 1 + totalCards) % totalCards);
        console.log(currentIndex);
        updateCarousel(-1);
    }

    const nextCard = () => {
        console.log("Next Called");
        setCurrentIndex((currentIndex + 1) % totalCards);
        console.log(currentIndex);
        updateCarousel(+1);
    }

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            tl3
                .addLabel("start")
                .to('.news', {
                    opacity: 0,
                })
                .to('.concall', {
                    opacity: 0
                }, '<')
                .to('.forensic', {
                    opacity: 0
                }, '<')
                .to('.corporate', {
                    opacity: 0
                }, '<')
                .set('.left-button', {
                    display: 'none',
                })
                .set('.right-button', {
                    display: 'none',
                })
                .to('.features-carousel-container', {
                    height: '0vw',
                }, '<')
                .to(".grid-header", {
                    overflow: 'visible',
                    gap: '2.27vw',
                    backgroundColor: 'black',
                    translateX: '-4.8vw'
                }, '>')
                .to('.news-box', {
                    backgroundColor: '#191919',
                    paddingTop: '0px',
                    justifyContent: 'center',
                    borderRadius: '2.67vw',
                }, '<')
                .to('.concalls-box', {
                    backgroundColor: '#191919',
                    paddingTop: '0px',
                    justifyContent: 'center',
                    borderRadius: '2.67vw',
                }, '<')
                .to('.corporate-box', {
                    backgroundColor: '#191919',
                    paddingTop: '0px',
                    justifyContent: 'center',
                    borderRadius: '2.67vw',
                }, '<')
                .to('.forensic-box', {
                    backgroundColor: '#191919',
                    paddingTop: '0px',
                    justifyContent: 'center',
                    borderRadius: '2.67vw',
                }, '<')
                .to('.mobile-grid-item', {
                    opacity: 1,
                }, '<')
                .set('.mobile-footer', {
                    zIndex: 1,
                })
                .addLabel("scaled")
                .to('.grid-header', {
                    scale: '0.4',
                    gap: '4.25vw',
                    duration: 3
                }, '>')
                .to('.news-box', {
                    contentVisibility: 'hidden',
                }, '<')
                .to('.concalls-box', {
                    contentVisibility: 'hidden',
                }, '<')
                .to('.corporate-box', {
                    contentVisibility: 'hidden',
                }, '<')
                .to('.forensic-box', {
                    contentVisibility: 'hidden',
                }, '<')
                .to('.mobile-complexity-text', {
                    opacity: '1',
                    scale: 1,
                }, '>')
                .to('.mobile-grid-email', {
                    opacity: 1,
                    scale: 1,
                }, '<')
                .addLabel('end')

            ScrollTrigger.create({
                trigger: ".grid-header",
                start: 'top top',
                end: 'bottom+=200 top',
                scrub: 2,
                animation: tl3,
                pin: ".grid-header",
                pinSpacing: false,
                snap: {
                    snapTo: "labelsDirectional",
                    duration: 2,
                },
                markers: true,
                invalidateOnRefresh: true,
            })
        });

        return () => ctx.revert();
    });

    return (
        <div className='mobile-outer-container' style={{ position: 'relative' }}>
            <div className="grid-header">
                <div className="news-box" style={{ color: (currentIndex === 0) ? '#62C0FF' : '#DDDDDD' }}>
                    <FaNewspaper style={{ fontSize: '5vw' }} />
                    <span>News</span>
                </div>
                <div className="concalls-box" style={{ color: (currentIndex === 1) ? '#62C0FF' : '#DDDDDD' }}>
                    <IoCall style={{ fontSize: '4vw' }} />
                    <span>Concalls</span>
                </div>
                <div className="corporate-box" style={{ color: (currentIndex === 2) ? '#62C0FF' : '#DDDDDD' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="4vw" height="4vw" viewBox="0 0 20 16">
                        <path id="Icon_awesome-scroll" data-name="Icon awesome-scroll" d="M1.5,0A1.5,1.5,0,0,0,0,1.5v2A.5.5,0,0,0,.5,4H3V1.5A1.5,1.5,0,0,0,1.5,0ZM8,12.893V11h9V3a3,3,0,0,0-3-3H3.487A2.476,2.476,0,0,1,4,1.5V13a2,2,0,0,0,2.336,1.972A2.074,2.074,0,0,0,8,12.893ZM9,12v1a3,3,0,0,1-3,3H16.5A3.5,3.5,0,0,0,20,12.5a.5.5,0,0,0-.5-.5Z" fill={(currentIndex === 2) ? '#62C0FF' : '#DDDDDD'} opacity="0.75" />
                    </svg>
                    <span>Corp. Filings</span>
                </div>
                <div className="forensic-box" style={{ color: (currentIndex === 3) ? '#62C0FF' : '#DDDDDD' }}>
                    <FaSearch />
                    <span>Forensic Checks</span>
                </div>
                {itemsArray.map((item) => (
                    <div key={item} className="mobile-grid-item"></div>
                ))}
            </div>
            <div className="features-carousel-container" style={{ height: (isChecked && (currentIndex === 1)) ? '130vw' : '100vw' }}>
                <div className="features-carousel" id='carousel'>
                    <div className="features-carousel-card">
                        <News />
                    </div>
                    <div className="features-carousel-card">
                        <Concalls />
                    </div>
                    <div className="features-carousel-card">
                        <CorporateFillings />
                    </div>
                    <div className="features-carousel-card">
                        <Forensic />
                    </div>
                </div>
            </div>
            <div className="left-button" onClick={prevCard} style={{ backgroundColor: (currentIndex === 0) ? '#8D8D8D' : '#0090FF' }}>
                <MdOutlineArrowBackIos />
            </div>
            <div className="right-button" onClick={nextCard} style={{ backgroundColor: (currentIndex === 3) ? '#8D8D8D' : '#0090FF' }}>
                <MdOutlineArrowForwardIos />
            </div>
            <div className="mobile-footer">
                <div className="mobile-complexity-text">
                    <span>Leave Complexity Behind.</span>
                </div>
                <div className='mobile-grid-email'>
                    <HeroForm fontSize={'4vw'} textColor={'#A5FF95'} animationTime={'2.5s'} />
                </div>
            </div>
        </div>
    )
}

export default FeaturesSectionMobile;