import React from "react";
import Calendar2 from "../components/Calendar/Calendar";
import {
  Card,Container, Row, Col

} from "shards-react";

const Errors = () => (

  <Container fluid className="main-content-container px-4">
  
    <Row>
      <Col lg="8">
      <Card small className="mb-4">
    <Calendar2>
    </Calendar2>
  </Card>      </Col>
    </Row>
  </Container>
 
);

export default Errors;
