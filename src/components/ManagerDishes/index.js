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
  SectionButton,
} from "./StyledManagerDishes";

const ManagerDishes = ({ data }) => {

    return data.map((product, index) => {
    return (
      <DishContainer key={index}>
        <SectionButton> {product.section} </SectionButton>

        {product.meals.map((dish, index) => (
          <DishRow key={index}>
            <FoodCol xs={9}>
              <DishHeadingContainer>
                <DishHeading> {dish.name} </DishHeading>
                <EditIcon />
              </DishHeadingContainer>

              <DishInfo>{dish.desc}</DishInfo>
            </FoodCol>
            <PriceCol>
              <DishPrice> {dish.price} </DishPrice>
              <DeleteIcon />
            </PriceCol>
          </DishRow>
        ))}
      </DishContainer>
    );
  });
};

export default ManagerDishes;
