import React from "react";
import {
  TotalContainer,
  TotalSection,
  TotalSubSection,
  CheckoutButton,
  CheckoutSectionContainer
} from "./StyledCheckoutTotals";

const CheckoutTotals = () => {
  return (
    <CheckoutSectionContainer>
      <TotalContainer>
        <TotalSubSection>
          <p>Subtotal:</p>
          <p>25$</p>
        </TotalSubSection>
        <TotalSubSection>
          <p>Tax:</p>
          <p>0.25$</p>
        </TotalSubSection>
        <TotalSection>
          <p>Total:</p>
          <p>25$</p>
        </TotalSection>
      </TotalContainer>
      <CheckoutButton>
          Checkout
      </CheckoutButton>
    </CheckoutSectionContainer>
  );
};

export default CheckoutTotals;
