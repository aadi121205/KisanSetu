import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';

const NavigationBar: React.FC = () => {
    const { logout, isAuthenticated } = useAuth0();

    const handleLogout = () => {
        logout({
            logoutParams: { returnTo: window.location.origin }
        });
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">MyApp</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                        <Nav.Link href="/profile">Profile</Nav.Link>
                        <Nav.Link href="/admin">Admin</Nav.Link>
                        <Nav.Link href="/md">Md</Nav.Link>
                    </Nav>
                    <Nav className="mr-2">
                        {isAuthenticated ? (
                            <Button variant="outline-light" onClick={handleLogout}>
                                Log Out
                            </Button>
                        ) : (
                            <Button variant="outline-light" href="/login">
                                Log In
                            </Button>
                        )
                        }
                    </Nav>
                    <Nav>
                        {'PLSFIX'}
                    </Nav>
                    <Nav>
                        <Button variant="outline-light" href="/Signup">
                            SignUp
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;