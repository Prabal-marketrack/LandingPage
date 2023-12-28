import React, { useState, useRef, useEffect } from 'react';
import './Concalls.css';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoCall } from "react-icons/io5";

import infosys from './../../../assets/infosys1.png';
import infosysOff from './../../../assets/infosys2.png';
import Card from './Card';
import { useStateContext } from './../../../context/StateContext';
import Lottie from 'lottie-react';
import ConcallAnimation from './../../../lotties/ConcallAnimation.json';


const Concalls = () => {
    const { isChecked, isCardChecked, setCardChecked, isLottiePlay } = useStateContext();
    const totalSlides = 3;
    const [currentIndex, setCurrentIndex] = useState(3);
    const concallRef = useRef(null);
    const windowWidth = window.innerWidth;

    useEffect(() => {
        if (!isChecked && isLottiePlay) {
            concallRef.current.setSpeed(0.8);
            concallRef.current.goToAndPlay(1, true);
        }
        if (isChecked === false) {
            setCurrentIndex(3);
        }
    }, [isChecked, isLottiePlay, setCurrentIndex]);

    const handleClick = (index) => {
        setCurrentIndex(index);
        document.getElementById('button0').classList.remove('button-active');
        document.getElementById('button1').classList.remove('button-active');
        document.getElementById('button2').classList.remove('button-active');
        const element = document.getElementById(`button${index}`);
        element.classList.add('button-active');
        setCardChecked(false);
    }

    return (
        <>
            <div className='concall hide-lottie'>
                <div className='concall-heading'>
                    <h1 className='concall-heading-text'>Conference Calls <IoCall /></h1>
                </div>
                <div className='concall-body'>
                    {!isChecked &&
                        <div className='concall-body-off'>
                            <div className='infosys-header-off'>
                                <img src={infosysOff} alt="" />
                                <div className="verticalRule"></div>
                                <span className='infosys-text'>Earnings Call Q1 2023</span>
                            </div>
                            <div className='concall-lottie'>
                                <Lottie
                                    lottieRef={concallRef}
                                    animationData={ConcallAnimation}
                                    autoplay={true}
                                    loop={false}
                                />
                            </div>
                            <div className='concall-off-footer'>
                                <span>25 Pages</span>
                            </div>
                        </div>
                    }
                    {isChecked && <div className='concall-body-on flex-col'>
                        <div className='concall-carousel' style={(windowWidth<=475)?{ height: (currentIndex === 0) ? '79.88vw' : ((currentIndex === 1) && !isCardChecked) ? '71.28vw' : ((currentIndex === 1) && isCardChecked) ? '91.6vw' : '89.36vw' }:{ height: (currentIndex === 0) ? '36.81vw' : ((currentIndex === 1) && !isCardChecked) ? '32.85vw' : ((currentIndex === 1) && isCardChecked) ? '42.22vw' : '41.18vw' }}>
                            <div className="headermask"></div>
                            <div className='infosys-header'>
                                <img src={infosys} alt="" />
                                <div className="verticalRule"></div>
                                <span className='infosys-text'>Earnings Call Q1 2023</span>
                            </div>
                            <div className="carousel-buttons">
                                <button className='carousel-button' id='button0' onClick={() => handleClick(0)}>On Attrition</button>
                                <button className='carousel-button' id='button1' onClick={() => handleClick(1)}>On Guidance Cut</button>
                                <button className='carousel-button button-active' id='button2' onClick={() => handleClick(2)}>On Generative AI</button>
                            </div>

                            <div className="card-container">
                                <Card index={currentIndex} />
                            </div>

                            <div className="carousel-dots">
                                {Array(totalSlides).fill(0).map((_, index) => (
                                    <div
                                        key={index}
                                        className='dot'
                                        style={{ backgroundColor: index === currentIndex ? '#0090FF' : '#555555' }}
                                        onClick={() => { handleClick(index); }}
                                    ></div>
                                ))}
                            </div>
                        </div>
                        <div className='flex-col concall-footer'>
                            <span className='blurred-text'>Eliminates Noise</span>
                            <span>So You Can Focus on What Matters</span>
                        </div>
                    </div>}
                </div>
            </div>
            <div className="skeleton-text hide-everything">
                <div className="flex-col alignItems-center">
                    <span>Concalls</span>
                    <BsFillTelephoneFill />
                </div>
            </div>
        </>
    )
}

export default Concalls;