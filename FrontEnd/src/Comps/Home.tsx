import React from 'react';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import './Home.css'; // import your CSS file

const Home: React.FC = () => {
    return (
        <><div> // className="bg-image"
            <br className='' />
            <br className='' />
            <div className="text-center">
                <Container>
                    <h1>Welcome to Kisan Setu</h1>
                    <p>Empowering farmers through Guaranteed MSP| Cop moisture Classification| Common platform </p>
                    <Button variant="primary" href="#learn-more">Learn More</Button>
                </Container>
            </div>

            <Container className="my-5">
                <Row>
                    <Col md={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Price Detection</Card.Title>
                                <Card.Text>
                                    Get the apt price of your crops
                                </Card.Text>
                                <Button variant="primary" href="#advocacy">Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Classification</Card.Title>
                                <Card.Text>
                                   Get the crop tag for selling!
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
                                    Offering support services including crop planning to get the desired tag as per the buyer's demand.
                                </Card.Text>
                                <Button variant="primary" href="#support">Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row><br></br></Row>
                <Row>
                    <Col md={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title> Buyer Community</Card.Title>
                                <Card.Text>
                                    Join our community of Buyers to get the desired type of crop for you specific requirements.
                                </Card.Text>
                                <Button variant="primary" href="#community">Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Events</Card.Title>
                                <Card.Text>
                                    Attend our events to learn from experts and network with other farmers.
                                </Card.Text>
                                <Button variant="primary" href="#events">Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title> Current Storage</Card.Title>
                                <Card.Text>
                                    Access our data of presently available stock of various crops.
                                </Card.Text>
                                <Button variant="primary" href="#resources">Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="text-center my-5">
                        <h2 id="learn-more">Learn More</h2>
                        <p>Buy or sell with Kisan Setu.</p>
                        <Button variant="primary" href="#about"> Proceed</Button>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <h2 id="advocacy">Advocacy</h2>
                        <p>We advocate for the rights of farmers at the local, national, and international levels. Our goal is to ensure that farmers have access to the resources and support they need to thrive. This includes a platform to sell and get the best prices of the crops without the tyranny of the Middle Man!</p>
                        <Button variant="primary" href="#advocacy">Learn More</Button>
                    </Col>
                    <Col md={6}>
                        <h2 id="education">Education</h2>
                        <p>We provide educational resources and training programs for sustainable farming. Our goal is to empower farmers with the knowledge and skills they need to succeed.</p>
                        <Button variant="primary" href="#education">Learn More</Button>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <h2 id="support">Support</h2>
                        <p>We offer support services including legal advice and financial planning. Our goal is to help farmers navigate the challenges they face and build a sustainable future.</p>
                        <Button variant="primary" href="#support">Learn More</Button>
                    </Col>
                    <Col md={6}>
                        <h2 id="community">Community</h2>
                        <p>Join our community of farmers to . Our goal is to create a network of support for farmers to connect, learn, and grow together.</p>
                        <Button variant="primary" href="#community">Learn More</Button>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    );
};

export default Home;