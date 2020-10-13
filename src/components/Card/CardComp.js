import React from "react";
import { Card, CardBody, CardSubtitle } from "reactstrap";
import './Card.css'

/** Card component  */

const CardComp = ({ title, subtitle, text }) => {
  return (
    <div className="Card">
      <Card>
        <CardBody>
          <CardSubtitle>{subtitle}</CardSubtitle>
        </CardBody>
        <svg
          width="121"
          height="114"
          viewBox="0 0 121 114"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="121" height="114" fill="#C4C4C4" />
        </svg>
        <br />
        <div className="Card-title">{title}</div>
        <CardBody>
          <div className="Card-text">{text}</div>
        </CardBody>
      </Card>
    </div>
  );
};

CardComp.defaultProps = {
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
};

export default CardComp;
