import React, { useState, useEffect } from 'react';
import './Navbar.css';
import GiftSvg from './GiftSvg';
import { useStateContext } from '../../context/StateContext';

const Navbar = () => {
  const { isGridTriggered } = useStateContext();
  const [triggered, setTriggered] = useState(false);
  const [isNavbarEmailFocused, setNavbarEmailFocus] = useState(false);
  const [isEmailHover, setEmailHoverState] = useState(false);
  const [isEmptyError, setEmptyError] = useState(false);
  const [isInvalidError, setInvalidError] = useState(false);
  const [email, setEmail] = useState("");

  const windowWidth = window.innerWidth;  

  const handleScroll = () => {
    const element = document.getElementById('trigger-element');
    const elementPosition = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const triggerPoint = windowHeight;

    if (elementPosition.bottom <= triggerPoint && windowWidth>600) {
      setTriggered(true);
    } else {
      setTriggered(false);
    }
  };

  const handleButtonClick = async () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email === '') {
        setEmptyError(!isEmptyError);
        return;
    } else if (!emailRegex.test(email)) {
        setInvalidError(true);
        return;
    }
    try {
        const response = await fetch('https://api.marketrack.in/addOnboarded', {
            method: "POST",
            body: JSON.stringify({ email: email }),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const result = await response.json();
        console.log(result);
        if (response.status === 409) {
            console.log('User with this email already exists');
            return;
        }
        else if (response.status === 201) {
            console.log('User Email stored in Database');
        }
        setEmail('');
    } catch (error) {
        console.error('Error storing user data:', error);
    }
};

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleNavbarEmailFocus = () => {
    setNavbarEmailFocus(true);
  }

  return (
    <nav >
      <div className={`navbar ${triggered ? 'inactive' : "active"}`}>
        <div className="header">
          <div className="heading-container p-left">
            <h1 className="underlined-heading">MARKETRACK</h1>
          </div>
          <div className='announcement-heading'>
            <span className="fade-text b1">Product Announcement</span>
            <span className="fade-text b2">Coming Soon</span>
          </div>
        </div>
      </div>
      <div className={`navbar-2 ${triggered ? 'active' : "inactive"}`}>
        <div className="navbar-mask"></div>
        <div className="header">
          <div className="heading-container p-left">
            <h1 className="underlined-heading">MARKETRACK</h1>
          </div>
          <div className='announcement-heading'>
            <span className="fade-text b1">Product Announcement</span>
            <span className="fade-text b2">Coming Soon</span>
          </div>
          <div className='nav-email-form' onMouseEnter={() => { setEmailHoverState(true); }} onMouseLeave={() => { setEmailHoverState(false); setNavbarEmailFocus(false); }} style={{ opacity: isGridTriggered ? '0' : '1' }}>
            {isEmailHover ? <div className="email-hover-state">
              <input type="email" placeholder={isNavbarEmailFocused ? '' : 'Enter Your Email'} onFocus={handleNavbarEmailFocus} onBlur={() => { setNavbarEmailFocus(false) }} value={email} onChange={(e) => { setEmail(e.target.value); setEmptyError(false); setInvalidError(false); }}/>
              <span className='email-arrow-button' onClick={handleButtonClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1.04vw" height="0.67vw" viewBox="0 0 20.3 13.214">
                  <path id="Icon_ionic-md-return-left" data-name="Icon ionic-md-return-left" d="M20.143,8.63v4.6H6.281l3.768-3.848L8.567,7.875,2.25,14.3l6.317,6.429,1.482-1.509L6.281,15.375H22.25V8.63Z" transform="translate(-2.075 -7.697)" stroke="#1a1a1a" strokeWidth="0.25" />
                </svg>
              </span>
              
            </div> : <div className="email-default-state">
              <span className='nav-email-text'>Get Exclusive Benefits</span>
              <div style={{ paddingLeft: '0.5vw' }}>
                <GiftSvg />
              </div>
            </div>
            }
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;