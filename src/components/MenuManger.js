import React from "react";
import { StyledNavigationButton } from "../styles/styledInput";
import {
  AddIconContainer,
  AddIcon,
  SectionButton,
  MenuManagerContainer,
  SectionContainer,
} from "../styles/StyledManagement";

function MenuManager() {
  return (
      <MenuManagerContainer>

        <SectionContainer>
          <SectionButton>Baked Sushi</SectionButton>
        </SectionContainer>

        <SectionContainer>
          <SectionButton>Baked Sushi</SectionButton>
        </SectionContainer>

        <SectionContainer>
          <SectionButton>Baked Sushi</SectionButton>
        </SectionContainer>

        <SectionContainer>
          <SectionButton>Baked Sushi</SectionButton>
        </SectionContainer>
        


        <AddIconContainer>
        <p>Add Section</p>
          <AddIcon />
          
        </AddIconContainer>

      </MenuManagerContainer>
  );
}

export default MenuManager;
