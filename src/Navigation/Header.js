import React, { useState,useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Context  from "../context/UserContext"
import { useNavigate } from "react-router-dom";
function Header(){
  const {userName} = useContext(Context);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">WeatherOnDemand</Navbar.Brand>
          <Nav className="me-auto nav_bar_wrapper">
            <Link to="/">Home</Link>

            <Link to="About">About</Link>
            <Link to="AddProduct">AddProduct</Link>
            {userName ?
              <Link to="logout" style={{ color: "white", marginLeft: "720px" }}>
             Logout
              </Link>
             : 
              <Link to="Signup" style={{ color: "white", marginLeft: "720px" }}>
                Register
              </Link>
            }
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
