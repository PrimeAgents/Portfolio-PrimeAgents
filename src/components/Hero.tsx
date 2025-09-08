import React from 'react';
import { Bot, Zap, Shield, Brain } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-prime-black neural-bg">
      {/* Animated background elements */}
      <div className="absolute inset-0 circuit-pattern opacity-20"></div>
      
      {/* Floating AI icons */}
      <div className="absolute top-20 left-10 animate-float">
        <Bot className="w-8 h-8 text-prime-light/30" />
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <Brain className="w-6 h-6 text-prime-gray/40" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <Zap className="w-7 h-7 text-prime-light/25" />
      </div>
      <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '0.5s' }}>
        <Shield className="w-8 h-8 text-prime-gray/30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          {/* Main heading */}
          <h1 className="font-asimovian text-5xl md:text-7xl lg:text-8xl font-bold">
            <span className="bg-gradient-to-r from-prime-light via-prime-gray to-prime-light bg-clip-text text-transparent animate-gradient">
              PrimeAgents
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="font-secondary text-xl md:text-2xl lg:text-3xl text-prime-gray max-w-4xl mx-auto leading-relaxed">
            Building the Future with{' '}
            <span className="text-prime-light font-semibold">Intelligent AI Agents</span>
            {' '}& Advanced IT Solutions
          </p>
          
          {/* Description */}
          <p className="font-secondary text-lg text-prime-gray/80 max-w-2xl mx-auto">
            We specialize in creating powerful, autonomous AI systems that revolutionize 
            cybersecurity, automation, and intelligent decision-making processes.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <a
              href="#portfolio"
              className="glow-border group"
            >
              <div className="bg-prime-black px-8 py-4 rounded-xl font-secondary font-semibold text-prime-light hover:text-white transition-all duration-300 group-hover:bg-prime-dark/20">
                Explore Our Work
              </div>
            </a>
            
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-prime-gray/30 rounded-xl font-secondary font-semibold text-prime-gray hover:text-prime-light hover:border-prime-light/50 transition-all duration-300 hover:bg-prime-light/5"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;