import React from "react";
import { Link } from "react-router-dom";
import { StyledLink, LinkWrapper } from "../styles/StyledLink";
import { StyledHeader, HeaderWrapper } from "../styles/StyledHeader";

function Navbar() {
  return (
    <HeaderWrapper>
      <StyledHeader> Sushi Masa </StyledHeader>
      <LinkWrapper>
        <StyledLink to="/">Menu </StyledLink>
        <StyledLink to="/cart">Cart </StyledLink>
        <StyledLink to="/checkout">Checkout </StyledLink>
      </LinkWrapper>
    </HeaderWrapper>
  );
}

export default Navbar;
