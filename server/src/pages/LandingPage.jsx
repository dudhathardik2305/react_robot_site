import React from 'react';
import './../index.css';
// import { Button } from '@/components/ui/button';
import Button from '../components/ui/button';
import { motion } from 'framer-motion';
import { Rocket, BrainCircuit, BookOpen, ChevronRight, Zap  } from 'lucide-react';
// import { cn } from "@/lib/utils"
import classNames from 'classnames';

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
    { name: 'Bot-1', imageUrl: 'https://placehold.co/400x300/EEE/31343C', description: 'Beginner-friendly robot for learning the basics.' },
    { name: 'Bot-2', imageUrl: 'https://placehold.co/400x300/EEE/31343C', description: 'Advanced robot with AI capabilities.' },
    { name: 'Bot-3', imageUrl: 'https://placehold.co/400x300/EEE/31343C', description: 'Customizable robot for research and development.' },
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
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white flex flex-col">
            {/* Hero Section */}
            <section className="flex-1 flex items-center justify-center p-4 md:p-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-center space-y-6"
                >
                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
                    >
                        Igniting Curiosity, Building Futures
                    </motion.h1>
                    <motion.p
                        variants={itemVariants}
                        className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
                    >
                        Empowering the next generation with hands-on robotics and AI learning experiences.
                    </motion.p>
                    <motion.div variants={itemVariants}>
                        <Button
                            variant="default"
                            size="lg"
                            className={classNames(
                                "bg-gradient-to-r from-blue-500 to-purple-500",
                                "text-white px-6 py-3 md:px-8 md:py-4 rounded-full",
                                "shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300",
                                "font-semibold text-lg md:text-xl",
                                "flex items-center gap-3"
                            )}
                        >
                            <Rocket className="w-6 h-6" />
                            Learn More
                            <ChevronRight className="w-5 h-5" />
                        </Button>
                    </motion.div>
                </motion.div>
            </section>

            {/* Features Section */}
            <section className="bg-gray-800/50 py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                        Key Features
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Hands-on Learning Card */}
                        <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/10 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                            <BrainCircuit className="w-12 h-12 text-blue-400 mb-4" />
                            <h3 className="text-2xl font-semibold text-white mb-2">Hands-on Learning</h3>
                            <p className="text-gray-300">
                                Build and program your own robots.  No simulations, real hardware.
                            </p>
                        </div>
                        {/* Curriculum Card */}
                        <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/10 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                            <BookOpen className="w-12 h-12 text-purple-400 mb-4" />
                            <h3 className="text-2xl font-semibold text-white mb-2">Comprehensive Curriculum</h3>
                            <p className="text-gray-300">
                                From the basics to advanced AI, learn at your own pace.
                            </p>
                        </div>
                        {/* Community Card */}
                        <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/10 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                            <Rocket className="w-12 h-12 text-emerald-400 mb-4" />
                            <h3 className="text-2xl font-semibold text-white mb-2">Supportive Community</h3>
                            <p className="text-gray-300">
                                Connect with fellow learners and expert mentors.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Robots Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                        Our Robots
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {robots.map((robot, index) => (
                            <div
                                key={index}
                                className="bg-white/5 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/10 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] flex flex-col"
                            >
                                <img src={robot.imageUrl} alt={robot.name} className="rounded-md mb-4" />
                                <h3 className="text-2xl font-semibold text-white mb-2">{robot.name}</h3>
                                <p className="text-gray-300 flex-1">{robot.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="bg-gray-800/50 py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                        What Our Learners Say
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-white/5 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/10 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] flex flex-col items-center text-center"
                            >
                                <img src={testimonial.image} alt={testimonial.name} className="rounded-full w-16 h-16 mb-4" />
                                <p className="text-gray-300 italic mb-4">"{testimonial.quote}"</p>
                                <h4 className="text-lg font-semibold text-white">- {testimonial.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white/5 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/10"
                            >
                                <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                                    <Zap className='w-5 h-5'/> {faq.question}
                                </h3>
                                <p className="text-gray-300">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-6 md:py-8 text-center text-gray-400 border-t border-white/10">
                <p>&copy; {new Date().getFullYear()} Robotics Learning Project. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;
