import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navigationbar.css";

const Navigationbar = () => {

    return (
        <Navbar id="nav-bar" className="p-3" collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand href="#home" className="mx-4">FindFriendsInc</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="mx-4"/>
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end mx-4">
            <Nav>
                <Nav.Link href="#about" className="mx-3">About</Nav.Link>
                <Nav.Link href="#documentation" className="mx-3">Documentation</Nav.Link>
                <Nav.Link href="#demo" className="mx-3">Demo</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigationbar;