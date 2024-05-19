import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { LoginButton } from './LoginButton'
import { LogoutButton } from './LogoutButton'
import { Profile } from './Profile'
import { Loading } from './Loading'


export const NavBar = () => {
    const { isLoading } = useAuth0()

    if (isLoading) {
        return <Loading />
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">React Auth0</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                        <Nav.Link as={Link} to="/external-api">External API</Nav.Link>
                    </Nav>
                    <Nav>
                        <LoginButton />
                        <LogoutButton />
                        <Profile />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar