import * as React from 'react';
import { SignUpForm } from "../UI/Controls/SignUp.styled";
import { Input } from "../UI/Controls/SignUp.styled";



const SignUpComponent = () => {

    return(
        <div>
            <h2>Sign up</h2>
            <SignUpForm>
                <div>
                    <Input defaultValue="Login" type="text"/>
                    <Input defaultValue="Login" type="email"/>
                    <Input defaultValue="Login" type="password"/>
                </div>
            </SignUpForm>
        </div>
    )
};

export default SignUpComponent;