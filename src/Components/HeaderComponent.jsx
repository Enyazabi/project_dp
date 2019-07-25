import * as React from 'react';
import { Label } from '../UI/Controls/Label.styled'
import { ButtonHome } from "../UI/Controls/Button.styled";
import { ButtonTests } from "../UI/Controls/Button.styled";
import { ButtonUsers } from "../UI/Controls/Button.styled";
import { UserIcon } from "../UI/Controls/Icon.styled";
//import { AdminUserIcon } from "../UI/Controls/Icon.styled";

const HeaderComponent = () => {

    return(
        <div>
            <Label> Some label </Label>
            <ButtonHome> Home </ButtonHome>
            <ButtonTests> Tests </ButtonTests>
            <ButtonUsers> Users </ButtonUsers>
            <UserIcon/>


        </div>
    )
};

export default HeaderComponent;