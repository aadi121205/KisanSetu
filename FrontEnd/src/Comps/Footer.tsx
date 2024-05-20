import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'; // import your CSS file


const Footer: React.FC = () => {
    return (
        <footer className="bg-dark text-white py-3 mt-5">
            <Container>
                <Row className="mb-3">
                    <Col className="text-center text-lg">
                        <h3 className="mb-0">KisanSetu</h3>
                    </Col>
                </Row>
                <Row className="mb-3"><br></br></Row>
                <Row className="mb-3">
                    <Col className="text-center text-lg">
                        <p className="mb-0">Delhi Technological University(DCE), Rohini, Bawana Road</p>
                    </Col>
                    <Col className="text-center text-lg">
                        <p className="mb-0">
                            <a href="tel:9999697291">9999697291</a>
                        </p>
                    </Col>
                    <Col className="text-center text-lg">
                        <p className="mb-0">
                            <a href="mailto:aaditya.tec@gmail.com">aaditya.tec@gmail.com</a>
                        </p>
                    </Col>
                </Row>
                <Row className="mb-3"><br></br></Row>
                <Row className="mb-3">
                    <Col className="text-center text-lg">
                        <p className="mb-0">© 2022 KisanSetu. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;