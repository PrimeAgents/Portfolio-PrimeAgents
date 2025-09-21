import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Zap, Shield, Brain } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-prime-black neural-bg">
      {/* Particle animation background */}
      <ParticleBackground />
      
      {/* Subtle overlay for better text readability */}
      <div className="absolute inset-0 bg-prime-black/20 z-5"></div>
      
      {/* Floating AI icons */}
      <div className="absolute top-20 left-10 animate-float z-10">
        <Bot className="w-8 h-8 text-prime-light/30" />
      </div>
      <div className="absolute top-40 right-20 animate-float z-10" style={{ animationDelay: '1s' }}>
        <Brain className="w-6 h-6 text-prime-gray/40" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float z-10" style={{ animationDelay: '2s' }}>
        <Zap className="w-7 h-7 text-prime-light/25" />
      </div>
      <div className="absolute bottom-20 right-10 animate-float z-10" style={{ animationDelay: '0.5s' }}>
        <Shield className="w-8 h-8 text-prime-gray/30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
        <div className="space-y-8">
          {/* Profile Photo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-8"
          >
            <div className="w-32 h-32 bg-gradient-to-r from-prime-light to-prime-gray rounded-full flex items-center justify-center text-6xl font-asimovian font-bold text-prime-black shadow-2xl">
              Y
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-asimovian text-5xl md:text-7xl lg:text-8xl font-bold"
          >
            <span className="bg-gradient-to-r from-prime-light via-prime-gray to-prime-light bg-clip-text text-transparent animate-gradient">
              Youness
            </span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-secondary text-xl md:text-2xl lg:text-3xl text-prime-gray max-w-4xl mx-auto leading-relaxed"
          >
            <span className="text-prime-light font-semibold">AI Engineer</span> |{' '}
            <span className="text-prime-light font-semibold">Full-Stack Developer</span> |{' '}
            <span className="text-prime-light font-semibold">Agentic AI Builder</span>
          </motion.p>
          
          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-secondary text-lg text-prime-gray/80 max-w-2xl mx-auto"
          >
            I build intelligent systems that combine AI, automation, and clean engineering.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
          >
            <a
              href="#projects"
              className="glow-border group"
            >
              <div className="bg-prime-black px-8 py-4 rounded-xl font-secondary font-semibold text-prime-light hover:text-white transition-all duration-300 group-hover:bg-prime-dark/20">
                View My Projects
              </div>
            </a>
            
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-prime-gray/30 rounded-xl font-secondary font-semibold text-prime-gray hover:text-prime-light hover:border-prime-light/50 transition-all duration-300 hover:bg-prime-light/5"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;