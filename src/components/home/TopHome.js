import React from "react";
import { BoxContainerHorizontal, BoxItem, BoxItemHorizontal, HomeHeader, HomeHeading, InputTrial, Subtitle } from "../../shared/common";
import bg from '../../bg.jpeg';
import { useNavbarContext } from "../../context.api/NavbarContextProvider";

const TopHome = () => {
    const isNavbarExteded = useNavbarContext();
    return (
        <>
            <HomeHeader url={ bg } isExtended={ isNavbarExteded }>
                <BoxContainerHorizontal bg_img={true} height={'100%'}> 
                    <BoxItem>
                        <HomeHeading>Missionary Center Of Jesus Christ in Malawi Dzaleka Tabernacle</HomeHeading>
                        <Subtitle>This good news of the kingdom will be preached throughout the world as a testimony to all nations. Then will come the end.</Subtitle>
                        <InputTrial type='submit' value='Subscribe Notification'/>
                    </BoxItem> 
                </BoxContainerHorizontal>
            </HomeHeader>
        </>
    );
};

export default TopHome;