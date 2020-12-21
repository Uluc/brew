import React from "react";
import SectionItem from "./SectionItem";

import { productData } from "../data/dataItem";

import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import "../styles/react-web-tabs.css";

function Menu() {
  const tabs = [];
  const tabPanels = [];

  productData.map((product, index) => {
    tabs.push(
      <Tab key={index} tabFor={product.section}>
        {product.section}
      </Tab>
    );
    tabPanels.push(
      <TabPanel key={index} tabId={product.section}>
        <SectionItem data={[productData[index]]} />
      </TabPanel>
    );
    return(tabs, tabPanels)
  });

  return (
    <Tabs>
      <TabList>{tabs}</TabList>
      {tabPanels}
    </Tabs>
  );
}

export default Menu;
