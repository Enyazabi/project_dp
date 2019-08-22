import styled from "styled-components";

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
  outline:none;
 
`;