import React from "react";
import SectionItem from "../SectionItem";

import { productData } from "../../data/dataItem";

import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import "./react-web-tabs.css";

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    this.setState({
      isLoaded: true,
      items: productData,
    });
  }

  componentWillUnmount() {}

  render() {
    const tabs = [];
    const tabPanels = [];

    const {isLoaded, items} = this.state;

    items.map((product, index) => {
    tabs.push(
      <Tab key={index} tabFor={product.section}>
        {product.section}
      </Tab>
    );
    tabPanels.push(
      <TabPanel key={index} tabId={product.section}>
        <SectionItem data={[product]} />
      </TabPanel>
    );
    return(tabs, tabPanels)
  });

  return(
    <Tabs>
           <TabList>{tabs}</TabList>
          {tabPanels}
         </Tabs>
  )
  }
}

