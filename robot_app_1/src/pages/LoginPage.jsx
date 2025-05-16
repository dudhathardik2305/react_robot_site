import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login(email, password);
    setMessage(result.message);

    if (result.success) {
      console.log('Login successful');
      // Redirect to dashboard after successful login
      navigate('/dashboard'); // Example redirect
    } else {
      console.error('Login failed:', result.message);
    }
  };

  return (
    <div className="min-vh-100 bg-light d-flex align-items-center justify-content-center">
      <div className="bg-white p-4 p-md-5 rounded shadow w-100" style={{ maxWidth: '500px' }}>
        <h2 className="h4 fw-semibold mb-4 text-center">Login</h2>
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
          <button type="submit" className="btn btn-primary w-100 fw-bold mb-3">
            Login
          </button>
          <p className="text-center text-muted">
            Don't have an account? <Link to="/signup" className="text-success text-decoration-underline">Sign Up</Link>
          </p>
          {message && <p className="text-center text-danger mt-3">{message}</p>}
          <div className="text-center">
            <Link to="/" className="btn btn-outline-secondary">Back to Home</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;