import ProductForm from "./ProductForm";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import { Card } from "react-bootstrap";
const ProductItem=(props)=>{
    const cartCtx = useContext(CartContext);
   
    const addToCartHandler = amount => {
              cartCtx.addProduct({
                product: props.product,
                amount: amount,
                price: props.price,
                imagrUrl:props.imagrUrl
              });
            };
return (
        
    <>
     <Card>
         <div>
        <img src={props.imageUrl}/>
           <h3>{props.product}</h3>
           <div>{props.amount}</div>
           <div>{props.price}</div>
        </div>
        <div>
          <ProductForm onAddToCart={addToCartHandler}/>
        </div>
        </Card>
    
 </>
)
}
export default ProductItem

// const MealItem = (props) => {
//     const cartCtx = useContext(CartContext);
  
//     const price = `$${props.price.toFixed(2)}`;
  
//     const addToCartHandler = amount => {
//       cartCtx.addItem({
//         id: props.id,
//         name: props.name,
//         amount: amount,
//         price: props.price
//       });
//     };
  
//     return (
//       <li className={classes.meal}>
//         <div>
//           <h3>{props.name}</h3>
//           <div className={classes.description}>{props.description}</div>
//           <div className={classes.price}>{price}</div>
//         </div>
//         <div>
//           <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
//         </div>
//       </li>
//     );
//   };