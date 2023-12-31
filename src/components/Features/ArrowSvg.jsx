import React from 'react'

const ArrowSvg = () => {
    const windowWidth = window.innerWidth;
    const ismobile = (windowWidth<=600);
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width={ismobile?"6.4vw":"1.77vw"} height={ismobile?"11.3vw":"3vw"} viewBox="0 0 36.528 62.299" style={{ paddingTop: '1.9vh', paddingLeft: '0.6vw' }}>
                <path id="Path_376" data-name="Path 376" d="M4,17.049s14.8-2.162,28.472,11.6C50.8,47.1,18.582,72.492,18.582,72.492m0,0,17.8,2.708m-19.034-.91,3.937-19.638" transform="translate(-3.711 -14.879)" fill="none" stroke="#fff" strokeWidth="4" />
            </svg>
        </div>
    )
}

export default ArrowSvg
