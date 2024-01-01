import React, { useEffect, useRef, useState } from 'react';
import './CorporateFillings.css';
import NSE from './../../../assets/NSE.png';
import { useStateContext } from '../../../context/StateContext';
import Lottie from "lottie-react";
import CorporateAnimation from './../../../lotties/CorporateAnimation.json';
import CorporateUI from './CorporateUI';

const CorporateFillings = () => {
    const { isChecked } = useStateContext();
    const [showUIElement, setShowUIElement] = useState(false);
    const corporateRef = useRef(null);
    useEffect(() => {
        if (isChecked) {
            corporateRef.current.setDirection(1);
            corporateRef.current.setSpeed(1);
            corporateRef.current.goToAndPlay(0, false);
            let duration = corporateRef.current.getDuration(false);
            setTimeout(() => {
                setShowUIElement(true);
            }, (duration * 1000 + 100));
        }
        else if (isChecked === false) {
            setShowUIElement(false);
        }
    }, [setShowUIElement, isChecked]);
    return (
        <>
            <div className='corporate hide-lottie'>
                <div className='corporate-heading'>
                    <h1 className='corporate-heading-text'>Corporate Filings</h1>
                    <img src={NSE} alt="" />
                </div>
                {!showUIElement && <div className="corporate-lottie">
                    <Lottie
                        lottieRef={corporateRef}
                        animationData={JSON.parse(JSON.stringify(CorporateAnimation))}
                        autoplay={false}
                        loop={false}
                    />
                </div>}
                <div style={{ display: showUIElement ? '' : 'none' }}>
                    <CorporateUI />
                </div>
            </div>
            <div className="skeleton-text hide-everything">
                <div className="flex-col alignItems-center">
                    <span>Corporate</span>
                    <span>Filings</span>
                </div>
            </div>
        </>
    )
}

export default CorporateFillings;