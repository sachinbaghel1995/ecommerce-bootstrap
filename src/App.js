import React from "react";
import Products from "./components/Designing/Products";
import {  Container, Navbar,Button } from "react-bootstrap";
// import ModalCart from "./components/Cart/ModalCart";
// import Counter from "./components/Counter";
import Cart from "./components/Cart/Cart";
import HeaderCartButton from "./components/Cart/HeaderCartButton";
import { useState } from "react";

function App() {
  const [showCart,setShowCart]=useState(false)

  const showCartHandler=()=>{
  setShowCart(true)
  }
  const hideCartHandler=()=>{
  setShowCart(false)
  }
  return (
    <>
    
    <Navbar bg="dark" variant="dark" expand="sm">
      <Container>
        <Navbar.Brand href='/'>E-commerce</Navbar.Brand>
        <Button variant="link">Home</Button>
        <Button variant="link" className="ms-1">Store</Button>
        <Button variant="link">About</Button>
        <HeaderCartButton onClick={showCartHandler}/>
      </Container>
    </Navbar>
   {showCart && <Cart onClose={hideCartHandler}/>}
    {/* <Counter/> */}
    <Products/>
    </>
  );
}

export default App;
