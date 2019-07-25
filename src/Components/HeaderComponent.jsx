import * as React from 'react';
import { Label } from '../UI/Controls/Label.styled'
import { ButtonHome } from "../UI/Controls/Button.styled";
import { ButtonTests } from "../UI/Controls/Button.styled";


const HeaderComponent = () => {

    return(
        <div>
            <Label> Some label </Label>
            <ButtonHome> Home </ButtonHome>
            <ButtonTests> Tests </ButtonTests>
        </div>
    )
};

export default HeaderComponent;