import React, { useState } from 'react';
import './FeaturesSectionMobile.css';
import { FaSearch } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FaNewspaper } from "react-icons/fa";
import News from './News/News';
import Concalls from './Concalls/Concalls';
import CorporateFillings from './CorporateFillings/CorporateFillings';
import Forensic from './Forensic/Forensic';
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useStateContext } from '../../context/StateContext';


const FeaturesSectionMobile = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const {isChecked} = useStateContext();
    // let currIndex = 0;
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
    return (
        <div style={{ position: 'relative' }}>
            <div className="grid-header">
                <div className="news-box" style={{ color: (currentIndex === 0) ? '#62C0FF' : '#DDDDDD' }}>
                    <FaNewspaper />
                    <span>News</span>
                </div>
                <div className="concalls-box" style={{ color: (currentIndex === 1) ? '#62C0FF' : '#DDDDDD' }}>
                    <IoCall />
                    <span>Concalls</span>
                </div>
                <div className="corporate-box" style={{ color: (currentIndex === 2) ? '#62C0FF' : '#DDDDDD' }}>
                    <span>Corp. Filings</span>
                </div>
                <div className="forensic-box" style={{ color: (currentIndex === 3) ? '#62C0FF' : '#DDDDDD' }}>
                    <FaSearch />
                    <span>Forensic Checks</span>
                </div>
            </div>
            <div className="features-carousel-container" style={{height: (isChecked && (currentIndex===1))?'130vw':'100vw'}}>
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
            <div className="left-button" onClick={prevCard} style={{backgroundColor: (currentIndex===0)?'#8D8D8D':'#0090FF'}}>
                <MdOutlineArrowBackIos />
            </div>
            <div className="right-button" onClick={nextCard} style={{backgroundColor: (currentIndex===3)?'#8D8D8D':'#0090FF'}}>
                <MdOutlineArrowForwardIos />
            </div>
        </div>
    )
}

export default FeaturesSectionMobile;