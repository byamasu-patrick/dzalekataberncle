import React, { useContext, useState } from 'react';

export const NavbarContext = React.createContext();
export const NavbarUpdateContext = React.createContext(); 

export function useNavbarContext(){
    return useContext(NavbarContext); 
}
export function useNavbarUpdateContext(){
    return useContext(NavbarUpdateContext);
}

export const NavbarContextProvider = ({ children }) => {
    const [extendNavbar, setExtendNavbar] = useState(false);

    function toggleNavbar(){
        setExtendNavbar((isExtended) => !isExtended);
    }

    return (
        <>
        <NavbarContext.Provider value={ extendNavbar }>
            <NavbarUpdateContext.Provider value={ toggleNavbar }>
                { children }
            </NavbarUpdateContext.Provider>
        </NavbarContext.Provider>
        </>
    );
};