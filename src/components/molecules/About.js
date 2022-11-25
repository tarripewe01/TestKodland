import React from "react";

import "./About.css";
import Box from "../atoms/Box";

const About = () => {
  return (
    <div className="about">
      <h1 className="title">Lorem Ipsum</h1>
      <Box height={20} />
      <p className="subTitle">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable.
      </p>
      <Box height={20} />
    </div>
  );
};

export default About;
