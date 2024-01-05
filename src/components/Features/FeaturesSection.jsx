import './FeaturesSection.css';
import News from './News/News';
import Concalls from './Concalls/Concalls';
import CorporateFillings from './CorporateFillings/CorporateFillings';
import HeroForm from './../Banner/EmailForm/HeroForm';
import Forensic from './Forensic/Forensic';
import { useStateContext } from '../../context/StateContext';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useLayoutEffect } from 'react';
import Footer from '../Footer/Footer';

gsap.registerPlugin(ScrollTrigger);
const tl1 = gsap.timeline();

const invalidateTL = () => {
    console.log("Invalidate called");
    tl1.invalidate();
}

const FeaturesSection = () => {
    const { isChecked } = useStateContext();
    const windowHeight = window.innerHeight;
    const scaleRatio = windowHeight / 730;
    // let main = document.querySelector(".about");
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            console.log(scaleRatio);
            tl1
                .addLabel("start")
                .to('.news-lottie', {
                    scale: 0,
                })
                .to('.forensic-video', {
                    scale: 0,
                }, "<")
                .to('.corporate-lottie', {
                    scale: 0,
                }, "<")
                .to('.corporate-ui-element', {
                    opacity: 0,
                }, "<")
                .to('.concall-body', {
                    scale: 0,
                }, "<")
                .to('.news-section', {
                    height: "38.19vw",
                    width: "43.4vw",
                    borderRadius: '50px',
                }, "<")
                .to('.concall-section', {
                    height: "38.19vw",
                    width: "43.4vw",
                    borderRadius: '50px',
                }, "<")
                .to('.corporate-section', {
                    height: "38.19vw",
                    width: "43.4vw",
                    borderRadius: '50px',
                    top: 0
                }, "<")
                .to('.forensic-section', {
                    height: "38.19vw",
                    width: "43.4vw",
                    borderRadius: '50px',
                    top: 0
                }, "<")
                .to('.grid-item', {
                    opacity: 1,
                }, "<")
                .to('.hide-lottie', {
                    opacity: 0
                }, "<")
                .to('.hide-everything', {
                    fontSize: '6.25vw',
                    opacity: 1,
                }, ">")
                .to('.grid-container', {
                    scale: 0.25*scaleRatio,
                    gap: '2.78vw',
                }, "<")
                .set('.footer', {
                    zIndex: 1,
                })
                .addLabel("scaled")
                .to('.grid-container', {
                    scale: 0.11*scaleRatio,
                    gap: '4.17vw',
                }, ">")
                .to('.hide-everything', {
                    opacity: 0,
                }, "<50%")
                .to('.complexity-text', {
                    opacity: 1,
                    scale: 1,
                }, ">")
                .to('.grid-email', {
                    opacity: 1,
                    scale: 1,
                }, "<")
                .addLabel('end')

            ScrollTrigger.create({
                trigger: ".forensic-section",
                start: 'bottom+=100 bottom-=50',
                end: "bottom-=100 bottom",
                endTrigger: ".footer",
                scrub: true,
                animation: tl1,
                pin: ".grid-container",
                pinSpacing: true,
                snap: {
                    snapTo: "labelsDirectional",
                    duration: 2,
                },
                markers: false,
                invalidateOnRefresh: true,
            })
        });

        return () => ctx.revert();
    }, [scaleRatio]);

    return (
        <>
            <div className="outer-container">
                <div className="grid-container">
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"><span className='hide-everything'>Valuation</span></div>
                    <div className="grid-item">
                        <div className='flex-col alignItems-center hide-everything'>
                            <span>Mutual</span>
                            <span>Funds</span>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className='flex-col alignItems-center hide-everything'>
                            <span>Supply</span>
                            <span>Chains</span>
                        </div>
                    </div>
                    <div className="grid-item"><span className='hide-everything'>Forex</span></div>
                    <div className="grid-item">
                        <div className="skeleton-block hide-everything">
                            <div className='skeleton-1'></div>
                            <div className='skeleton-2'></div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="skeleton-block hide-everything">
                            <div className='skeleton-1'></div>
                            <div className='skeleton-2'></div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="skeleton-block hide-everything">
                            <div className='skeleton-1'></div>
                            <div className='skeleton-2'></div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="skeleton-block hide-everything">
                            <div className='skeleton-1'></div>
                            <div className='skeleton-2'></div>
                        </div>
                    </div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"><span className='hide-everything'>Trade</span></div>
                    <div className="grid-item">
                        <div className='flex-col alignItems-center hide-everything'>
                            <span>Govt.</span>
                            <span>Data</span>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className='flex-col alignItems-center hide-everything'>
                            <span>Alternate</span>
                            <span>Data</span>
                        </div>
                    </div>
                    <div className="grid-item"><span className=' hide-everything'>KPIs</span></div>
                    <div className="grid-item">
                        <div className="skeleton-block hide-everything">
                            <div className='skeleton-1'></div>
                            <div className='skeleton-2'></div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="skeleton-block hide-everything">
                            <div className='skeleton-1'></div>
                            <div className='skeleton-2'></div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="skeleton-block hide-everything">
                            <div className='skeleton-1'></div>
                            <div className='skeleton-2'></div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="skeleton-block hide-everything">
                            <div className='skeleton-1'></div>
                            <div className='skeleton-2'></div>
                        </div>
                    </div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="news-section"><News /></div>
                    <div className="concall-section" style={{ height: isChecked ? '56.6vw' : '42.29vw' }}><Concalls /></div>
                    <div className="grid-item">
                        <div className='flex-col alignItems-center hide-everything'>
                            <span>Annual</span>
                            <span>Report</span>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className='flex-col alignItems-center hide-everything'>
                            <span>Raw</span>
                            <span>Materials</span>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="skeleton-block hide-everything">
                            <div className='skeleton-1'></div>
                            <div className='skeleton-2'></div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="skeleton-block hide-everything">
                            <div className='skeleton-1'></div>
                            <div className='skeleton-2'></div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="skeleton-block hide-everything">
                            <div className='skeleton-1'></div>
                            <div className='skeleton-2'></div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="skeleton-block hide-everything">
                            <div className='skeleton-1'></div>
                            <div className='skeleton-2'></div>
                        </div>
                    </div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="corporate-section" style={{ top: isChecked? '-22vw':'-7.5vw' }}><CorporateFillings /></div>
                    <div className="forensic-section"><Forensic /></div>
                    <div className="grid-item triggerClass"><span className='hide-everything'>Employees</span></div>
                    <div className="grid-item"><span className='hide-everything'>Sentiment</span></div>
                    <div className="grid-item">
                        <div className="skeleton-block hide-everything">
                            <div className='skeleton-1'></div>
                            <div className='skeleton-2'></div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="skeleton-block hide-everything">
                            <div className='skeleton-1'></div>
                            <div className='skeleton-2'></div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="skeleton-block hide-everything">
                            <div className='skeleton-1'></div>
                            <div className='skeleton-2'></div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="skeleton-block hide-everything">
                            <div className='skeleton-1'></div>
                            <div className='skeleton-2'></div>
                        </div>
                    </div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                </div>
            </div>
            <div className='footer'>
                <div className="complexity-text">
                    <span>Leave Complexity Behind.</span>
                </div>
                <div className='grid-email'>
                    <HeroForm fontSize={'1.56vw'} textColor={'#A5FF95'} animationTime={'2.5s'} />
                </div>
                <Footer/>
            </div>
        </>
    );
};

export { FeaturesSection, invalidateTL };
