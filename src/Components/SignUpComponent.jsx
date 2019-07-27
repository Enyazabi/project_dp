import * as React from 'react';
import { SignUpForm } from "./SignUp.styled";
import { Input } from "../UI/Controls/Input.styled";
import {Button} from "../UI/Controls/Button.styled";
import {Container} from "../UI/Container.styled";



const SignUpComponent = () => {

    return(
        <Container>

            <SignUpForm>
                <h2>Sign up</h2>
                <div>
                    <Input placeholder="Login" type="text"/>
                    <Input placeholder="Email" type="email"/>
                    <Input placeholder="Password" type="password"/>
                    <Button variant="signIn"> Already a member? Sign In</Button>

                </div>
            </SignUpForm>
        </Container>
    )
};

export default SignUpComponent;