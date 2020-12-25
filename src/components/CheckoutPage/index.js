import React from "react";
import { productData } from "../../data/dataItem";

import CheckoutItem from '../CheckoutItem/'

export default class Checkout extends React.Component {
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

  render()  {
      return(
          <div>
              <CheckoutItem/>
          </div>
          
      )
  }
}