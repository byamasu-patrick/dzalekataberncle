import React from "react";
import { BoxContainerHorizontal, BoxContent, BoxItem, BoxItemHorizontal, BoxSpaceAround, CategoriesInput, CategoryLabel, CenterHorizontalBoxItem, Checkmark, ClientImage, FooterLink, ImageCircle, ImageTab, LeftHorizontalBoxItem, ListItemVertical, MissionButton, ProductBox, ProductButton, ProductDescription, ProductDetails, ProductImage, ProductItem, ProductTitle, RightHorizontalBoxItem, SearchBox, SearchButton, SearchInput, SectionBoxItem, SubscribeButton, Subtitle, SubtitleMission, UnorderedList } from "../shared/common";
import TopHome from "./home/TopHome";
import amazon from '../logos/amazon.png';
import google from '../logos/google.png';
import microsoft from '../logos/microsoft.png';
import mit from '../logos/mit.png';
import worldbank from '../logos/worldbank.png';
import unhcr from '../logos/unhcr.png';
import dzalekatab from '../products/dzalekatab.jpeg';

const Home = ({ extended }) => {
    // const items = [ {
    //     product_image: 'product1.png',
    //     product_name: 'School and Office Bags',
    //     product_description: 'In some cases you might want to change which tag or component a styled component renders. This is common when building a navigation bar for example, where there are a mix of anchor links and buttons but they should be styled identically.' ,
    // },
    // {
    //     product_image: 'product2.png',
    //     product_name: 'School and Office Bags',
    //     product_description: 'In some cases you might want to change which tag or component a styled component renders. This is common when building a navigation bar for example, where there are a mix of anchor links and buttons but they should be styled identically.' ,
    // },
    // {
    //     product_image: 'product3.jpeg',
    //     product_name: 'School and Office Bags',
    //     product_description: 'In some cases you might want to change which tag or component a styled component renders. This is common when building a navigation bar for example, where there are a mix of anchor links and buttons but they should be styled identically.' ,
    // },
    // {
    //     product_image: 'product4.jpg',
    //     product_name: 'School and Office Bags',
    //     product_description: 'In some cases you might want to change which tag or component a styled component renders. This is common when building a navigation bar for example, where there are a mix of anchor links and buttons but they should be styled identically.' ,
    // },
    // {
    //     product_image: 'product5.png',
    //     product_name: 'School and Office Bags',
    //     product_description: 'In some cases you might want to change which tag or component a styled component renders. This is common when building a navigation bar for example, where there are a mix of anchor links and buttons but they should be styled identically.' ,
    // },
    // {
    //     product_image: 'product6.png',
    //     product_name: 'School and Office Bags',
    //     product_description: 'In some cases you might want to change which tag or component a styled component renders. This is common when building a navigation bar for example, where there are a mix of anchor links and buttons but they should be styled identically.' ,
    // }];
    // const Product = () => {
    //     return items.map(item => (
    //         <ProductItem height={"380px"} id={item.id}>
    //             <ProductImage src={ require(`../products/${ item.product_image }`)}/>
    //             <ProductTitle>{ item.product_name }</ProductTitle>
    //             <ProductDescription>{ item.product_description.substr(0, 90) }...</ProductDescription>
    //             <ProductDetails type="button">Details</ProductDetails>
    //             <ProductButton type="button">Buy this product</ProductButton>
    //         </ProductItem>
    //     ));
    // }
    return (
       <React.Fragment>
           <TopHome isExtended={ extended }></TopHome>

           <BoxContent height={'800px'} className='m-t-4'>               
                <SectionBoxItem className="grow-2" style={{ justifyContent: 'center' }} hoffman={true}>
                    <ImageTab src={require('../products/christ_hoffman.jpg')} className='right-self-alignment' />
                </SectionBoxItem>
                <SectionBoxItem className="grow-1" style={{ justifyContent: 'center'}}>
                    <ProductItem className="box" height="auto" width="70%">
                        <h1 style={{ width: '80%', alignSelf: 'center'}} className='m-t-4'>63-0623E The Flashing Red Light Of The Sign Of His Coming</h1>
                        <Subtitle style={{color: '#000', textAlign: 'left', letterSpacing: '1.5px', width: '80%', fontSize: '18px'}}>
                        Glory to God, what a day we are living in. We are listening to a Message that has been proven, by every act, to be Jesus Christ the same yesterday, today, and forever. It has done the very same things that He did when He was here on earth; healed the sick, knowed the thoughts of the mind, showed forth things that would come to pass, raised the dead, and every time, It has been perfect.</Subtitle>
                        <MissionButton type="button">Recorded Audio Here</MissionButton>
                    </ProductItem>
                </SectionBoxItem>
           </BoxContent>
           <BoxContent height={'auto'} bg_img={{ imagUrl: dzalekatab ,  bg_size: '100% 100%', }}>
                <SectionBoxItem className='grow-1 center-self-alignment' style={{ justifyContent: 'center'}}>
                    <ProductItem height="auto" width="60%">
                        <h1 style={{ alignSelf: 'center'}}>MISSIONARY CENTER</h1>
                        <SubtitleMission style={{color: '#000', textAlign: 'left', letterSpacing: '1.5px', width: '70%', fontSize: '18px'}}>We believe that the return of Jesus Christ as repeatedly promised in the Holy Scripture is close at hand. The promise came from the lips of our Lord Himself, »… and if I go and prepare a place for you, I will come again, and receive you unto myself, that where I am, there you may be also.« (Jn. 14:1-3).</SubtitleMission>
                        <SubtitleMission style={{color: '#000', textAlign: 'left', letterSpacing: '1.5px', width: '70%', fontSize: '18px'}}>Our Lord emphasised that we should watch the signs of the time. »So likewise ye, when ye shall see all these things, know that it is near, even at the door...</SubtitleMission>
                        <MissionButton type="button">Read More...</MissionButton>
                    </ProductItem>
                </SectionBoxItem>
           </BoxContent>
           <BoxContent height={'600px'}>
                <SectionBoxItem className="grow-1 center-items">
                    <h1>LAST PREACHERS</h1>
                    <CenterHorizontalBoxItem>
                        <BoxContainerHorizontal className="v-align">
                            <ImageCircle src={require('../products/branham.jpg')}/>
                            <h4 className="m-auto">WILLIAM Branham</h4>
                            <p className="m-auto">Branham Tabernacle</p>
                        </BoxContainerHorizontal>
                        <BoxContainerHorizontal className="v-align">
                            <ImageCircle src={require('../products/joseph.jpg')}/>
                            <h4 className="m-auto">Joseph Branham</h4>
                            <p className="m-auto">Branham Tabernacle</p>
                        </BoxContainerHorizontal>
                        <BoxContainerHorizontal className="v-align">
                            <ImageCircle src={require('../products/frank.jpg')}/>
                            <h4 className="m-auto">Ewald Franck</h4>
                            <p className="m-auto">Christ Tabernacle</p>
                        </BoxContainerHorizontal>
                        <BoxContainerHorizontal className="v-align">
                            <ImageCircle src={require('../products/frank ewald.jpg')}/>
                            <h4 className="m-auto">Ewald Frank</h4>
                            <p className="m-auto">Dzaleka Tabernacle</p>
                        </BoxContainerHorizontal>
                    </CenterHorizontalBoxItem>
                </SectionBoxItem>
           </BoxContent>
           
       </React.Fragment>
    );
};

export default Home;