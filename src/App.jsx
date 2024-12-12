import React from 'react';
import { AuthProvider } from './Context/AuthContext.jsx';
import AppRoutes from './routes/Routes.jsx'

function App() {

  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
};

export default App;
