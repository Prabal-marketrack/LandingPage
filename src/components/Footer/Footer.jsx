import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";
import { Tooltip } from 'react-tooltip';

const Footer = () => {
    return (
        <section className='footer-section'>
            <div className="footer-container">
                <div className="quicklinks">
                    <Link to={'#'} className="footer-link">ABOUT</Link>
                    <Link to={'#'} className="footer-link">TEAM</Link>
                    <Link to={'#'} className="footer-link">BLOG</Link>
                    <div className='social-links-heading'>
                        <hr />
                        <Link to={'#'} className='footer-link'>STAY IN TOUCH</Link>
                        <hr />
                    </div>
                    <Link to={'#'} className="footer-link">CAREERS</Link>
                    <Link to={'#'} className="footer-link">CONTACT US</Link>
                </div>
                <div className="social-links">
                    <a style={{ color: '#fff' }} href={'/'} data-tooltip-id='social-link-tooltip' data-tooltip-content='X' data-tooltip-place="bottom"><FaTwitter /></a>
                    <a style={{ color: '#fff' }} href={'/'} data-tooltip-id='social-link-tooltip' data-tooltip-content='Instagram' data-tooltip-place="bottom"><FaInstagram /></a>
                    <a style={{ color: '#fff' }} href={'/'} data-tooltip-id='social-link-tooltip' data-tooltip-content='Facebook' data-tooltip-place="bottom"><FaFacebookF /></a>
                    <a style={{ color: '#fff' }} href={'/'} data-tooltip-id='social-link-tooltip' data-tooltip-content='Youtube' data-tooltip-place="bottom"><FaYoutube /></a>
                    <a style={{ color: '#fff' }} href={'/'} data-tooltip-id='social-link-tooltip' data-tooltip-content='LinkedIn' data-tooltip-place="bottom"><FaLinkedin /></a>
                    <a style={{ color: '#fff' }} href={'/'} data-tooltip-id='social-link-tooltip' data-tooltip-content='Discord' data-tooltip-place="bottom"><IoLogoDiscord /></a>
                    <Tooltip id="social-link-tooltip" />
                </div>
                <div className="footer-line">
                    <hr />
                    <div className="footer-line-links">
                        <Link style={{textDecoration: 'none', color: "#fff"}}>Copyright &copy; 2023 Marketrack. All Rights Reserved</Link>
                        <Link style={{textDecoration: 'none', color: "#fff"}}>Privacy Policy</Link>
                        <Link style={{textDecoration: 'none', color: "#fff"}}>Terms of Use</Link>
                        <Link style={{textDecoration: 'none', color: "#fff"}}>Cookie Policy</Link>
                        <Link style={{textDecoration: 'none', color: "#fff"}}> Marketrack, Dellarex Technologies Pvt Ltd.</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;