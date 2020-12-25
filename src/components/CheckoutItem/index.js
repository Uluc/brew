import { render } from "@testing-library/react";
import React, { useState } from "react";
import {
CheckoutItemContainer,
  CounterContainer,
  Plus,
  Minus,
  DishContainer,
  Count,
  Dish,
  DishPrice,
  Remove,
  RemoveContainer
} from "./StyledCheckoutItem";
const CheckoutItem = () => {
  const [count, setcount] = useState(0);

  return (
    <CheckoutItemContainer>
      <CounterContainer>
          <Plus/>
          <Count> 0 </Count>
          <Minus/>
      </CounterContainer>

      <DishContainer>
        <Dish>
            Pizza
        </Dish>
        <DishPrice>
            19.99$
        </DishPrice>
      </DishContainer>

      <RemoveContainer>
        <Remove/>
      </RemoveContainer>

    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
