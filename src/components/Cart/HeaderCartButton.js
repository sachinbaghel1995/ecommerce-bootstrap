import { Button } from "react-bootstrap"
import { useContext } from "react"
import CartContext from "../../store/cart-context"

const HeaderCartButton=(props)=>{
    const cartCtx=useContext(CartContext)
    const numberOfCartItems=cartCtx.products.reduce((currNum,product)=>{
        return currNum+product.amount
    },0)
    return (
        <>
        <Button variant="outline-danger" onClick={props.onClick}>Cart
        <span className="badge">{numberOfCartItems}</span>
        </Button>
        </>
    )
}
export default HeaderCartButton