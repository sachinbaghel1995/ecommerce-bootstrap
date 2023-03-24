// import { useState } from "react";
// import { Container, Col, Card, Row, Button } from "react-bootstrap";

// const Counter = () => {
//     const [state,setState]=useState({
//         count: 0
//     })
//     const incr=()=>{
//         setState({
//             count:state.count+1
//         })
 
//     }
//     const decr=()=>{
//         setState({
//             count:state.count-1
//         })
//     }
//   return (
//     <>
//       <Container className="mt-4">
//         <Row>
//           <Col xs={4}>
//             <Card>
//               <Card.Body>
//                 <p >{state.count}</p>
//                 <Button className="m-1" variant="success" onClick={incr}>Increment</Button>
//                 <Button className="m-1" variant="warning" onClick={decr}>Decrement</Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// };
// export default Counter;
