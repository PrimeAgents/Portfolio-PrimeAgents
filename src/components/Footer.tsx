import React from 'react';
import { Github, Bot } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-prime-black border-t border-prime-dark/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Logo and name */}
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-prime-light to-prime-gray rounded-xl">
              <Bot className="w-6 h-6 text-prime-black" />
            </div>
            <div>
              <h3 className="font-asimovian text-xl font-bold text-prime-light">
                PrimeAgents
              </h3>
              <p className="font-secondary text-sm text-prime-gray">
                AI & IT Solutions Agency
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center space-x-8">
            <a
              href="https://github.com/PrimeAgents"
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
            © {new Date().getFullYear()} PrimeAgents. Building the future with intelligent AI solutions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;