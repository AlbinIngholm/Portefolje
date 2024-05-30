import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleDemoClick = () => {
    if (props.title === "Publikumsprisen Contribution" || "Punk Self-Portrait" || "Winter Landscape") {
      handleShow();
    } else {
      window.open(props.demoLink, "_blank");
    }
  };

  return (
    <>
      <Card className="project-card-view">
        <Card.Img className="project-card-img" variant="top" src={props.imgPath} alt="card-img" />
        <Card.Body className="project-card-body">
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>
          <div className="project-card-buttons">
            {props.ghLink && (
              <Button variant="primary" href={props.ghLink} target="_blank">
                <BsGithub /> &nbsp;
                {"GitHub"}
              </Button>
            )}
            {props.demoLink && (
              <Button variant="primary" onClick={handleDemoClick}>
                <CgWebsite /> &nbsp;
                {"Demo"}
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{props.title} - Demo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={props.imgPath}
            alt="Demo"
            style={{ width: "100%", height: "auto" }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProjectCards;