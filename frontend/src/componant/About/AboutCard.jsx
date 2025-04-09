import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Husen Sayyad </span>
            from <span className="purple"> Pune, India.</span>
            <br />I am <span className="purple">
              MERN Stack Developer{" "}
            </span>{" "}
            passionate about building dynamic, scalable web apps. Strong
            believer in clean code, continuous learning, and turning ideas into
            interactive experiences.
            <br />
            I have completed Integrated Bsc in Computer Science from Vidya
            Pratishthan Baramati
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Swimming
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code that solves problems. Designs that speak."{" "}
          </p>
          <footer className="blockquote-footer">Husen</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
