import React from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-prime-black/90 backdrop-blur-md border-b border-prime-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/Logo-PrimeAgents-removebg-preview.jpg" 
              alt="PrimeAgents Logo" 
              className="h-10 w-auto"
            />
            <span className="font-asimovian text-xl font-bold text-prime-light">
              PrimeAgents
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-prime-gray hover:text-prime-light transition-colors duration-300">
              Home
            </a>
            <a href="#about" className="text-prime-gray hover:text-prime-light transition-colors duration-300">
              About
            </a>
            <a href="#portfolio" className="text-prime-gray hover:text-prime-light transition-colors duration-300">
              Portfolio
            </a>
            <a href="#contact" className="text-prime-gray hover:text-prime-light transition-colors duration-300">
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-prime-gray hover:text-prime-light transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-prime-dark/30">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#home" 
                className="text-prime-gray hover:text-prime-light transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="text-prime-gray hover:text-prime-light transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#portfolio" 
                className="text-prime-gray hover:text-prime-light transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </a>
              <a 
                href="#contact" 
                className="text-prime-gray hover:text-prime-light transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;