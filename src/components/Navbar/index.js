import React from "react";
import { Link } from "react-router-dom";
import { StyledLink, LinkWrapper } from "./StyledLink";
import { StyledHeader, HeaderWrapper, StyledHeaderText } from "./StyledHeader";

function Navbar() {
  return (
    <HeaderWrapper>
      <StyledHeader> Sushi Masa </StyledHeader>
      <StyledHeaderText>Sushi like you wanted it</StyledHeaderText>
      {/* <LinkWrapper>
        <StyledLink to="/">Menu </StyledLink>
        <StyledLink to="/cart">Cart </StyledLink>
        <StyledLink to="/checkout">Checkout </StyledLink>
      </LinkWrapper> */}
    </HeaderWrapper>
  );
}

export default Navbar;
