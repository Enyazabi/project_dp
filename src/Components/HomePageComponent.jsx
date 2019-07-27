import * as React from 'react';
import {ButtonLarge, HomeWrapper} from "./HomePage.styled";
import { HomeText } from "./HomePage.styled";
import { HomeTextLorem } from "./HomePage.styled";

const HomePageComponent = () => {

    return(
        <HomeWrapper>

            <HomeText> Start the test </HomeText>
            <HomeTextLorem>Lorem ipsum dolor sit amet,
                consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua.
            </HomeTextLorem>
            <ButtonLarge> Start the test </ButtonLarge>

        </HomeWrapper>
    )
};

export default HomePageComponent;