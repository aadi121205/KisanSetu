import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer: React.FC = () => {
    return (
        <footer className="bg-dark text-white py-3 mt-5">
            <Container>
                <Row className="mb-3">
                    <Col className="text-center text-lg">
                        <p className="mb-0">Kisan Setu</p>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col className="text-center text-lg">
                        <p className="mb-0">Delhi Technological University, DTU, Formerly DCE, Rohini, Bawana Road</p>
                    </Col>
                    <Col className="text-center text-lg">
                        <p className="mb-0">
                            <a href="tel:9891966228">9891966228</a>
                        </p>
                    </Col>
                    <Col className="text-center text-lg">
                        <p className="mb-0">
                            <a href="mailto:aaditya.tec@gmail.com">ksetu_help@gmail.com</a>
                        </p>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col className="text-center text-lg ">
                        <p className="mb-0">© 2024 KisanSetu. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;