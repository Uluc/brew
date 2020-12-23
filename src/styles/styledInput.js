import styled from "styled-components";
import Container from "react-bootstrap/Container"

export const InputPageContainer = styled(Container)``;

export const StyledSubmissionButton = styled.button`
 margin-top: 1rem;
 padding: 0.7rem;
 border-radius: 4px;

`;

export const StyledNavigationButton = styled.button`
 margin-top: 1rem;
 padding: 3rem;
 border-radius: 4px;
 font-family: "Rubik", sans-serif;
font-weight: 600;
font-size: 2rem;

`;


export const StyledInput = styled.input`
 width: 100%;
  font-size: 14px;

  border-width: 1px;
  border-style: solid;
  margin: 0;


`;

export const StyledLabel = styled.label`
    font-size: 14px;
    font-family: "Numans", sans-serif;
    margin-bottom: 0.8rem;
    margin-top: 1rem;

`;

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
`;