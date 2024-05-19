import React from 'react';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import './Home.css'; // import your CSS file

const Home: React.FC = () => {
    return (
        <><div className="bg-image">
            <br className='' />
            <br className='' />
            <div className="text-center">
                <Container>
                    <h1>Welcome to Farmers Rights</h1>
                    <p>Empowering farmers through knowledge, support, and advocacy.</p>
                    <Button variant="primary" href="#learn-more">Learn More</Button>
                </Container>
            </div>

            <Container className="my-5">
                <Row>
                    <Col md={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Advocacy</Card.Title>
                                <Card.Text>
                                    We fight for the rights of farmers at the local, national, and international levels.
                                </Card.Text>
                                <Button variant="primary" href="#advocacy">Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Education</Card.Title>
                                <Card.Text>
                                    Providing educational resources and training programs for sustainable farming.
                                </Card.Text>
                                <Button variant="primary" href="#education">Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Support</Card.Title>
                                <Card.Text>
                                    Offering support services including legal advice and financial planning.
                                </Card.Text>
                                <Button variant="primary" href="#support">Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    );
};

export default Home;