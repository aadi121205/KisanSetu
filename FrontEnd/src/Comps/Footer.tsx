import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer: React.FC = () => {
    return (
        <footer className="bg-dark text-white py-3 mt-5">
            <Container>
                <Row className="mb-3">
                    <Col className="text-center text-lg">
                        <p className="mb-0">Your Company Name</p>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col className="text-center text-lg">
                        <p className="mb-0">123 Main Street, New York, NY 10001</p>
                    </Col>
                    <Col className="text-center text-lg">
                        <p className="mb-0">
                            <a href="tel:555-555-5555">555-555-5555</a>
                        </p>
                    </Col>
                    <Col className="text-center text-lg">
                        <p className="mb-0">
                            <a href="mailto:aaditya.tec@gmail.com">aaditya.tec@gmail.com</a>
                        </p>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col className="text-center text-lg">
                        <p className="mb-0">© 2022 Your Company Name. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;