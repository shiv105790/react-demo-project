import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import Assets from "../../assets/shared";
import './style.css'
function Header() {
    const { Logo } = Assets;
    return (
        <header className="header border-bottom border-dark py-2">
            <Container>
                <Navbar expand="lg">
                    <Navbar.Brand href="#home">
                        <img
                            src={Logo}
                            className=""
                            width="200px"
                            height="auto"
                            alt="AWE logo"
                        />
                    </Navbar.Brand>
                    <NavbarToggle aria-controls="basic-navbar-nav" />
                    <NavbarCollapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Nav.Link className="px-4">Work</Nav.Link>
                            <Nav.Link className="px-4">Services</Nav.Link>
                            <Nav.Link className="px-4">Clients</Nav.Link>
                            <Nav.Link className="px-4">About</Nav.Link>
                            <Nav.Link className="px-4">Knowledge</Nav.Link>
                            <Nav.Link className="btn btn-outline-success text-dark px-4 fw-bold">Contact</Nav.Link>
                        </Nav>
                    </NavbarCollapse>
                </Navbar>
            </Container>

        </header >
    );
}

export default Header;