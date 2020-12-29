import React, { useState } from "react";
import {
  DishContainer,
  DishHeading,
  DishInfo,
  DishPrice,
  DishRow,
  FoodCol,
  DeleteCol,
  EditIcon,
  PriceCol,
  DeleteIcon,
  DishHeadingContainer,
  SectionButton,
  AddIcon,
  AddIconContainer,
} from "./StyledManagerDishes";

import NewDishModal from "../NewDishModal/";

export default class ManagerDishes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      modalShow: false,
      edit: false,
      product:[]
    };
  }

  componentDidMount() {
    this.setState({
      isLoaded: true,

    });
  }

  componentWillUnmount() {}

  showAddModal = (e) => {
    this.setState({
      modalShow: !this.state.modalShow,
      edit: false,
    });
  }

  showEditModal = (e) => {
    this.setState({
      modalShow: !this.state.modalShow,
      edit: true,
    });
  }

  render() {

    const {data} = this.props;
    
    return data.map((product, index) => {
      return (
        <DishContainer key={index}>
          <SectionButton> {product.section} </SectionButton>

          {product.meals.map((dish, index) => (
            <DishRow key={index}>
              <FoodCol xs={8}>
                <DishHeadingContainer>
                  <DishHeading> {dish.name} </DishHeading>
                  <EditIcon onClick={this.showEditModal}/>
                </DishHeadingContainer>

                <DishInfo>{dish.desc}</DishInfo>
              </FoodCol>

              <PriceCol xs={3}>
                <DishPrice> {dish.price} </DishPrice>
              </PriceCol>

              <DeleteCol xs={1}>
                <DeleteIcon />
              </DeleteCol>
            </DishRow>
          ))}
          <AddIconContainer>
            <AddIcon onClick={this.showAddModal} />
            <p>New Dish</p>
          </AddIconContainer>
          <NewDishModal 
            edit={this.state.edit}
            show={this.state.modalShow}
            onHide={this.showAddModal} />
        </DishContainer>
      );
    });
  }
}
