import React from "react";
import Row from "react-bootstrap/Row";
import {
  SectionTitle,
  DishContainer,
  FoodCol,
  PriceCol,
  DishInfo,
  DishHeading,
  DishPrice,
  StyledButton,
  DishHeader
} from "../styles/StyledSection";

const SectionItem = ({ data }) => {
  return data.map((product, index) => {
    return (
      <div key={index}>
        <SectionTitle >{product.section}</SectionTitle>;
        
        <DishContainer>
          {product.meals.map((spec, index) => (
            <Row key={index}>
              <FoodCol xs={8}>
              <DishHeader>
                <DishHeading> {spec.name} </DishHeading>
                <DishPrice> {spec.price} </DishPrice> 
                </DishHeader>
                <DishInfo> {spec.desc}</DishInfo>
              </FoodCol>
              <PriceCol>
                {/* <DishPrice> {spec.price} </DishPrice> */}
                <StyledButton>Add to Cart</StyledButton>
              </PriceCol>
            </Row>
          ))}
        </DishContainer>
        
      </div>
    );
  });
};

export default SectionItem;
