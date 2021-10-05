import React from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const activeStyle = {
    fontWeight: "bold",
    color: "red",
  };
  return (
    <Container fluid className="bg-dark header">
      <h4 className="text-light text-left">Blackhole Learning</h4>
      <NavLink className="item" activeStyle={activeStyle} to="/home">
        Home
      </NavLink>
      <NavLink className="item" activeStyle={activeStyle} to="/services">
        Services
      </NavLink>
      <NavLink className="item" activeStyle={activeStyle} to="/about">
        About
      </NavLink>
      <NavLink className="item" activeStyle={activeStyle} to="/contact">
        Contact Us
      </NavLink>
    </Container>
  );
};

export default Header;
