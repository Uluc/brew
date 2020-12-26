import { render } from "@testing-library/react";
import React, { useState } from "react";
import {
  CheckoutItemContainer,
  CheckoutHeaderContainer,
  CounterContainer,
  Plus,
  Minus,
  DishContainer,
  Count,
  Dish,
  DishPrice,
  Remove,
  RemoveCol,
  DishCol,
  CounterCol,
  PriceCol,
  HeaderTitle,
  RemoveBlank,
} from "./StyledCheckoutItem";
const CheckoutItem = () => {
  const [count, setcount] = useState(0);

  const increment = () => {
    setcount(count + 1);
  };

  const decrement = () => {
    if (count != 0) {
      setcount(count - 1);
    }
  };

  return (
    <div>
      <Header />
      <CheckoutItemContainer>
        <DishCol xs={6}>
          <DishContainer>
            <Dish>Himalayan Pizza</Dish>
            <DishPrice>19.99$</DishPrice>
          </DishContainer>
        </DishCol>

        <CounterCol xs={2}>
          <Counter
            initCount={count}
            increment={increment}
            decrement={decrement}
          />
        </CounterCol>
        <PriceCol xs={3}>
          <DishPrice>19.99$</DishPrice>
        </PriceCol>
        <RemoveCol xs={1}>
          <Remove />
        </RemoveCol>
      </CheckoutItemContainer>
    </div>
  );
};

const Counter = ({ initCount, increment, decrement }) => {
  return (
    <CounterContainer>
      <Minus onClick={decrement} />
      <Count> {initCount} </Count>
      <Plus onClick={increment} />
    </CounterContainer>
  );
};

const Header = () => {
  return (
    <CheckoutHeaderContainer>
      <DishCol xs={6}>
        <HeaderTitle>Dish</HeaderTitle>
      </DishCol>
      <CounterCol xs={2}>
        <HeaderTitle>Qty</HeaderTitle>
      </CounterCol>
      <PriceCol xs={3}>
        <HeaderTitle>Price</HeaderTitle>
      </PriceCol>
      <RemoveCol xs={1}>
        <RemoveBlank />
      </RemoveCol>
    </CheckoutHeaderContainer>
  );
};

export default CheckoutItem;
