import { Row, Col, Card, Container, CardImg, Button } from "react-bootstrap";
import CartProvider from "../../store/CartProvider";
import ProductForm from "./ProductForm";
import ProductItem from "./ProductItem";
const productsArr = [
  {
    product: "Colors",

    price: "$ 100",

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    product: "Black and white Colors",

    price: "$ 50",

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    product: "Yellow and Black Colors",

    price: "$ 70",

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    product: "Blue Color",

    price: "$ 100",

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Products = (props) => {
  const productsList = productsArr.map((productss) => (
    <Card>
    <ProductItem
    imageUrl={productss.imageUrl}
    product={productss.product}
    price={productss.price}
    />
    </Card>
  ));
  return <>{productsList}</>;
};
export default Products;
