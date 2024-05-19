import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';

const NavigationBar: React.FC = () => {
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#">MyApp</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                    <Nav>
                        {isAuthenticated ? (
                            <Button variant="outline-light" onClick={() => logout({ returnTo: window.location.origin })}>
                                Log Out
                            </Button>
                        ) : (
                            <Button variant="outline-light" onClick={() => loginWithRedirect()}>
                                Log In
                            </Button>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
