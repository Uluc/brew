import styled from "styled-components";
import Container from "react-bootstrap/Container";
import { BsPlus } from "react-icons/bs";

export const AddIconContainer = styled.div`
  color: #000000;
  text-decoration: none;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center; 
  margin-top: 2rem;

  p{
      margin-bottom: -1rem;
      font-family: "Numans", sans-serif;
      font-size: 1.2rem;
  }

`;

export const AddIcon = styled(BsPlus)`
   font-size: 10rem;
   cursor: pointer;
`;


export const SectionContainer = styled.div`
    margin-top: 2rem;
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`;
export const MenuManagerContainer = styled(Container)``;

export const EditSectionButton = styled.button`
    padding: 2rem, 3rem;
    border-style: solid;
    border-color: #c32e1d;
    border-radius: 10px;
    background-color: transparent;
    font-family: "Numans";
    font-size: 1.3rem;
    color: #c32e1d

`;
