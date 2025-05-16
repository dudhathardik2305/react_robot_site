import React from 'react';
import './../index.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const CoursePage = () => {
  // Sample course data (replace with your actual data)
  const courses = [
    {
      id: 1,
      title: 'Introduction to Robotics',
      description: 'Learn the fundamental concepts of robotics, including mechanics, electronics, and programming.',
      duration: '8 weeks',
      level: 'Beginner',
      image: 'https://placehold.co/600x400/EEE/31343C?text=Intro+Robotics',
      link: '/course/1',
    },
    {
      id: 2,
      title: 'Robot Programming with Python',
      description: 'Dive into programming robots using Python, covering topics like control, sensors, and actuators.',
      duration: '10 weeks',
      level: 'Intermediate',
      image: 'https://placehold.co/600x400/EEE/31343C?text=Python+Robotics',
      link: '/course/2',
    },
    {
      id: 3,
      title: 'Artificial Intelligence for Robotics',
      description: 'Explore AI techniques used in robotics, including machine learning, computer vision, and navigation.',
      duration: '12 weeks',
      level: 'Advanced',
      image: 'https://placehold.co/600x400/EEE/31343C?text=AI+for+Robotics',
      link: '/course/3',
    },
    {
      id: 4,
      title: 'Building Autonomous Robots',
      description: 'Hands-on course focused on designing, building, and programming fully autonomous robots.',
      duration: '14 weeks',
      level: 'Advanced',
      image: 'https://placehold.co/600x400/EEE/31343C?text=Autonomous+Robots',
      link: '/course/4',
    },
  ];

  return (
    <div className="bg-dark text-white py-5">
      <div className="container">
        <h1 className="text-center mb-5 display-4 fw-bold">Our Courses</h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {courses.map((course) => (
            <div className="col" key={course.id}>
              <div className="card bg-secondary border-light shadow-sm h-100">
                <img src={course.image} className="card-img-top" alt={course.title} style={{ height: '250px', objectFit: 'cover' }} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">{course.title}</h5>
                  <p className="card-text flex-grow-1">{course.description}</p>
                  <p className="card-text small text-muted">Duration: {course.duration}</p>
                  <p className="card-text small text-muted">Level: {course.level}</p>
                  <Link to={course.link} className="btn btn-primary mt-3">Learn More</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-5">
          <Link to="/" className="btn btn-outline-light">Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;