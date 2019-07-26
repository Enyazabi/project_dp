import styled from 'styled-components';

export const SignUpForm = styled.form`


width: 362px;
height: 400px;
left: 470px;
top: 160px;

background: linear-gradient(180deg, rgba(25, 69, 228, 0.6) 0%, rgba(47, 67, 139, 0.162) 100%);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 15px;

font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 28px;
line-height: 33px;

text-align: center;

color: #FFFFFF
    `;



export const Input = styled.input.attrs(props => ({
    type: `${props => props.type}`
}))`
  width: 226px;
  padding: 0.7em;
  margin: 0.5em;
  color: ${props => props.inputColor || "#2C375E"};
  background: none;
  border: none;
  border-bottom: 1px solid white;
 
`;

