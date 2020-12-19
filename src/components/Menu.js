import React from "react";
import SectionItem from "./SectionItem";
import { StyledTabs, StyledTab } from "../styles/StyledTabs";
import {SectionTitle} from "../styles/StyledSection";

function Menu() {
  return (
    <StyledTabs
      defaultActiveKey="sushi_or_sashimi"
      id="uncontrolled-tab-example"
    >
      <StyledTab eventKey="sushi_or_sashimi" title="Sushi or Sashimi">
        <SectionTitle>Appetizers</SectionTitle>
        <SectionItem />
        <SectionItem />
        <SectionItem />
        <SectionItem />
        <SectionItem />
        <SectionItem />
        <SectionItem />
        <SectionItem />
        <SectionItem />
      </StyledTab>

      <StyledTab eventKey="appetizers" title="Appetizers">
        <h1>Tab2</h1>
      </StyledTab>

      <StyledTab eventKey="specialty_rolls" title="Specialty Rolls">
        <h1>Tab3</h1>
      </StyledTab>

      <StyledTab eventKey="salad" title="Salad">
        <h1>Tab4</h1>
      </StyledTab>
    </StyledTabs>
  );
}

export default Menu;
