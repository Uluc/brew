import styled from "styled-components";
import Container from "react-bootstrap/Container"
import { BsPlus, BsX } from "react-icons/bs";

export const QRCode = styled.img`
    height: 100px;
    width: 100px;
`;

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
    height: 175px;
    width: 150px;
    border-style: solid;
    border-color: #c32e1d;
    border-width: 3px;
    border-radius: 4px;
    margin: 1rem;
    display: flex;
    flex-direction: column;

`;

export const TableHeader = styled.h2`
    font-family: "Rubik", sans-serif;
    font-weight: 600;
    font-size: 1.6rem;
    color: #c32e1d;
    text-align: center
`;

export const QRContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;


export const DeleteIcon = styled(BsX)`
    font-size: 2rem;
    cursor: pointer;
    
`;

export const DeleteContainer = styled.div`
    display: flex;
    justify-content: flex-end;
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
      font-family: "Numans", sans-serif;
      font-size: 0.9rem;
  }
`;

export const AddIcon = styled(BsPlus)`
   font-size: 5rem;
   cursor: pointer;
`;
