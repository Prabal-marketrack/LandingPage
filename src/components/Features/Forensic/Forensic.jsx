import React, { useRef } from 'react';
import './Forensic.css';
import forensicScrutiny from './../../../assets/ForensicScrutiny.mp4';
// import { useStateContext } from '../../../context/StateContext';

const Forensic = () => {
    const forensicRef = useRef(null);
    return (
        <div>
            <div className="forensic hide-everything">
                <div className="forensic-heading">
                    <span>Forensic Scrutiny</span>
                </div>
                <div className="forensic-video flex-col">
                    <video ref={forensicRef} width={'80%'} height={'80%'} autoPlay>
                        <source src={forensicScrutiny} />
                    </video>
                </div>
            </div>
        </div>
    )
}

export default Forensic;