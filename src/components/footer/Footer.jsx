import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import "../footer/footer.css"


const Footer = () => {
  return (
    <>
      <Navbar  bg="dark" className="flex-column footer">
        
        <Nav.Link eventKey="link-1">Facebook</Nav.Link>
        <Nav.Link eventKey="link-1">Instagram</Nav.Link>
        <Nav.Link eventKey="link-1">Twitter</Nav.Link>
        <Nav.Link eventKey="link-2">Preguntas frecuentes</Nav.Link>
        <p>GYM © 2022 Company, Inc. All rights reserved.</p>
      </Navbar>
    </>
  );
};

export default Footer; 