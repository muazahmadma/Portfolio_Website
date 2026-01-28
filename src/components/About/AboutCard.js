import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, This is <span className="purple">Muaz Ahmad </span>
            from <span className="purple"> Faisalabad, Pakistan.</span>
            <br />
            Have 1+ year of experience in DevOps and Currently working as a Junior DevOps Engineer at Enzipe.
            <br />
            <br /> 
            Apart from building and scaling the infrastructure, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Bike Riding
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Muaz Ahmad</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
