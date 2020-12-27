import React, { useState } from "react";
import {
  DishContainer,
  DishHeading,
  DishInfo,
  DishPrice,
  DishRow,
  FoodCol,
  DeleteCol,
  EditIcon,
  PriceCol,
  DeleteIcon,
  DishHeadingContainer,
  SectionButton,
  AddIcon,
  AddIconContainer,
} from "./StyledManagerDishes";

const ManagerDishes = ({ data }) => {
  const [list, setList] = useState(data);

  function handleRemove(id) {
    console.log(id);
  }

  return list.map((product, index) => {
    return (
      <DishContainer key={index}>
        <SectionButton> {product.section} </SectionButton>

        {product.meals.map((dish, index) => (
          <DishRow key={index}>
            
            <FoodCol xs={8}>
              <DishHeadingContainer>
                <DishHeading> {dish.name} </DishHeading>
                <EditIcon />
              </DishHeadingContainer>

              <DishInfo>{dish.desc}</DishInfo>
            </FoodCol>

            <PriceCol xs={3}>
              <DishPrice> {dish.price} </DishPrice>
            </PriceCol>

            <DeleteCol xs={1}>
              <DeleteIcon onClick={() => handleRemove(dish.name)} />
            </DeleteCol>
            
          </DishRow>
        ))}
        <AddIconContainer>
          <AddIcon />
          <p>New Dish</p>
        </AddIconContainer>
      </DishContainer>
    );
  });
};

export default ManagerDishes;
