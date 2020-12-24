import React from "react";
import Row from "react-bootstrap/Row";
import {
  SectionTitle,
  DishContainer,
  FoodCol,
  PriceCol,
  DishInfo,
  DishHeading,
  DishPrice,
  StyledButton,
  DishHeader,
} from "../styles/StyledSection";
import { productData } from "../data/dataItem";

class SectionItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: null };
  }

  componentDidMount() {
    const { product } = [productData];
    this.setState({ product: product });
  }

  componentWillUnmount() {}

  render() {
    const product = this.state.product;
    if (!product) {
        return (
            <div>Something went wrong. Or data is empty</div>
        )
    }
    return (
      <div>
        {Object.keys(product).map((product, index) => {
          return <SectionTitle key={index}>{product.section}</SectionTitle>;
        })}
      </div>
    );
  }
}

// const SectionItem = ({ data }) => {
//   return data.map((product, index) => {
//     return (
//       <div key={index}>
//         <SectionTitle >{product.section}</SectionTitle>

//         <DishContainer>
//           {product.meals.map((spec, index) => (
//             <Row key={index}>
//               <FoodCol xs={9}>
//               <DishHeader>
//                 <DishHeading> {spec.name} </DishHeading>

//                 </DishHeader>
//                 <DishInfo> {spec.desc}</DishInfo>
//               </FoodCol>
//               <PriceCol>
//                 <DishPrice> {spec.price} </DishPrice>

//               </PriceCol>
//             </Row>
//           ))}
//         </DishContainer>

//       </div>
//     );
//   });
// };

export default SectionItem;
