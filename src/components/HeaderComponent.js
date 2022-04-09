import React, { useContext, useState } from 'react';
import { BoxContainerHorizontal, HeadingBrand, ListItemHorizontal, ListItemVertical, LogoImage, Navbar, NavbarBrand, NavbarExtendedContainer, NavbarInnerConatainer, NavbarInnerContainer, NavbarItem, NavLink, NavLinkAuth, NavLinkLanguage, OpenLinkButton, OpenLinkSpan, UnorderedList } from '../shared/common';
import logo from '../logo.png'
import { useNavigate } from 'react-router-dom';
import { navlinkStyle } from '../shared/variables';
import { useNavbarContext, useNavbarUpdateContext } from '../context.api/NavbarContextProvider';

const Header = () => {  
    
    const extendedNavbar = useNavbarContext();
    const setExtendedNavbar = useNavbarUpdateContext();
    
    const history = useNavigate();
    const navigateTo = (evt, url) => {
        evt.preventDefault();

        history(url);
    }
    
    return (
        <React.Fragment>
    
            <Navbar height="95px" isExended={ extendedNavbar }>
                <NavbarInnerContainer>
                <BoxContainerHorizontal height={ "100%" }>
                    <NavbarBrand>
                        <LogoImage height={ "100%" } width={ "80px" } src={ logo } />
                    </NavbarBrand>
                    <NavbarItem grow={true}>
                        <UnorderedList>
                            <ListItemHorizontal navbarLink={true} linkStyle={ navlinkStyle }><NavLink linkStyle={ navlinkStyle } className='active' onClick={(event) => navigateTo(event, '/')}>Home</NavLink></ListItemHorizontal>
                            <ListItemHorizontal navbarLink={true} linkStyle={ navlinkStyle }><NavLink href='/broadcast' linkStyle={ navlinkStyle } onClick={(event) => navigateTo(event, '/broadcast')}>BroadCast</NavLink></ListItemHorizontal>
                            <ListItemHorizontal navbarLink={true} linkStyle={ navlinkStyle }><NavLink href='/download' linkStyle={ navlinkStyle } onClick={(event) => navigateTo(event, '/download')}>Downloads</NavLink></ListItemHorizontal>
                            <ListItemHorizontal navbarLink={true} linkStyle={ navlinkStyle }><NavLink href='/contact-us' linkStyle={ navlinkStyle } onClick={(event) => navigateTo(event, '/contact-us')}>Contact Us</NavLink></ListItemHorizontal>
                            <ListItemHorizontal navbarLink={true} linkStyle={ navlinkStyle }><NavLink href='/about-us' linkStyle={ navlinkStyle } onClick={(event) => navigateTo(event, '/about-us')}>About Us</NavLink></ListItemHorizontal>
                        </UnorderedList>
                    </NavbarItem>
                    <NavbarItem>
                        <UnorderedList>
                            <ListItemHorizontal navbarLink={true}><NavLinkLanguage href='/language' auth={true}>Select Language</NavLinkLanguage></ListItemHorizontal>
                            <ListItemHorizontal linkStyle={ navlinkStyle }><OpenLinkButton onClick={ setExtendedNavbar }>
                                <OpenLinkSpan className={ extendedNavbar ? `fa fa-close` : `fa fa-bars`}></OpenLinkSpan> </OpenLinkButton></ListItemHorizontal>                        
                        </UnorderedList>
                    </NavbarItem>
                </BoxContainerHorizontal>
                </NavbarInnerContainer>                
                { extendedNavbar && (<NavbarExtendedContainer>
                    <UnorderedList>
                        <ListItemVertical navbarLink={true} linkStyle={ navlinkStyle }><NavLink linkStyle={ navlinkStyle } className='active' onClick={(event) => navigateTo(event, '/')}>Home</NavLink></ListItemVertical>
                        <ListItemVertical navbarLink={true} linkStyle={ navlinkStyle }><NavLink href='/broadcast' linkStyle={ navlinkStyle } onClick={(event) => navigateTo(event, '/broadcast')}>BroadCast</NavLink></ListItemVertical>
                        <ListItemVertical navbarLink={true} linkStyle={ navlinkStyle }><NavLink href='/download' linkStyle={ navlinkStyle } onClick={(event) => navigateTo(event, '/download')}>Downloads</NavLink></ListItemVertical>
                        <ListItemVertical navbarLink={true} linkStyle={ navlinkStyle }><NavLink href='/contact-us' linkStyle={ navlinkStyle } onClick={(event) => navigateTo(event, '/contact-us')}>Contact Us</NavLink></ListItemVertical>
                        <ListItemVertical navbarLink={true} linkStyle={ navlinkStyle }><NavLink href='/about-us' linkStyle={ navlinkStyle } onClick={(event) => navigateTo(event, '/about-us')}>About Us</NavLink></ListItemVertical>
                        <ListItemVertical navbarLink={true}><NavLinkLanguage href='/language' auth={true}>Select Language</NavLinkLanguage></ListItemVertical>
                    </UnorderedList>
                </NavbarExtendedContainer>) }
            
            </Navbar>
        </React.Fragment>
    );
}

export default Header;