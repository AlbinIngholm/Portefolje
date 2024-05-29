import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import me from "../../Assets/Firefly_Avatar.jpg";
import suicide from "../../Assets/Projects/suicide.png";
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
              description="This portfolio webpage. Made with React.js, React-Bootstrap, Node.js, Express.js, CSS3, Netlify, VSCode"
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
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor built with React.js. The editor supports HTML, CSS, and JS code with an instant preview. It also includes a markdown editor for building README files, supporting GFM, custom HTML tags, a toolbar, and instant preview. Both editors support auto-save using Local Storage."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained an image classifier model using the PyTorch framework. The model was able to detect diseased and healthy leaves of 14 unique plants, achieving an accuracy of 98% using the Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="AI For Social Good"
              description="Used Natural Language Processing to detect suicide-related posts and users' suicide ideation in cyberspace, aiding in suicide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using the FER-2013 dataset with Keras and TensorFlow. The classifier successfully predicted various human emotions with an accuracy of 60.1%. Used OpenCV to detect faces in an image and pass them to the classifier to predict the emotion."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
