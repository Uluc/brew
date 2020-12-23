import React from "react";
import {
  AddIconContainer,
  AddIcon,
  MenuManagerContainer,
  SectionContainer,
} from "./StyledMenuManager";
import { productData } from "../../data/dataItem";

import ManagerDishes from "../ManagerDishes";

function MenuManager() {

  return (
    <MenuManagerContainer>
      <SectionContainer>
        {productData.map((product, index) => {
          return <ManagerDishes key={index} data={[product]} />;
        })}
      </SectionContainer>
      <AddIconContainer>
        <p>Add Section</p>
        <AddIcon />
      </AddIconContainer>
    </MenuManagerContainer>
  );
}

export default MenuManager;
