import React from "react";
import CardComp from "./CardComp";
import { Row, Col } from "reactstrap";
import './Card.css'

/** Container that displays 3 cards */

const CardContainer = ({ header, text, title }) => {
  return (
    <div className="CardContainer">
      <div className="CardContainer-header">{header}</div>
      <br />
      <div className="CardContainer-subheader">
        Ut enim ad minim veniam, <strong>quis nostrud exercitation</strong>{" "}
        ullamco laboris nisi ut aliquip ex ea commodo consequa
      </div>
      <Row>
        <Col md="4" className="Card-divider">
          <CardComp title={title} subtitle="highlight 1" text={text} />
        </Col>
       <hr className="Card-horizontal-divider"/>
        <Col md="4" className="Card-divider">
          <CardComp title="Duis aute" subtitle="highlight 2" />
        </Col>
       <hr className="Card-horizontal-divider"/>
        <Col md="4">
          <CardComp title="Excepteur" subtitle="highlight 3" />
        </Col>
      </Row>
    </div>
  );
};
CardContainer.defaultProps = {
  header: "Excepteur sint occaecat",
  title: "Lorem"
};
export default CardContainer;
