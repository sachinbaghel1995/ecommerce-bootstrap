import React from "react";
import Products from "./components/Designing/Products";
import {  Container, Navbar,Button } from "react-bootstrap";
// import Counter from "./components/Counter";

function App() {
  return (
    <>
    <Navbar bg="dark" variant="dark" expand="sm">
      <Container>
        <Navbar.Brand href='/'>E-commerce</Navbar.Brand>
        <Button variant="link">Home</Button>
        <Button variant="link" className="ms-1">Store</Button>
        <Button variant="link">About</Button>
        <Button>Cart</Button>
      </Container>
    </Navbar>
    {/* <Counter/> */}
    <Products/>
    </>
  );
}

export default App;
