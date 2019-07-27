import * as React from 'react';
import { Label } from '../UI/Label.styled'
import { Button } from "../UI/Controls/Button.styled";
import { UserIcon } from "../UI/Icon.styled";
import { AdminIcon } from "../UI/Icon.styled";
import {Container} from "../UI/Container.styled";

const HeaderComponent = (option) => {
    return(
        <Container>

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

        </Container>
    )
};

export default HeaderComponent;