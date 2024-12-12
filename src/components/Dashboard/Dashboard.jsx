import React from 'react';
import { useAuth } from '../../Context/AuthContext';
import './Dashboard.css';

const Dashboard = () => {
  const { authState } = useAuth();

  return (
    <div>
      <h2>Dashboard</h2>
      {authState.authenticated ? (
        <p>Here is your dashboard, {authState.user.name}.</p>
      ) : (
        <p>Please log in to access your dashboard.</p>
      )}
    </div>
  );
};

export default Dashboard;