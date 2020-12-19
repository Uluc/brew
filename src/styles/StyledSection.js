import styled from 'styled-components';
import Container from 'react-bootstrap/Container'
import Col from "react-bootstrap/Col"

export const SectionTitle = styled.h1`
    text-align: center;
`;


export const DishHeading = styled.h3`
    font-family: 'Rubik', sans-serif;
    font-weight:600;
    font-size: 1.4rem;
    color: #C32E1D
`;

export const DishInfo = styled.p`
    font-family: 'Numans', sans-serif;
    font-size: 0.8rem;
`;

export const DishPrice = styled.p``;


export const DishContainer = styled(Container)` 
`;

export const FoodCol = styled(Col)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;


export const PriceCol = styled(Col)`
    display: flex;
    justify-content: flex-end;
`;
