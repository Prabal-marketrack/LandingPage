import React from 'react';
import Header from '../components/Header/Header';
import HeroBanner from '../components/Banner/HeroBanner';
import Features from '../components/Features/Features';
import Footer from '../components/Footer/Footer';

const Home = () => {
    const windowWidth = window.innerWidth;
    return (
        <div className='bg-gradient'>
            <Header />
            <HeroBanner />
            <Features/>
            {(windowWidth<=600) && <Footer/>}
        </div>
    );
}

export default Home;