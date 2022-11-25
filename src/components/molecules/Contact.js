import React from "react";
import { Col, Row } from "react-bootstrap";
import Box from "../atoms/Box";

import './Contact.css'

const Contact = () => {
  return (
    <div className="contact">
      <Row className="row">
        <Col sm className="logo">StartPlay</Col>
        <Col sm className="social">Instagram</Col>
        <Col sm className="social">Facebook</Col>
        <Col sm className="social">Twitter</Col>
        <Col sm className="social">Email</Col>
      </Row>
      <Box height={30} />
    </div>
  );
};

export default Contact;
