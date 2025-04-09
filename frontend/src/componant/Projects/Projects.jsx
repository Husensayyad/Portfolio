import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Complaint from "../../Assets/Projects/Complaint.png";
import Wether from "../../Assets/Projects/Wether.png";
import Spotify from "../../assets/Projects/Spotify.png";
import Currency from "../../Assets/Projects/Currency.png";
import Chai from "../../Assets/Projects/Chai.png";
import TaskManager from "../../Assets/Projects/TaskManager.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Chai}
              isBlog={false}
              title="Get Me A Chai"
              description="At Get Me A Chai, we are dedicated to supporting developers, creators, and influencers by connecting them with their supporters. Our platform enables individuals to fund their projects and ideas, providing a space where creativity and innovation can thrive."
              ghLink="https://github.com/Husensayyad/Get_Me_A_Chai"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Wether}
              isBlog={false}
              title="Live Wether App"
              description="A responsive web application that displays real-time weather information for any city or location using the OpenWeatherMap API. Built with the MERN stack, the app provides temperature, humidity, weather conditions, and wind speed with a clean, modern UI."
              ghLink="https://github.com/Husensayyad/LiveWetherApp"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TaskManager}
              isBlog={false}
              title="Task Manager"
              description="The Task Manager App is a full-stack web application built using the MERN stack (MongoDB, Express.js, React, and Node.js). It helps users manage their day-to-day tasks efficiently by allowing them to create, edit, delete, and track the status of their tasks. The application includes user authentication, real-time updates, and a responsive interface for an enhanced user experience. It's ideal for individuals or teams looking to stay organized and boost productivity."
              ghLink="https://github.com/Husensayyad/Task_Manager"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Currency}
              isBlog={false}
              title="Currecy Converter"
              description="A responsive web application that displays real-time weather information for any city or location using the OpenWeatherMap API. Built with the MERN stack, the app provides temperature, humidity, weather conditions, and wind speed with a clean, modern UI."
              ghLink="https://github.com/Husensayyad/currencyconverter"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Spotify}
              isBlog={false}
              title="Spotify"
              description="A simple Spotify clone built using HTML, CSS, and JavaScript.Features include play/pause, progress bar, and a responsive UI.Inspired by Spotify's clean and modern design.
                      Uses the HTML5 <audio> element for music playback.
                     Great for learning DOM manipulation and basic media controls."
              ghLink="https://github.com/Husensayyad/spotifyClone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Complaint}
              isBlog={false}
              title="Complaint Management System"
              description="A full-stack web application designed to streamline the process of submitting, tracking, and managing complaints within an organization, institution, or community. This system enhances transparency, accountability, and response time through a structured complaint workflow."
              ghLink="https://github.com/Husensayyad/php_project"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
