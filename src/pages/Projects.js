import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { title: 'Bruin Mates', description: 'A MERN stack web app for UCLA students.' },
  { title: 'Precision Revision', description: 'Optimized file revision system.' },
  { title: 'Blink Translator', description: 'Computer vision Morse code translator.' },
];

const Projects = () => (
  <section id="projects" className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="max-w-5xl">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="p-4 bg-white shadow-lg rounded-lg"
          >
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
