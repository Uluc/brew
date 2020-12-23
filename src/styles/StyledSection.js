import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

export const SectionTitle = styled.h1`
  text-align: center;
  font-family: "Rubik", sans-serif;
  padding-bottom: 1.2rem;
  padding-top: 1rem;
`;

export const DishHeading = styled.h3`
  font-family: "Rubik", sans-serif;
  font-weight: 600;
  font-size: 1.4rem;
  color: #c32e1d;
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

export const DishContainer = styled(Container)``;

export const DishHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
`;

export const FoodCol = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const PriceCol = styled(Col)`
  display: flex;  
`;

export const StyledButton = styled.button`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  min-width: 60px;
  background: #c32e1d;
  color: #fff;
  transition: 0.2s ease-out;

  &:hover {
    color: #fff;
    background:  #823535;
    transition: 0.2s ease-out;
    cursor: pointer;
  }
`;


