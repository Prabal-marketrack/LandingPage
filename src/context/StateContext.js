import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

export const StateContext = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isChecked, setChecked] = useState(false);
    const [isBannerVisible, setBannerVisible] = useState(false);
    const [isCardChecked, setCardChecked] = useState(false);
    const [isLottiePlay, setLottiePlay] = useState(false);

    return (
        <Context.Provider value={{
            isVisible, isChecked, isBannerVisible, isCardChecked, isLottiePlay, setLottiePlay, setCardChecked, setIsVisible, setChecked, setBannerVisible
        }}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);
