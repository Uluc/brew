import styled from "styled-components";
import Container from "react-bootstrap/Container"
import { BsPlus, BsX } from "react-icons/bs";

export const Heading = styled.h1`
    text-align: center;
    margin: 1rem;
`;

export const TableContainer = styled(Container)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

export const Table = styled.div`
    height: 200px;
    width: 150px;
    background-color: red;
    margin: 1rem;
    display: flex;
    flex-direction: column;

`;

export const TableHeader = styled.h2`
    font-family: "Rubik", sans-serif;
    font-weight: 600;
    font-size: 1.6rem;
    color: #c32e1d;
`;

export const QRContainer = styled.div``;


export const DeleteIcon = styled(BsX)`
    font-size: 2rem;
    cursor: pointer;
    justify-self: flex-end;
    background-color: blue;
`;

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
      font-size: 0.9rem;
  }
`;

export const AddIcon = styled(BsPlus)`
   font-size: 5rem;
   cursor: pointer;
`;
