import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginForm from "../components/Login/LoginForm";
import SignUpForm from "../components/SignUp/SignUpForm";
import Dashboard from "../components/Dashboard/Dashboard";
import Profile from "../components/Profile/Profile";
import Settings from "../components/Settings/Settings";
import { useAuth } from "../Context/AuthContext";
import Navbar from "../components/Navbar/Navbar";

const AppRoutes = () => {
  const { authState } = useAuth();

  return (
    <Router>
      {authState.authenticated && <Navbar />}
      <Routes>
        {authState.authenticated ? (
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/*" element={<Navigate to="/dashboard" />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/*" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default AppRoutes;