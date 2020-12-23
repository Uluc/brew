import React from "react";
import {
  DishContainer,
  DishHeading,
  DishInfo,
  DishPrice,
  DishRow,
  FoodCol,
  EditIcon,
  PriceCol,
  DeleteIcon,
  DishHeadingContainer,
} from "./StyledManagerDishes";

const ManagerDishes = () => {
  return (
    <DishContainer>
      <DishRow>
        <FoodCol xs={9}>
          <DishHeadingContainer>
            <DishHeading> Sushi </DishHeading>
            <EditIcon />
          </DishHeadingContainer>

          <DishInfo>
            Marinara sauce, basil, italian sausage, roma tomatoes, olives, and
            pesto
          </DishInfo>
        </FoodCol>
        <PriceCol>
          <DishPrice> 2.22</DishPrice>
          <DeleteIcon />
        </PriceCol>
      </DishRow>
    </DishContainer>
  );
};

export default ManagerDishes;
