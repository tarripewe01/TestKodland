/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Box from "../atoms/Box.js";
import ButtonProduct from "../atoms/ButtonProduct.js";

import "./Product.css";

const imageSquare = require("../../images/square.png");
const imageRound = require("../../images/round.png");
const imageAmongUs = require("../../images/amongus.png");

const Product = () => {
  return (
    <div className="product">
      <Container>
        <h1 className="titleProduct">Product Pop It!</h1>
        <Box height={20} />
        <Row>
          <Col className="subtitleProduct">
            <img src={imageSquare} className="image" />
            <Box height={10} />
            Square Pop It!
            <ButtonProduct />
          </Col>
          <Col className="subtitleProduct">
            <img src={imageAmongUs} className="image" />
            <Box height={10} />
            Among Us Pop It!
             <ButtonProduct />
          </Col>
          <Col className="subtitleProduct">
            <img src={imageRound} className="image" />
            <Box height={10} />
            Round Pop It!
             <ButtonProduct />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Product;
