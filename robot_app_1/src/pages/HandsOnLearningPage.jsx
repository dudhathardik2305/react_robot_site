import React from 'react';
import './../index.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const HandsOnLearningPage = () => {
  return (
    <div className="bg-dark text-white py-5">
      <div className="container">
        <h1 className="text-center mb-5 display-4 fw-bold">Hands-on Learning</h1>
        <p className="lead mb-4 text-secondary">
          Experience the thrill of building and programming real robots. Our hands-on learning approach ensures you gain practical skills and a deep understanding of robotics principles.
        </p>

        <section className="mb-5">
          <h2 className="mb-3 fw-bold">Why Hands-on?</h2>
          <ul className="list-unstyled text-secondary">
            <li className="mb-2 d-flex align-items-center">
              <i className="bi bi-tools me-3 text-primary fs-4"></i>
              Practical Skills: Develop tangible skills in assembly, wiring, and troubleshooting.
            </li>
            <li className="mb-2 d-flex align-items-center">
              <i className="bi bi-lightbulb me-3 text-info fs-4"></i>
              Deeper Understanding: Grasp complex concepts through direct interaction with hardware.
            </li>
            <li className="mb-2 d-flex align-items-center">
              <i className="bi bi-joystick me-3 text-success fs-4"></i>
              Engaging Experience: Learn by doing, making the process more enjoyable and memorable.
            </li>
            <li className="mb-2 d-flex align-items-center">
              <i className="bi bi-gear me-3 text-warning fs-4"></i>
              Problem-Solving: Enhance your ability to diagnose and solve real-world robotics challenges.
            </li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="mb-3 fw-bold">Our Hands-on Activities Include:</h2>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
              <div className="card bg-secondary border-light text-white shadow-sm">
                <div className="card-body">
                  <h5 className="card-title fw-bold">Robot Assembly</h5>
                  <p className="card-text text-secondary">Step-by-step guidance on assembling various types of robotic platforms.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card bg-secondary border-light text-white shadow-sm">
                <div className="card-body">
                  <h5 className="card-title fw-bold">Circuit Wiring</h5>
                  <p className="card-text text-secondary">Learn to connect sensors, actuators, and controllers with proper wiring techniques.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card bg-secondary border-light text-white shadow-sm">
                <div className="card-body">
                  <h5 className="card-title fw-bold">Sensor Integration</h5>
                  <p className="card-text text-secondary">Integrate and program different types of sensors to perceive the environment.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card bg-secondary border-light text-white shadow-sm">
                <div className="card-body">
                  <h5 className="card-title fw-bold">Actuator Control</h5>
                  <p className="card-text text-secondary">Control motors, servos, and other actuators to make your robot move and interact.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center mt-5">
          <Link to="/" className="btn btn-outline-light me-2">Back to Home</Link>
          <Link to="/courses" className="btn btn-primary">Explore Courses</Link>
        </div>
      </div>
    </div>
  );
};

export default HandsOnLearningPage;