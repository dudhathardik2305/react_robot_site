import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import backgroundImage from './../image/back_img_1.jpg';



const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useAuth();
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await register(email, password);
    setMessage(result.message);

    if (result.success) {
      console.log('Signup successful');
      // Redirect to login page or dashboard after successful signup
      navigate('/login'); // Redirect to the login page
    } else {
      console.error('Signup failed:', result.message);
    }
  };

  return (
    <div
      className="min-h-screen bg-gray-100 flex items-center justify-center"
      style={{
        backgroundImage: {backgroundImage},
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
    <div className="min-vh-100 bg-light d-flex align-items-center justify-content-center">
  <div className="bg-white p-4 p-md-5 rounded shadow w-100" style={{ maxWidth: '500px' }}>
    <h2 className="h4 fw-semibold mb-4 text-center">Sign Up</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label fw-bold">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          placeholder="Email"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="form-label fw-bold">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          placeholder="Password"
          required
        />
      </div>
      <button type="submit" className="btn btn-success w-100 mb-3 fw-bold">
        Sign Up
      </button>
      <p className="text-center text-muted mb-3">
        Already have an account? <Link to="/login" className="text-primary text-decoration-underline">Login</Link>
      </p>
      {message && <p className="text-center text-danger mb-3">{message}</p>}

      <div className="text-center">
        <Link to="/" className="btn btn-outline-secondary">Back to Home</Link>
      </div>
    </form>
  </div>
</div>

</div>
  );
};

export default SignupPage;


