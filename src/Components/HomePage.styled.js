import styled from 'styled-components';

export const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
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
    `;

export const HomeText = styled.text`

width: 212px;
height: 42px;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 36px;
line-height: 42px;
color: #2C375E;
    `;

export const HomeTextLorem = styled(HomeText)`
width: 251px;
height: 201px;
font-weight: normal;
font-size: 24px;
line-height: 28px;
text-align: left;
color: #2C375E;
`;