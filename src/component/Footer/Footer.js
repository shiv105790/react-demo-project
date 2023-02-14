import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";

function Footer() {
    return (
        <footer>
            <Container>
                <Row>
                    <Col md={4}>
                        <Nav className="flex-column">
                            <Nav.Item className="h3">Photo Studio</Nav.Item>
                            <Nav.Link className=""><i class="fa-brands fa-facebook-f"></i></Nav.Link>
                        </Nav>
                    </Col>
                    <Col md={4}>

                    </Col>
                    <Col md={4}>

                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;