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
} from "../styles/StyledSection";

const SectionItem = ({ data }) => {
  return data.map((product, index) => {
    return (
      <div key={index}>
        <SectionTitle >{product.section}</SectionTitle>;
        
        <DishContainer>
          {product.meals.map((spec, index) => (
            <Row key={index}>
              <FoodCol xs={9}>
                <DishHeading> {spec.name} </DishHeading>
                <DishInfo> {spec.desc}</DishInfo>
              </FoodCol>
              <PriceCol>
                <DishPrice> {spec.price} </DishPrice>
              </PriceCol>
            </Row>
          ))}
        </DishContainer>
      </div>
    );
  });
};

export default SectionItem;
