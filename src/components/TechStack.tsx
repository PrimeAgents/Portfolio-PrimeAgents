import React from 'react';
import { motion } from 'framer-motion';

const TechStack: React.FC = () => {
  const technologies = [
    {
      name: 'Python',
      icon: '🐍',
      description: 'AI/ML, Backend Development',
      color: 'from-blue-500 to-yellow-500'
    },
    {
      name: 'FastAPI',
      icon: '⚡',
      description: 'High-performance APIs',
      color: 'from-green-500 to-teal-500'
    },
    {
      name: 'Django',
      icon: '🎯',
      description: 'Web Framework',
      color: 'from-green-600 to-green-700'
    },
    {
      name: 'React',
      icon: '⚛️',
      description: 'Frontend Development',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      name: 'Next.js',
      icon: '▲',
      description: 'Full-stack React Framework',
      color: 'from-gray-700 to-gray-900'
    },
    {
      name: 'PostgreSQL',
      icon: '🐘',
      description: 'Database Management',
      color: 'from-blue-600 to-blue-800'
    },
    {
      name: 'Docker',
      icon: '🐳',
      description: 'Containerization',
      color: 'from-blue-400 to-blue-600'
    },
    {
      name: 'TensorFlow',
      icon: '🧠',
      description: 'Machine Learning',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="tech-stack" className="py-20 bg-gradient-to-b from-prime-black to-prime-dark/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-asimovian text-4xl md:text-5xl font-bold text-prime-light mb-6"
          >
            Tech Stack
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-prime-light to-prime-gray mx-auto mb-8"></div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-secondary text-lg text-prime-gray max-w-3xl mx-auto"
          >
            Technologies and tools I use to build intelligent systems and scalable applications.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-prime-dark/30 backdrop-blur-sm border border-prime-gray/20 rounded-2xl p-6 hover:bg-prime-dark/50 hover:border-prime-light/30 transition-all duration-300 text-center"
            >
              {/* Background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>

                {/* Name */}
                <h3 className="font-asimovian text-lg font-bold text-prime-light mb-2 group-hover:text-white transition-colors duration-300">
                  {tech.name}
                </h3>

                {/* Description */}
                <p className="font-secondary text-sm text-prime-gray group-hover:text-prime-gray/90 transition-colors duration-300">
                  {tech.description}
                </p>
              </div>

              {/* Hover border effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl`}></div>
            </motion.div>
          ))}
        </div>

        {/* Additional skills */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="font-asimovian text-2xl font-bold text-prime-light mb-6">
            Additional Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Machine Learning', 'Deep Learning', 'Natural Language Processing',
              'Computer Vision', 'API Development', 'Database Design',
              'Cloud Computing', 'DevOps', 'Agile Development'
            ].map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-prime-dark/40 border border-prime-gray/30 text-prime-gray px-4 py-2 rounded-full font-secondary text-sm hover:border-prime-light/50 hover:text-prime-light transition-all duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;