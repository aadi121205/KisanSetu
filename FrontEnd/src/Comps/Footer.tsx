import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer: React.FC = () => {
    return (
        <footer className="bg-dark text-white py-3 mt-5">
            <Container>
                <Row>
                    <Col className="text-center">
                        <p className="mb-0">© 2022 Your Company Name. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;