import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import rc from "../../Assets/rc.png";
import vinterlandskap from "../../Assets/vinterlandskap.JPG";
import pxlawards from "../../Assets/pxlawards.jpg";
import me from "../../Assets/Firefly_Avatar.jpg";
import punk from "../../Assets/Punk_1.jpg";
import trivia from "../../Assets/trivia.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="green">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of my recent projects
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={me}
              isBlog={false}
              title="Portfolio"
              description="This portfolio webpage. Made with React.js, React-Bootstrap, Node.js, Express.js, CSS3, Netlify, VSCode and Adobe XD."
              ghLink="https://github.com/AlbinIngholm/Portefolje"
              demoLink="https://ingholm.software"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={trivia}
              isBlog={false}
              title="Trivia App"
              description="Trivia App made with MudBlazor and Auth0. The App retrieves Trivia information from a Trivia API. Collaborated with Håkon Sunde."
              ghLink="https://github.com/AlbinIngholm/TriviaApp_MudBlazor/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pxlawards}
              isBlog={false}
              title="Publikumsprisen Contribution"
              description="My contribution for the 'Pixel Awards', an annual event organized by SR."
              demoLink="#" // # fordi knappen må dukke opp, koden tar seg av å ikke vise det.
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rc}
              isBlog={false}
              title="My passion"
              description="School project where I was interveiwed about RC Racing, edited in Premiere Pro. Collaborated with Lukas Oppegård Berntsen av Phoomdet Wannapeera."
              demoLink="https://www.youtube.com/watch?v=WJzRfR8T_3E"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={punk}
              isBlog={false}
              title="Punk Self-Portrait"
              description="Punk Self-Portrait edited in Photoshop. For the Konseptutviling and Programmering Course."
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vinterlandskap}
              isBlog={false}
              title="Winter Landscape"
              description="Winter Landscape photos shot with my iPhone, edited in Photoshop. For the Produksjon og Historiefortelling Course."
              demoLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

