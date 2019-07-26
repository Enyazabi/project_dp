import * as React from 'react';
import { ButtonStart } from "../UI/Controls/HomePage.styled";
import { HomeText } from "../UI/Controls/HomePage.styled";
import { HomeTextLorem } from "../UI/Controls/HomePage.styled";

const HomePageComponent = () => {

    return(
        <div>
            <HomeText> Start the test </HomeText>

            <HomeTextLorem>Lorem ipsum dolor sit amet,
                consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua.
            </HomeTextLorem>

            <ButtonStart> Start the test </ButtonStart>

        </div>
    )
};

export default HomePageComponent;