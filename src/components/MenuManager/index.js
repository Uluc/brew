import React from "react";
import {
  AddIconContainer,
  AddIcon,
  SectionButton,
  MenuManagerContainer,
  SectionContainer,
} from "./StyledMenuManager";

import ManagerDishes from '../ManagerDishes/'

function MenuManager() {
  return (
      <MenuManagerContainer>

        <SectionContainer>
          <SectionButton>Baked Sushi</SectionButton>
          <ManagerDishes/> 
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
