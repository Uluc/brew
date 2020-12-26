import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsPlus, BsDash, BsX } from "react-icons/bs";

export const CheckoutHeaderContainer = styled(Row)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const HeaderTitle = styled.h1`
    font-size: 1rem;
    font-weight: 640;
`;

export const CheckoutItemContainer = styled(Row)`
  display: flex;
  flex-direction: row;
  border-style: solid;
  padding: 0;
  border-width: 0;
  border-bottom-width: 1px;
  justify-content: space-between;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const DishCol = styled(Col)`
  display: flex;
  flex-direction: column;
`;

export const CounterCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PriceCol = styled(Col)`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Plus = styled(BsPlus)`
  font-size: 1.3rem;
  color: gray;
`;

export const Minus = styled(BsDash)`
  font-size: 1.3rem;
  color: gray;
`;

export const Count = styled.p`
  margin: 0;
  margin-left: 0.7rem;
  margin-right: 0.7rem;
  color: gray;
`;

export const CounterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 1.4rem;
`;

export const DishContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
`;

export const Dish = styled.h2`
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
`;

export const DishPrice = styled.p`
    margin: 0;
    font-size: 0.8rem;
`;

export const RemoveCol = styled.div`
  display: flex;
  justify-content: flex-end;
  color: #000;
`;


export const Remove = styled(BsX)`
  font-size: 1.2rem;
  justify-self: flex-end;
  cursor: pointer;
`;

export const RemoveBlank = styled(BsX)`
  font-size: 1.2rem;
  justify-self: flex-end;
  color: transparent;

`;


