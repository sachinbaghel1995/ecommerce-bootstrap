import { Button } from "react-bootstrap"

const HeaderCartButton=(props)=>{
    return (
        <>
        <Button variant="outline-danger" onClick={props.onClick}>Cart</Button>
        </>
    )
}
export default HeaderCartButton