import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import { Type, Type2 } from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <div style={{ display: "flex", alignItems: "center" }}>
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  <Type2 className="hi-text"/>
                </h1>
                <span
                  className="wave"
                  role="img"
                  aria-labelledby="wave"
                  style={{marginBottom: "100px", marginLeft: "10px", fontSize: "4em" }} // Adjust the fontSize value as needed
                >
                  👋🏻
                </span>
              </div>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> ALBIN INGHOLM</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
