import React from "react";
import { Row, Col } from "reactstrap";
import './Main.css'

/** Main landing page */

const Main = () => (
  <div className="Main">
    <div className="Main-header">Lorem ipsum <span className='Main-span'>dolor</span></div>
    <br />
    <br />
    <Row>
      <Col md="6" className="Main-col">
        <p className="Main-subheader">Consectetur adipiscing elit</p>
        <p className="Main-subtext">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip.
        </p>
        <p className="Main-small">
          Duis aute inure dolor in
          <strong> reprehenderit in voluptate</strong> velit esse cilum dolore
          eu fuglat nulla pariatur
        </p>
      </Col>
      <Col md="6" className="Main-col">
        <svg
          id="Main-svg"
          width="342"
          height="309"
          viewBox="0 0 342 309"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="154.5" cy="154.5" r="154.5" fill="#C4C4C4" />
          <circle cx="284" cy="246" r="58" fill="#C4C4C4" />
        </svg>
      </Col>
    </Row>
  </div>
);
export default Main;
