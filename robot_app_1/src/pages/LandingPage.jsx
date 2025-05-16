import React from 'react';
import './../index.css';
import { motion } from 'framer-motion';
import { Rocket, BrainCircuit, BookOpen, ChevronRight, Zap } from 'lucide-react';
// import { twMerge } from 'tailwind-merge';
// import { clsx, ClassValue } from 'clsx';
import { Link } from 'react-router-dom'; // Import Link for navigation
// import styles from './../components/LandingPage.module.css'; // You might have a module CSS, but Tailwind handles most
import 'bootstrap/dist/css/bootstrap.min.css';
import robo_400X300_1 from './../image/LandingPage/robo_400X300_1.jpg';
import robo_400X300_2 from './../image/LandingPage/robo_400X300_2.jpg';
import robo_400X300_3 from './../image/LandingPage/robo_400X300_3.jpg';

// Utility function for combining class names
// function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs));
// }

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

// Sample robot data (replace with actual images and data)
const robots = [
  { name: 'Bot-1', imageUrl: robo_400X300_1, description: 'Beginner-friendly robot for learning the basics.' },
  { name: 'Bot-2', imageUrl: robo_400X300_2, description: 'Advanced robot with AI capabilities.' },
  { name: 'Bot-3', imageUrl: robo_400X300_3, description: 'Customizable robot for research and development.' },
];

// Sample testimonials
const testimonials = [
  { name: 'Alice', quote: 'This program changed my life! I never thought I could build robots.', image: 'https://placehold.co/50x50/EEE/31343C' },
  { name: 'Bob', quote: 'The community is amazing.  So much support and knowledge.', image: 'https://placehold.co/50x50/EEE/31343C' },
  { name: 'Charlie', quote: 'The hands-on approach is the best way to learn. Highly recommended!', image: 'https://placehold.co/50x50/EEE/31343C' },
];

// Sample FAQs
const faqs = [
  { question: 'What experience level is required?', answer: 'No prior experience is necessary. We have courses for all levels.' },
  { question: 'What software do we use?', answer: 'We use a variety of open-source tools, including ROS and Python.' },
  { question: 'Do I get to keep the robot?', answer: 'Yes, the robot is yours to keep and continue learning with.' },
  { question: 'Is there a physical location?', answer: 'Currently, our program is primarily online, but we have local meetups.' },
];

const LandingPage = () => {
  return (
    <div className="min-vh-100 bg-dark text-white d-flex flex-column">
  {/* Hero Section */}
  <section className="flex-grow-1 d-flex align-items-center justify-content-center p-4 p-md-5">
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="text-center"
    >
      <motion.h1
        variants={itemVariants}
        className="display-3 fw-bold bg-gradient bg-opacity-75 text-white"
        style={{
          backgroundImage: 'linear-gradient(to right, #60A5FA, #A78BFA)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Igniting Curiosity, Building Futures
      </motion.h1>
      <motion.p
        variants={itemVariants}
        className="lead text-secondary mx-auto"
        style={{ maxWidth: '42rem' }}
      >
        Empowering the next generation with hands-on robotics and AI learning experiences.
      </motion.p>
      <motion.div variants={itemVariants}>
        <Link
          to="/signup"
          className="btn btn-primary btn-lg d-inline-flex align-items-center gap-2 fw-semibold"
        >
          <Rocket className="me-2" />
          Get Started
          <ChevronRight className="ms-2" />
        </Link>
      </motion.div>
    </motion.div>
  </section>

  {/* Features Section */}
  <section className="bg-dark py-5">
    <div className="container">
      <h2 className="text-center text-white mb-5 display-5 fw-bold">
        Key Features
      </h2>
      <div className="row g-4">
        {/* Feature Cards */}
        {[
          {
            title: "Hands-on Learning",
            icon: <BrainCircuit size={48} className="text-primary" />,
            text: "Build and program your own robots. No simulations, real hardware.",
            btn: <Link to="/hands-on-learning" className="btn btn-primary mt-auto">Learn More</Link>
          },
          {
            title: "Comprehensive Curriculum",
            icon: <BookOpen size={48} className="text-info" />,
            text: "From the basics to advanced AI, learn at your own pace.",
            btn: <Link to="/courses" className="btn btn-info mt-auto">View Curriculum</Link>
          },
          {
            title: "Supportive Community",
            icon: <Rocket size={48} className="text-success" />,
            text: "Connect with fellow learners and expert mentors.",
            btn: <Link to="/join-community" className="btn btn-success mt-auto">Join Community</Link>
          }
        ].map((item, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <div className="card h-100 text-white bg-secondary border-light">
              <div className="card-body d-flex flex-column">
                <div className="mb-3">{item.icon}</div>
                <h5 className="card-title fw-bold">{item.title}</h5>
                <p className="card-text flex-grow-1">{item.text}</p>
                {item.btn}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Our Robots Section */}
  <section className="py-5">
    <div className="container">
      <h2 className="text-center text-white mb-5 display-5 fw-bold"
        style={{
          backgroundImage: 'linear-gradient(to right, #60A5FA, #A78BFA)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
        Our Robots
      </h2>
      <div className="row g-4">
        {robots.map((robot, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <div className="card bg-transparent text-white border-light shadow-sm h-100">
              <img style={{ maxWidth: '400px', maxHeight: '300px', width: 'auto', height: 'auto', objectFit: 'contain' }} src={robot.imageUrl} alt={robot.name} className="card-img-top rounded" />
              <div className="card-body d-flex flex-column">
                <h3 className="h5 fw-bold">{robot.name}</h3>
                <p className="text-secondary flex-grow-1">{robot.description}</p>
                <button className="btn btn-outline-light mt-3">Explore {robot.name}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Testimonials Section */}
  <section className="bg-secondary bg-opacity-75 py-5">
    <div className="container">
      <h2 className="text-center text-white mb-5 display-5 fw-bold"
        style={{
          backgroundImage: 'linear-gradient(to right, #A78BFA, #60A5FA)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
        What Our Learners Say
      </h2>
      <div className="row g-4">
        {testimonials.map((testimonial, index) => (
          <div className="col-md-4" key={index}>
            <div className="card bg-transparent text-white border-light shadow-sm text-center h-100">
              <div className="card-body d-flex flex-column align-items-center">
                <img src={testimonial.image} alt={testimonial.name} className="rounded-circle mb-3" width={64} height={64} />
                <p className="fst-italic text-secondary">"{testimonial.quote}"</p>
                <h5 className="fw-semibold mt-3">- {testimonial.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* FAQ Section */}
  <section className="py-5">
    <div className="container">
      <h2 className="text-center text-white mb-5 display-5 fw-bold"
        style={{
          backgroundImage: 'linear-gradient(to right, #60A5FA, #A78BFA)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
        Frequently Asked Questions
      </h2>
      <div className="accordion" id="faqAccordion">
        {faqs.map((faq, index) => (
          <div className="accordion-item bg-dark border-light text-white" key={index}>
            <h2 className="accordion-header" id={`faqHeading-${index}`}>
              <button className="accordion-button bg-dark text-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#faqCollapse-${index}`}>
                <Zap className="me-2" />
                {faq.question}
              </button>
            </h2>
            <div id={`faqCollapse-${index}`} className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Footer */}
  <footer className="py-4 text-center text-secondary border-top border-light mt-auto">
    <p>&copy; {new Date().getFullYear()} Robotics Learning Project. All rights reserved.</p>
  </footer>
</div>

  );
};

export default LandingPage;