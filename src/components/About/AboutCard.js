import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey, my name is <span className="green">Albin Ingholm </span>
            from <span className="green"> Lørenskog, Norway.</span>
            <br />
            I am a student at Mailand VGS
            <br />
            I am learning the .NET Framework, C#, and JavaScript.
            <br />
            <br />
            Apart from coding, here are some of my hobbies!
          </p>
          <ul>
            <li className="about-activity">
              - RC Racing
            </li>
            <li className="about-activity">
              - Music / Guitar
            </li>
            <li className="about-activity">
  
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
