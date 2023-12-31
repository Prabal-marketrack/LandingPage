import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { BiSolidPointer } from 'react-icons/bi';
import './Features.css';
import { useStateContext } from '../../context/StateContext';
import { FeaturesSection } from './FeaturesSection';
import ArrowSvg from './ArrowSvg';
import ToggleButton from './ToggleButton';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/all';
import FeaturesSectionMobile from './FeaturesSectionMobile';

gsap.registerPlugin(ScrollTrigger);
const tl2 = gsap.timeline();

const Features = () => {
    const windowWidth = window.innerWidth;
    const { isBannerVisible, setLottiePlay } = useStateContext();
    const tl = useRef();
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            tl.current = gsap.timeline({
                scrollTrigger: {
                    id: "line_anim",
                    trigger: ".about",
                    scrub: true,
                    start: "start 90%",
                    end: "start 50%",
                    endTrigger: '.box3',
                    markers: false,
                    invalidateOnRefresh: true,
                    onLeave: () => {
                        setLottiePlay(true);
                    },
                    onEnterBack: () => {
                        setLottiePlay(false);
                    },
                    onEnter: ()=>{
                        gsap.set('.box-4', {
                            opacity: 0,
                        })
                    }
                }
            })
                .to(".box1", {
                    opacity: 1,
                    ease: 'power2.in',
                })
                .to(".vertical-line", {
                    height: (windowWidth <= 600) ? '13.33vw' : "9.3vw",
                    ease: 'power1.in'
                })
                .to(".box2", {
                    opacity: 1,
                    ease: 'power1.in',
                })
                .to('.box3', {
                    opacity: 1,
                    ease: 'power2.in',
                })
        });
        return () => ctx.revert();
    }, [setLottiePlay, windowWidth]);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            tl2
                .set('.box-4', {
                    opacity: 0,
                })
                .to('.box-4', {
                    opacity: 1,
                    duration: 0.3
                })
                .to('.typewriter', {
                    width: '100%',
                    duration: 1.5
                }, ">")
                .to('.typewriter', {
                    color: '#fff',
                }, ">")
                .to(".pointer", {
                    scale: 0.7,
                    duration: 0.2,
                }, ">")
                .to(".pointer", {
                    scale: 1,
                    duration: 0.2,
                }, ">")

            ScrollTrigger.create({
                id: "typing_anim",
                trigger: "#typing-trigger",
                start: "top 90%",
                markers: false,
                invalidateOnRefresh: true,
                onEnter: () => {
                    tl2.progress(0);
                    tl2.play();
                },
                onLeaveBack: ()=>{
                    gsap.set('.box-4', {
                        opacity: 0
                    })
                }
            })
        });
        return () => ctx.revert();
    }, []);



    return (
        <div className={`gradient-background ${isBannerVisible ? 'fade-in' : ''}`}>
            <div className='features-section'>
                <div className='fade_rule'></div>
                <div className='features-body'>
                    <div className='about'>
                        <div className="heading-container text box1">
                            With <h1 className="brand-heading text">MARKETRACK</h1>
                        </div>
                        <div className='box-4 text about-text ' id='typing-trigger'>
                            <span className='pr-20 typewriter'>Leave Complexity Behind with Just One Click</span>
                            <BiSolidPointer className='pointer' />
                        </div>
                        <div className='vertical-line'></div>
                        <div className='exclusive flex-col box2'>
                            <div className='flex-row'>
                                <p className='feel-text'>Get a Feel. Try it Out Now</p>
                                <ArrowSvg />
                            </div>
                            <div className='flex-row' style={{ alignItems: "center", paddingRight: '1.4vw', paddingBottom: '7px', zIndex: '1' }}>
                                <span className="exclusive-brand-heading">MARKETRACK</span>
                                <ToggleButton />
                            </div>
                        </div>
                    </div>
                    <div className="box3">
                        {(windowWidth <= 600) && <FeaturesSectionMobile />}
                        {(windowWidth > 600) && <FeaturesSection />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;
