import React from "react";
import SectionItem from "./SectionItem";
import { StyledTabs, StyledTab, TabBacking } from "../styles/StyledTabs";
import {SectionTitle} from "../styles/StyledSection";
import "../styles/tabStyle.css"

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const tabListStyle = {
  backgroundColor : "#FDDFC3",
  fontFamily: 'Rubik'
};

const tabActiveStyle = {
  color : "black",
  fontWeight: 600
};


function Menu() {
  return (


    <Tabs>
      <Tab iconClassName={'icon-class-0'} linkClassName={'link-class-0'}>
          <p>content 0</p>
      </Tab>
      <Tab iconClassName={'icon-class-1'} linkClassName={'link-class-1'}>
          <CustomComponent propA={'foo'} propB={this.handleSomething}/>
      </Tab>
    </Tabs>

    /**<Tabs>
      
      <TabList style = {tabListStyle}>
        <Tab style = {tabActiveStyle} selectedTabClassName = "tab">Title 1</Tab>
        <Tab style = {tabActiveStyle}>Title 2</Tab>
      </TabList>

      <TabPanel>
        <h2>Any content 1</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
      </TabPanel>
    </Tabs>

    /**<StyledTabs
      defaultActiveKey="sushi_or_sashimi"
      id="uncontrolled-tab-example"
    >
      <StyledTab eventKey="sushi_or_sashimi" title="Sushi or Sashimi">
        <TabBacking>
          <SectionTitle>Appetizers</SectionTitle>
          <SectionItem />
          <SectionItem />
          <SectionItem />
          <SectionItem />
        </TabBacking>
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
    </StyledTabs>*/
  );
}

export default Menu;
