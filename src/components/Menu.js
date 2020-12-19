import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import menuStyle from './menuStyle.css';

function Menu() {
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
  };

  return (
    <Tabs defaultActiveKey="sushi_or_sashimi" id="uncontrolled-tab-example">
      <Tab
        eventKey="sushi_or_sashimi"
        title="Sushi or Sashimi"
      >
        <h1>Tab1</h1>
      </Tab>
      <Tab eventKey="appetizers" title="Appetizers">
        <h1>Tab2</h1>
      </Tab>
      <Tab eventKey="specialty_rolls" title="Specialty Rolls">
        <h1>Tab3</h1>
      </Tab>
      <Tab eventKey="salad" title="Salad">
        <h1>Tab4</h1>
      </Tab>
    </Tabs>
  );
}

export default Menu;


