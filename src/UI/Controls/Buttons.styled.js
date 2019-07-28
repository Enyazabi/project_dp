import styled from 'styled-components';

export const Button = styled.button`
    font-family: Roboto;
    font-style: normal;
    font-weight: ${(props) => (props.variant==='signUp'?'bold':'normal')};
    font-size: ${(props) => (props.variant==='signUp'?'20px':'26px')};
    line-height: 30px;
    border: none;
    background: none;
    outline: none;
    align-items: flex-end;
    text-align: justify;
    text-decoration: ${(props) => (props.variant!=='signUp'||'underline')};
    cursor: pointer;

    color: ${(props) => (props.variant==='signUp'?'white':'#1945E4')};
    :hover {
        color: #142D86;
    }; 
    :active {
        color: grey;
`;

export const ButtonLarge = styled.button`

width: 362px;
height: 77px;
background: #1945E4;
mix-blend-mode: normal;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 30px;
outline: none;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 28px;
color: #FFFAFA;
cursor: pointer;
    `;