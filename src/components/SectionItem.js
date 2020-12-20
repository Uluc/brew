import React from "react";
import Row from "react-bootstrap/Row"
import { SectionTitle, DishContainer,
FoodCol, PriceCol, DishInfo, DishHeading, DishPrice } from "../styles/StyledSection";

function SectionItem() {
  return (
    <DishContainer>
        <Row>
            <FoodCol xs={10}>
                <DishHeading>Sushi</DishHeading>
                <DishInfo>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                </DishInfo>
            </FoodCol>
            <PriceCol>
                <DishPrice>14.99</DishPrice>
            </PriceCol>
        </Row>
    </DishContainer>
  );
}

export default SectionItem;
