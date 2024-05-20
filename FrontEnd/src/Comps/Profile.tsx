import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// Assuming you have a UserContext that holds the authentication status
const UserContext = React.createContext({ isSignedIn: false });

const Profile = () => {
  const { isSignedIn } = useContext(UserContext);
  const navigate = useNavigate();

  if (!isSignedIn) {
    navigate('/login');
    return null;
  }

  return (
    <div>
      <h1>Your Profile</h1>
      <p>This is your profile page.</p>
    </div>
  );
};

export default Profile;