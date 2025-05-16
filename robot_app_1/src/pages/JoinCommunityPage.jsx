import React from 'react';
import './../index.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const JoinCommunityPage = () => {
  return (
    <div className="bg-dark text-white py-5">
      <div className="container">
        <h1 className="text-center mb-5 display-4 fw-bold">Join Our Robotics Community</h1>
        <p className="lead mb-4 text-secondary text-center">
          Connect with fellow robotics enthusiasts, learners, and expert mentors. Collaborate on projects, share your knowledge, and grow together!
        </p>

        <section className="mb-5">
          <h2 className="mb-3 fw-bold">Ways to Connect</h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            <div className="col">
              <div className="card bg-secondary border-light text-white shadow-sm h-100">
                <div className="card-body d-flex flex-column align-items-center text-center">
                  <i className="bi bi-discord text-primary fs-2 mb-3"></i>
                  <h5 className="card-title fw-bold">Discord Server</h5>
                  <p className="card-text text-secondary">Join our active Discord server for real-time discussions, Q&A, and project collaborations.</p>
                  <a href="https://discord.gg/your-community-invite" target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-auto">Join Discord</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card bg-secondary border-light text-white shadow-sm h-100">
                <div className="card-body d-flex flex-column align-items-center text-center">
                  <i className="bi bi-slack text-success fs-2 mb-3"></i>
                  <h5 className="card-title fw-bold">Slack Workspace</h5>
                  <p className="card-text text-secondary">Connect with our community on Slack for organized channels and focused discussions.</p>
                  <a href="https://your-community.slack.com/invite/your-invite-link" target="_blank" rel="noopener noreferrer" className="btn btn-success mt-auto">Join Slack</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card bg-secondary border-light text-white shadow-sm h-100">
                <div className="card-body d-flex flex-column align-items-center text-center">
                  <i className="bi bi-github text-info fs-2 mb-3"></i>
                  <h5 className="card-title fw-bold">GitHub Organization</h5>
                  <p className="card-text text-secondary">Explore and contribute to our open-source robotics projects on GitHub.</p>
                  <a href="https://github.com/your-github-org" target="_blank" rel="noopener noreferrer" className="btn btn-info mt-auto">Visit GitHub</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card bg-secondary border-light text-white shadow-sm h-100">
                <div className="card-body d-flex flex-column align-items-center text-center">
                  <i className="bi bi-facebook text-primary fs-2 mb-3"></i>
                  <h5 className="card-title fw-bold">Facebook Group</h5>
                  <p className="card-text text-secondary">Stay updated with announcements and engage in discussions on our Facebook group.</p>
                  <a href="https://www.facebook.com/your-community-group" target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-auto">Join Facebook Group</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="mb-3 fw-bold">Community Guidelines</h2>
          <p className="text-secondary">
            We encourage a positive and inclusive environment. Please be respectful, supportive, and contribute constructively to our community.
          </p>
          <ul className="list-unstyled text-secondary">
            <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i> Be respectful and considerate of others.</li>
            <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i> Share your knowledge and help fellow learners.</li>
            <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i> Participate in discussions and collaborations.</li>
            <li className="mb-2"><i className="bi bi-x-circle-fill text-danger me-2"></i> No spam or irrelevant content.</li>
            <li className="mb-2"><i className="bi bi-x-circle-fill text-danger me-2"></i> Respect privacy and avoid sharing personal information without consent.</li>
          </ul>
        </section>

        <div className="text-center mt-5">
          <Link to="/" className="btn btn-outline-light me-2">Back to Home</Link>
          <Link to="/courses" className="btn btn-primary me-2">Explore Courses</Link>
          <Link to="/hands-on-learning" className="btn btn-info">Hands-on Learning</Link>
        </div>
      </div>
    </div>
  );
};

export default JoinCommunityPage;