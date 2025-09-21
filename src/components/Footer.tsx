import React from 'react';
import { Github, User, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-prime-black border-t border-prime-dark/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Logo and name */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-prime-light to-prime-gray rounded-xl flex items-center justify-center">
              <span className="font-asimovian text-prime-black font-bold text-lg">Y</span>
            </div>
            <div>
              <h3 className="font-asimovian text-xl font-bold text-prime-light">
                Youness
              </h3>
              <p className="font-secondary text-sm text-prime-gray">
                AI Engineer & Full-Stack Developer
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center space-x-8">
            <a
              href="https://linkedin.com/in/youness-ai-engineer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-prime-gray hover:text-prime-light transition-colors duration-300 group"
            >
              <Linkedin className="w-5 h-5 group-hover:animate-pulse" />
              <span className="font-secondary">LinkedIn</span>
            </a>
            <a
              href="https://github.com/ich-youness"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-prime-gray hover:text-prime-light transition-colors duration-300 group"
            >
              <Github className="w-5 h-5 group-hover:animate-pulse" />
              <span className="font-secondary">GitHub</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-prime-dark/30 text-center">
          <p className="font-secondary text-prime-gray/60">
            © {new Date().getFullYear()} Youness. Building intelligent systems with AI and clean engineering.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;