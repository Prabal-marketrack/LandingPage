import React, { useRef } from 'react';
import './Forensic.css';
// import forensicScrutiny from './../../../assets/ForensicScrutiny.mp4';
// import { useEffect } from 'react';
// import { useStateContext } from '../../../context/StateContext';

const Forensic = () => {
    // const forensicRef = useRef(null);
    // const {isChecked, isLottiePlay} = useStateContext();
    // useEffect(()=>{
    //     if(!isChecked && isLottiePlay){
    //         forensicRef.current.play();
    //     }
    //     else{
    //         forensicRef.current.pause();
    //     }
    // })
    return (
        <>
            <div className="forensic hide-lottie">
                <div className="forensic-heading">
                    <span>Forensic Scrutiny</span>
                </div>
                <div className="forensic-video flex-col">
                    {/* <video ref={forensicRef} width={'80%'} height={'80%'} autoPlay muted>
                        <source src={forensicScrutiny} />
                    </video> */}
                </div>
            </div>
            <div className="skeleton-text hide-everything">
                <div className="flex-col alignItems-center">
                    <span>Forensic</span>
                    <span>Scrutiny</span>
                </div>
            </div>
        </>
    )
}

export default Forensic;