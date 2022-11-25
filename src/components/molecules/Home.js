import React from "react";

import "./Home.css";

const background = require("../../images/background.png");

const Home = () => {
  return (
    <div
      className="home"
      // style={{
      //   backgroundColor: "#ffbf69",
      //   backgroundImage: `url(${background})`,
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "contain",
      //   backgroundPosition: "center",
      //   height: "100vh",
      //   // marginTop: -250
      // }}
    >
      <div className="title">
        <h1>POP IT!</h1>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random.</p>
      </div>

      {/* <Container fluid="md">
        <Row>
          <Col>
        <Box height={400} />
          <h1 style={{color:'#ffffff', fontWeight: 'bold', fontSize: 100, textAlign: 'left'}}>POP IT!</h1>
          <p style={{color:'#ffffff', fontWeight: '500', fontSize: 30, textAlign: 'left'}}>Contrary to popular belief, Lorem Ipsum is not simply random.</p>
          <ButtonAction />
          </Col>
          <Col></Col>
        </Row>
      </Container> */}
    </div>
  );
};

export default Home;
