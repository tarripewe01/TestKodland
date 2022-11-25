/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Col, Row } from "react-bootstrap";
import Box from "../atoms/Box";

import "./Info.css";

const imageInfo = require("../../images/photo.jpg");

const Info = () => {
  return (
    <div className="info">
      <Row>
        <Col className="textInfo">
            <h1 className="titleInfo">Info</h1>
          <Box height={10} />
          Contrary to popular belief, Lorem Ipsum is not simply random text.
        </Col>
        <Col className="textInfo">
          <img src={imageInfo} className="imageInfo" />
          <Box height={10} />
        </Col>
      </Row>
      <Box height={20} />
    </div>
  );
};

export default Info;
