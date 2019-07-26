import * as React from 'react';
import { Label } from '../UI/Controls/Label.styled'
import { Button } from "../UI/Controls/Button.styled";
import { UserIcon } from "../UI/Controls/Icon.styled";
import { AdminIcon } from "../UI/Controls/Icon.styled";
import {HeaderWrapper} from "./HeaderComponent.styled";

const HeaderComponent = (option) => {
    return(
        <HeaderWrapper>
            <Label> Some label </Label>
            <Button> Home </Button>
            <Button> Tests </Button>
            <Button> Users </Button>
            {
                option.isAdmin?
                    <AdminIcon/>
                    :
                    <UserIcon/>
            }
        </HeaderWrapper>
    )
};

export default HeaderComponent;