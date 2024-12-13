import React from 'react';
import { useAuth } from '../../Context/AuthContext';
import './Profile.css';

const Profile = () => {
  const { authState } = useAuth();

  return (
    <div>
      <h2>Profile</h2>
      {authState.authenticated ? (
        <p>
          Name: {authState.name} <br />
          Email: {authState.email}
        </p>
      ) : (
        <p>Please log in to view your profile.</p>
      )}
    </div>
  );
};

export default Profile;