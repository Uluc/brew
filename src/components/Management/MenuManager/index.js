import React, {useState} from "react";
import {
  AddIconContainer,
  AddIcon,
  MenuManagerContainer,
  SectionContainer,
} from "./StyledMenuManager";
import { productData } from "../../../data/dataItem";

import NewSectionModal from "../NewSectionModal/"

import ManagerDishes from "../ManagerDishes";

export default class MenuManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: [],
      modalShow: false,
    };
  }

  componentDidMount() {
    this.setState({
      isLoaded: true,
      items: productData,

    });
  }

  componentWillUnmount() {}

  showModal = (e) => {
    e.preventDefault()
    this.setState({
      modalShow: !this.state.modalShow,
    });
  }

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
          <p>New Section</p>
          <AddIcon onClick={this.showModal} />
        </AddIconContainer>

        <NewSectionModal
        show={this.state.modalShow}
        onHide={this.showModal}
      />
      </MenuManagerContainer>
    );
  }
}
