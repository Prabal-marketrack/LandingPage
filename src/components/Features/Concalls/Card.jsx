import React from 'react';
import nilanjanRoy from './../../../assets/Concall-Images/NilanjanRoy.png';
import salilParekh from './../../../assets/Concall-Images/SalilParekh.png';
import './Card.css';
import { useStateContext } from '../../../context/StateContext';


const Card = ({ index }) => {
    const { isCardChecked, setCardChecked } = useStateContext();
    const handleClick = () => {
        setCardChecked(!isCardChecked);
    }

    if (index === 0) {
        return (
            <div className="card">
                <div className='card-header flex-row'>
                    <img src={nilanjanRoy} alt="" />
                    <div className='flex-col'>
                        <span className='card-header-name'>Nilanjan Roy</span>
                        <span className='card-header-position'>CFO</span>
                    </div>
                </div>
                <div className='card-content flex-col'>
                    <span style={{ color: '#CCCCCC', fontFamily: 'Inter-Medium' }}>Headcount</span>
                    <div className='flex-row' style={{ alignItems: 'center', paddingTop: '0.2vw' }}>
                        <div className='card-vertical-line' style={{ height: '3.13vw' }}></div>
                        <span style={{ color: '#AAAAAA', fontFamily: 'Inter-Regular' }}>End-of-quarter headcount: 336,000 employees, down 2% from the previous quarter</span>
                    </div>
                </div>
                <div className='card-content flex-col'>
                    <span style={{ color: '#CCCCCC', fontFamily: 'Inter-Medium' }}>Employee Utilization <span style={{ fontFamily: 'InterTight-LightItalic', color: '#AAAAAA' }}>(Excluding Trainees)</span></span>
                    <div className='flex-row' style={{ alignItems: 'center', paddingTop: '0.2vw' }}>
                        <div className='card-vertical-line' style={{ height: '1.98vw' }}></div>
                        <span style={{ color: '#AAAAAA', fontFamily: 'Inter-Regular' }}>Improved to 81.1%, with room for further growth</span>
                    </div>
                </div>
                <div className='card-content flex-col'>
                    <span style={{ color: '#CCCCCC', fontFamily: 'Inter-Medium' }}>Hiring</span>
                    <div className='flex-row' style={{ alignItems: 'center', paddingTop: '0.2vw' }}>
                        <div className='card-vertical-line' style={{ height: '3.13vw' }}></div>
                        <span style={{ color: '#AAAAAA', fontFamily: 'Inter-Regular' }}>FY '24 hiring to be based on available employee pool, growth expectations, and attrition trends</span>
                    </div>
                </div>
                <div className='card-content flex-col'>
                    <span style={{ color: '#CCCCCC', fontFamily: 'Inter-Medium' }}>Attrition</span>
                    <div className='flex-row' style={{ alignItems: 'center', paddingTop: '0.2vw' }}>
                        <div className='card-vertical-line' style={{ height: '3.75vw' }}></div>
                        <span style={{ color: '#AAAAAA', fontFamily: 'Inter-Regular' }}>A substantial portion of attrition backfilled by training and reskilling existing pool of talent and deployment of freshers</span>
                    </div>
                </div>
            </div>
        );
    }
    else if (index === 1) {
        return (
            <div className="card">
                <input type="checkbox" name="accordion-1" id="cb1" checked={isCardChecked} />
                <label htmlFor="cb1" className='tab_label' onClick={handleClick}>
                    <div className='card-header flex-row'>
                        <img src={salilParekh} alt="" />
                        <div className='flex-col'>
                            <span className='card-header-name'>Salil Parekh</span>
                            <span className='card-header-position'>MD & CEO</span>
                        </div>
                    </div>
                </label>
                <div className='content-box1'>
                    <div className='card-content flex-col'>
                        <span style={{ color: '#CCCCCC', fontFamily: 'Inter-Medium' }}>Outlook:</span>
                        <div className='flex-row' style={{ alignItems: 'center', paddingTop: '0.2vw' }}>
                            <div className='card-vertical-line' style={{ height: '3.78vw' }}></div>
                            <span style={{ color: '#AAAAAA', fontFamily: 'Inter-Regular' }}>Confident based on large and mega deal successes, cost efficiency, automation and consolidation strengths</span>
                        </div>
                    </div>
                    <div className='card-content flex-col'>
                        <span style={{ color: '#CCCCCC', fontFamily: 'Inter-Medium' }}>Short-Term Challenges:</span>
                        <div className='flex-row' style={{ alignItems: 'center', paddingTop: '0.2vw' }}>
                            <div className='card-vertical-line' style={{ height: '2.6vw' }}></div>
                            <span style={{ color: '#AAAAAA', fontFamily: 'Inter-Regular' }}>Clients pausing or slowing transformation programs and discretionary work</span>
                        </div>
                    </div>
                    <div className='card-content flex-col'>
                        <span style={{ color: '#CCCCCC', fontFamily: 'Inter-Medium' }}>Impacted Sectors:</span>
                        <div className='flex-row' style={{ alignItems: 'center', paddingTop: '0.2vw' }}>
                            <div className='card-vertical-line' style={{ height: '1.32vw' }}></div>
                            <span style={{ color: '#AAAAAA', fontFamily: 'Inter-Regular' }}>Financial services, telecom, hi-tech, and parts of retail</span>
                        </div>
                    </div>
                    <div className='card-content flex-col'>
                        <span style={{ color: '#CCCCCC', fontFamily: 'Inter-Medium' }}>Revised Revenue Growth Guidance <span style={{ fontFamily: 'InterTight-LightItalic', color: '#AAAAAA', fontSize: '0.94vw' }}>(In Constant Currency):</span></span>
                        <div className='flex-row' style={{ alignItems: 'center', paddingTop: '0.2vw' }}>
                            <div className='card-vertical-line' style={{ height: '4.3vw' }}></div>
                            <div className='flex-col' style={{ gap: '0.35vw' }}>
                                <span style={{ color: '#AAAAAA', fontFamily: 'Inter-Regular' }}>Expecting revenue from recent deals later in the fiscal year</span>
                                <div className='flex-row' style={{ gap: '1.04vw', fontFamily: 'Inter-Regular', color: '#CCCCCC' }}>
                                    <span>New : 1.0% to 3.5%</span>
                                    <span>Old  : 4.0% to 7.0%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <input type="checkbox" name="accordion-2" id="cb2" checked={!isCardChecked} />
                <label htmlFor="cb2" className='tab_label' onClick={handleClick}>
                    <div className='card-header flex-row'>
                        <img src={nilanjanRoy} alt="" />
                        <div className='flex-col'>
                            <span className='card-header-name'>Nilanjan Roy</span>
                            <span className='card-header-position'>CFO</span>
                        </div>
                    </div>
                </label>
                <div className='content-box2'>
                    <div className='card-content flex-col'>
                        <span style={{ color: '#CCCCCC', fontFamily: 'Inter-Medium' }}>Reasons</span>
                        <div className='flex-row' style={{ alignItems: 'center', paddingTop: '0.2vw' }}>
                            <div className='card-vertical-line' style={{ height: '4.06vw' }}></div>
                            <span style={{ color: '#AAAAAA', fontFamily: 'Inter-Regular' }}>Lower volumes due to a coupling of reduced discretionary spending and delayed mega deals <span style={{ fontFamily: 'InterTight-LightItalic', color: '#AAAAAA' }}>(resulting from regulatory approvals and transition)</span></span>
                        </div>
                    </div>
                    <div className='card-content flex-col'>
                        <span style={{ color: '#CCCCCC', fontFamily: 'Inter-Medium' }}>Margin Guidance</span>
                        <div className='flex-row' style={{ alignItems: 'center', paddingTop: '0.2vw' }}>
                            <div className='card-vertical-line' style={{ height: '1.5vw' }}></div>
                            <span style={{ color: '#AAAAAA', fontFamily: 'Inter-Regular' }}>Unchanged at 20% to 22% for FY '24</span>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className="card">
                <div className='card-header flex-row'>
                    <img src={salilParekh} alt="" />
                    <div className='flex-col'>
                        <span className='card-header-name'>Salil Parekh</span>
                        <span className='card-header-position'>MD & CEO</span>
                    </div>
                </div>
                <div className='card-content flex-col'>
                    <span style={{ color: '#CCCCCC', fontFamily: 'Inter-Medium' }}>Client Acceptance</span>
                    <div className='flex-row' style={{ alignItems: 'center', paddingTop: '0.2vw' }}>
                        <div className='card-vertical-line' style={{ height: '2.92vw' }}></div>
                        <span style={{ color: '#AAAAAA', fontFamily: 'Inter-Regular' }}>Topaz (Our AI and generative AI platform) resonating well with clients</span>
                    </div>
                </div>
                <div className='card-content flex-col'>
                    <span style={{ color: '#CCCCCC', fontFamily: 'Inter-Medium' }}>Project Portfolio</span>
                    <div className='flex-row' style={{ alignItems: 'center', paddingTop: '0.2vw' }}>
                        <div className='card-vertical-line' style={{ height: '5.83vw' }}></div>
                        <div className='flex-col' style={{ gap: '0.83vw' }}>
                            <span style={{ color: '#AAAAAA', fontFamily: 'Inter-Regular' }}>Working on 80 generative AI projects for our clients at this time</span>
                            <span style={{ color: '#AAAAAA', fontFamily: 'Inter-Regular' }}>Projects cover large language models for software, text, document, voice, and video</span>
                        </div>
                    </div>
                </div>
                <div className='card-content flex-col'>
                    <span style={{ color: '#CCCCCC', fontFamily: 'Inter-Medium' }}>Employee Training</span>
                    <div className='flex-row' style={{ alignItems: 'center', paddingTop: '0.2vw' }}>
                        <div className='card-vertical-line' style={{ height: '1.56vw' }}></div>
                        <span style={{ color: '#AAAAAA', fontFamily: 'Inter-Regular' }}> Trained 40,000 employees on generative AI</span>
                    </div>
                </div>
                <div className='card-content flex-col'>
                    <span style={{ color: '#CCCCCC', fontFamily: 'Inter-Medium' }}>Opportunities</span>
                    <div className='flex-row' style={{ alignItems: 'center', paddingTop: '0.2vw' }}>
                        <div className='card-vertical-line' style={{ height: '4.86vw' }}></div>
                        <div className='flex-col' style={{ gap: '0.83vw' }}>
                            <span style={{ color: '#AAAAAA', fontFamily: 'Inter-Regular' }}>Potential for new work and productivity improvements</span>
                            <span style={{ color: '#AAAAAA', fontFamily: 'Inter-Regular' }}>See Generative AI and Topaz as really transformative for clients</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;