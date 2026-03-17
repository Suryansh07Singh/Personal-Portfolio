import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../Particle";
import Typing from "./Typing";
import AboutmeContainer from "../../components/aboutme/aboutmeContainer";
import Certification from "../../components/certificate/Certification";
import Projects from "../../components/projects/Projects";
import Contactus from "../../components/contactus/Contactus";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaGoogle } from "react-icons/fa";

export default function Home() {
  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={8} className="home-header">
              <h1
                style={{ paddingBottom: 15, fontSize: "175px" }}
                className="heading"
              >
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> SURYANSH VIKRAM SINGH</strong>
              </h1>

              <div className="typing-homeclass">
                <Typing />
              </div>
              <div className="sociallink-home">
                <ul className="homeaboutsociallinks">
                  <li className="socialicons">
                    <a
                      href="https://github.com/Suryansh07Singh"
                      target="_blank"
                      rel="noreferrer"
                      className="iconcolour  homesocialicons"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="socialicons">
                    <a
                      href="https://www.linkedin.com/in/suryansh-vikram-singh-100a14271/"
                      target="_blank"
                      rel="noreferrer"
                      className="iconcolour  homesocialicons"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  
                  
                  <li className="socialicons">
                    <a
                      href="mailto:suryanshs248@gmail.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="iconcolour homesocialicons"
                    >
                      <FaGoogle />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={4} style={{ paddingBottom: 20 }}>
              <div className="img-home-main">
                <div className="profile-image-wrapper">
                  <div className="gradient-ring"></div>
                  <img
                    src="./profile.png"
                    alt="home pic"
                    className="profile-image"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <AboutmeContainer />
      <Certification />
      <Projects />
      <Contactus />
    </section>
  );
}
