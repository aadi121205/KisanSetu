import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';

export const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return <Button onClick={() => loginWithRedirect()}>Log In</Button>;
};

export const LogoutButton = () => {
    const { logout } = useAuth0();

    return <Button onClick={() => logout()}>Log Out</Button>;
};

export const Loading = () => <div>Loading...</div>;
