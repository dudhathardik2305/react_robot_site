import React from 'react';
import { AuthProvider } from './hooks/useAuth';
import LoginPage from './pages/LandingPage.jsx'; // or your main component

function App() {
  return (
    <AuthProvider>
      <LoginPage />
    </AuthProvider>
  );
}

export default App;
