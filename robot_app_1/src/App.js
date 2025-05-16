import React from 'react';
import { AuthProvider } from './hooks/useAuth';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import LandingPage from './pages/LandingPage'; // Assuming you have a LandingPage or other main content
import CoursePage from './pages/CoursePage'; // Import the CoursePage
import HandsOnLearningPage from './pages/HandsOnLearningPage'; // Import the new component
import JoinCommunityPage from './pages/JoinCommunityPage'; // Import the new component


function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} /> {/* Or your main page */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/courses" element={<CoursePage />} />
          {/* Add other routes as needed */}
          <Route path="/hands-on-learning" element={<HandsOnLearningPage />} /> {/* Add this route */}
          <Route path="/join-community" element={<JoinCommunityPage />} /> {/* Add this route */}
        {/* Add other routes as needed */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
