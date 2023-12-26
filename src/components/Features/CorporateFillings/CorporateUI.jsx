import React, { useState } from 'react';
import './CorporateUI.css';
import DeepakLogo from './../../../assets/Logo.png';
import PDFLogo from './../../../assets/pdf-icon.png';

const CorporateUI = () => {
    const [pdfText1, setPdfText1] = useState(false);
    const [pdfText2, setPdfText2] = useState(false);
    const [pdfText3, setPdfText3] = useState(false);
    return (
        <div className='corporate-ui-element'>
            <div className="deepak-nitrite">
                <img src={DeepakLogo} alt="" />
                <span>Deepak Nitrite</span>
            </div>
            <div className="filing-1">
                <div className="filing-date">
                    <span>Jul 12,2022</span>
                    <span>9:13 PM</span>
                </div>
                <div className="filing-content">
                    <div className="filing-content-heading">Nandesari Plant (Gujarat) Resumes Operations Post Fire Incident Except Affected Parts Of Nitrite Section</div>
                    <div className="filing-content-description">
                        <span>GPCB Revokes 3-Month Closure, Post Satisfactory Compliance Reports Submission</span>
                        <span>Plant Resumes Manufacturing, Except affected parts of Nitrite Section</span>
                    </div>
                    <div className='filing-files'>
                        <div className="file-pdf" onMouseEnter={() => setPdfText1(true)} onMouseLeave={() => { setPdfText1(false) }}>
                            <img src={PDFLogo} alt="" />
                            {pdfText1 && <span className='file-text'>View Full Disclosure</span>}
                        </div>
                    </div>
                </div>
            </div>
            <div className="filing-1">
                <div className="filing-date">
                    <span>Jul 2,2022</span>
                    <span>6:26 PM</span>
                </div>
                <div className="filing-content">
                    <div className="filing-content-heading">Regulatory Approval Granted For Partial Plant Operations (50% Capacity) After Fire Incident</div>
                    <div className="filing-content-description">
                        <span>GPCB Revokes The 2-Month Closure Order , Company Allowed To Operate 50% Of The Nitro Section Capacity.</span>
                        <span>For The Nitrite Section, After Structural Strengthening, The Company Will Submit A Stability Certificate For Authorities' Approval To Restart It. <span>(In Progress As Of Jul 2,2022)</span></span>
                    </div>
                    <div className='filing-files'>
                        <div className="file-pdf" onMouseEnter={() => setPdfText2(true)} onMouseLeave={() => { setPdfText2(false) }}>
                            <img src={PDFLogo} alt="" />
                            {pdfText2 && <span className='file-text'>View Full Disclosure</span>}
                        </div>
                        <div className="file-pdf file-pdf-3" onMouseEnter={() => setPdfText3(true)} onMouseLeave={() => { setPdfText3(false) }}>
                            <img src={PDFLogo} alt="" />
                            {pdfText3 && <span className='file-text'>View Full Disclosure</span>}
                        </div>
                    </div>
                </div>
            </div>
            <div className="vertical-bar">
                <div className="impact">
                    <span className="impact-text">Impact or Sentiment</span>
                    <span className="impact-text">for Quick Look</span>
                </div>
                <div className="arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="3vw" height="3.4vw" viewBox="0 0 43.155 48.939">
                        <defs>
                            <filter id="Arrow" x="0" y="0" width="43.155" height="48.939" filterUnits="userSpaceOnUse">
                                <feOffset dx="10" dy="5" input="SourceAlpha" />
                                <feGaussianBlur stdDeviation="1.5" result="blur" />
                                <feFlood />
                                <feComposite operator="in" in2="blur" />
                                <feComposite in="SourceGraphic" />
                            </filter>
                        </defs>
                        <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Arrow)">
                            <path id="Arrow-2" data-name="Arrow" d="M12.188,0C25.824,14.341,1.525,33.662,1.525,33.662M0,33.9l15.3-.4M.877,34.216l.859-14.1" transform="translate(0.35 6.61) rotate(-20)" fill="none" stroke="#fff" strokeWidth="2" />
                        </g>
                    </svg>
                </div>
                <div className="circle"></div>
                <div className='line-1'></div>
                <div className="circle"></div>
                <div className="line-2"></div>
            </div>
        </div>
    );
}

export default CorporateUI;