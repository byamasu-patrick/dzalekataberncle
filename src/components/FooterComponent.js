import React from "react";
import { BoxContainerHorizontal, BoxContainerVertical, BoxContent, BoxItemHorizontal, BoxSocialMedia, ContactParagraph, CopyRight, FooterLink, FooterSection, HorizontalLine, Icon, InputMoreInfo, ListItemVertical, SocialMedia, SubscribeButton, UnorderedList } from "../shared/common";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

const Footer = () => {
    return (
        <React.Fragment>
            <FooterSection>
                <BoxContainerHorizontal isFooter={true}>
                    <BoxItemHorizontal>
                        <h2>About US</h2>
                        <p>We are missionary center of Jesus Christ in Malawi<br/>
                        Dzaleka Tabernacle, preaching the gospel to  <br/>
                        prepare christians of this last age for the <br />
                        rupture through batism of the Holy Spirit</p>
                       
                    </BoxItemHorizontal>
                    <BoxItemHorizontal>
                        <h2>Frequently Asked Question</h2>
                        <UnorderedList p_l={true}>
                            <ListItemVertical><FooterLink>Streaming FAQ</FooterLink></ListItemVertical>
                            <ListItemVertical><FooterLink>Sermon Translation FAQ</FooterLink></ListItemVertical>
                            <ListItemVertical><FooterLink>Notification Subscription</FooterLink></ListItemVertical>
                        </UnorderedList>
                    </BoxItemHorizontal>
                    <BoxItemHorizontal>
                        <h2>Helpful Links</h2>
                        <UnorderedList p_l={true} isFooter={true}>
                            <ListItemVertical><FooterLink>Broadcast</FooterLink></ListItemVertical>
                            <ListItemVertical><FooterLink>Download Sermons</FooterLink></ListItemVertical>
                            <ListItemVertical><FooterLink>Terms and Conditions</FooterLink></ListItemVertical>
                            <ListItemVertical><FooterLink>Privacy Policy</FooterLink></ListItemVertical>
                        </UnorderedList>
                    </BoxItemHorizontal>
                   
                </BoxContainerHorizontal>                
                <HorizontalLine/> 
                <BoxContent>
                    <BoxSocialMedia grow={true}>
                        <SocialMedia bg={'#0e76a8'}><span className="fa fa-linkedin"></span></SocialMedia>
                        <SocialMedia bg={'#171515'}><span className="fa fa-github"></span></SocialMedia>
                        <SocialMedia cl={'#fbad50'}><span className="fa fa-instagram"></span></SocialMedia>
                        <SocialMedia bg={'#1DA1F2'}><span className="fa fa-twitter"></span></SocialMedia>
                    </BoxSocialMedia>
                    <BoxSocialMedia>
                       <CopyRight>2022 &copy; Copyright All the right are reserved </CopyRight>
                    </BoxSocialMedia>
                </BoxContent>
            </FooterSection>
            
        </React.Fragment>
    )
}


export default Footer;