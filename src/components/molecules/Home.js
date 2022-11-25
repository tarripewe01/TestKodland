import React from "react";
import ButtonAction from '../atoms/ButtonAction';

import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <h1>POP IT!</h1>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random.</p>
        <ButtonAction />
      </div>
    </div>
  );
};

export default Home;
