import React from 'react';
import { useAuth } from '../../Context/AuthContext';

const Settings = () => {
  const { authState } = useAuth();

  return (
    <div>
      <h2>Settings</h2>
      {authState.authenticated ? (
        <p>Here you can update your settings, {authState.name}.</p>
      ) : (
        <p>Please log in to access your settings.</p>
      )}
    </div>
  );
};

export default Settings;