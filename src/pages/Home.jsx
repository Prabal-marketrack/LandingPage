import React from 'react';
import Header from '../components/Header/Header';
import HeroBanner from '../components/Banner/HeroBanner';
import Features from '../components/Features/Features';
import Footer from '../components/Footer/Footer';

const Home = () => {
    
    return (
        <div className='bg-gradient'>
            <Header />
            <HeroBanner />
            <Features/>
            <Footer/>
        </div>
    );
}

export default Home;