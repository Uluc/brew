import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import {BsPencil, BsX} from 'react-icons/bs'


export const DishContainer = styled(Container)`
    margin: 1rem;
    width: 40vw;
    border-width: 0px;
    border-bottom: 2px;
    border-style: solid;
`;

export const DishHeading = styled.h3`
    font-family: "Rubik", sans-serif;
    font-weight: 600;
    font-size: 1.6rem;
    color: #c32e1d;
`;

export const DishHeadingContainer = styled.div`
    display: flex;
`;


export const DishInfo = styled.p`
  font-family: "Numans", sans-serif;
  font-size: 0.8rem;
`;

export const DishPrice = styled.p`
  font-family: "Numans", sans-serif;
  align-content: center;
 
  font-size: 1rem;
`;

export const FoodCol = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const PriceCol = styled(Col)`
  display: flex;  
  justify-content: space-between;
`;


export const DishRow = styled(Row)`
    display: flex;
    
`;

export const EditIcon = styled(BsPencil)`
    margin-left: 1.5rem;
    font-size: 1.7rem;
    cursor: pointer;
`;

export const DeleteIcon = styled(BsX)`
    font-size: 2rem;
    cursor: pointer;
`;


