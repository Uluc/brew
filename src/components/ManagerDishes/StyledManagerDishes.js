import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import {BsPencil, BsX} from 'react-icons/bs'


export const DishContainer = styled(Container)`
    margin: 1rem;
    width: 40vw;
    
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
    border-width: 0px;
    border-color: #d3d3d3;
    border-bottom: 2px;
    border-style: solid;
    margin-bottom: 1rem;
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
    margin-bottom: 1rem;

    &:hover, &:focus{
        background-color: #c32e1d;
        color: white;

    }
    
`;

