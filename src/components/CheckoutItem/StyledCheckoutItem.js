import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import {BsPlus, BsDash, BsX} from 'react-icons/bs'

export const CheckoutItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    border-style: solid;
    padding: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    background-color: lightgray;
`;

export const CounterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-style: solid;
    border-radius: 0.4rem;
    border-width: 1px;
    border-color: #C0C0C0;
`;

export const Plus = styled(BsPlus)`
    font-size: 1.3rem;
    
`;

export const Minus = styled(BsDash)`
    font-size: 1.3rem;
    
`;

export const DishContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    margin-bottom: 0.5rem;
    
`;

export const Count = styled.p`
    margin:0;
`;

export const Dish = styled.h1``;

export const DishPrice = styled.p``;

export const RemoveContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    color: #000;
    background-color: salmon;

`;
export const Remove = styled(BsX)`
    font-size: 1.2rem;
    justify-self: flex-end;
    background-color: lightred;

`;

