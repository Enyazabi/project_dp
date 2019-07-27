import styled from 'styled-components';

export const Button = styled.button`
   

    font-family: Roboto;
    font-style: normal;
    font-weight: ${(props) => (props.variant==='signIn'?'bold':'normal')};;
    font-size: ${(props) => (props.variant==='signIn'?'20px':'26px')};
    line-height: 30px;
    border: none;
    background: none;
    outline: none;

    
    align-items: flex-end;
    text-align: justify;

    color: ${(props) => (props.variant==='signIn'?'white':'#1945E4')};
    
    :hover {
        color: #142D86;
    }; 
`;
