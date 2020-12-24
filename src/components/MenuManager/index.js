import React from "react";
import {
  AddIconContainer,
  AddIcon,
  MenuManagerContainer,
  SectionContainer,
} from "./StyledMenuManager";
import { productData } from "../../data/dataItem";

import ManagerDishes from "../ManagerDishes";

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
    const {isLoaded, items} = this.state;

    return (
      <MenuManagerContainer>
        <SectionContainer>
          {items.map((product, index) => {
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
}
