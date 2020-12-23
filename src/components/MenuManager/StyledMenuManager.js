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

export const RemoveIcon = styled.div``;

export const SectionButton = styled.button`
    font-family: "Rubik", sans-serif;
    font-weight: 600;
    font-size: 1.7rem;
    padding: 0.8rem 2rem;
    width: 40vw;
    color: #c32e1d;
    text-align: center;
    border-color: #c32e1d;
    border-width: 2px;
    background-color: transparent;
    border-style: solid;
    border-radius: 5px;
    transition: 0.2s all ease-in;

    &:hover, &:focus{
        background-color: #c32e1d;
        color: white;

    }
    

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
