import styled from 'styled-components';

export const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
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