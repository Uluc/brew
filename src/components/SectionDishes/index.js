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
  DishHeader,
} from "./StyledSection";
import { productData } from "../../data/dataItem";



const SectionItem = ({ data }) => {
  return data.map((product, index) => {
    return (
      <div key={index}>
        <SectionTitle >{product.section}</SectionTitle>

        <DishContainer>
          {product.meals.map((spec, index) => (
            <Row key={index}>
              <FoodCol xs={9}>
              <DishHeader>
                <DishHeading> {spec.name} </DishHeading>

                </DishHeader>
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
