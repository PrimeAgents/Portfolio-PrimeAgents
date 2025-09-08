import React from 'react';
import { Mail, MessageSquare, Send, Github } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-prime-black to-prime-dark/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-asimovian text-4xl md:text-5xl font-bold text-prime-light mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-prime-light to-prime-gray mx-auto mb-8"></div>
          <p className="font-secondary text-lg text-prime-gray max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge AI solutions? Let's discuss how PrimeAgents can help you build the future.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Contact info */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="font-asimovian text-2xl font-bold text-prime-light mb-6">
                  Let's Build Something Amazing
                </h3>
                <p className="font-secondary text-prime-gray leading-relaxed">
                  Whether you need AI agents for cybersecurity, automation solutions, or custom AI development, our team is ready to bring your vision to life.
                </p>
              </div>

              {/* Contact methods */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4 group">
                  <div className="p-3 bg-prime-dark/40 rounded-xl border border-prime-gray/20 group-hover:border-prime-light/30 transition-colors duration-300">
                    <Mail className="w-6 h-6 text-prime-light group-hover:animate-pulse" />
                  </div>
                  <div>
                    <p className="font-secondary text-prime-light font-semibold">Email</p>
                    <p className="font-secondary text-prime-gray">contact@primeagents.ai</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="p-3 bg-prime-dark/40 rounded-xl border border-prime-gray/20 group-hover:border-prime-light/30 transition-colors duration-300">
                    <Github className="w-6 h-6 text-prime-light group-hover:animate-pulse" />
                  </div>
                  <div>
                    <p className="font-secondary text-prime-light font-semibold">GitHub</p>
                    <a 
                      href="https://github.com/PrimeAgents" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-secondary text-prime-gray hover:text-prime-light transition-colors duration-300"
                    >
                      github.com/PrimeAgents
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Contact form */}
            <div className="bg-prime-dark/30 backdrop-blur-sm border border-prime-gray/20 rounded-2xl p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-secondary text-prime-light font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-prime-black/50 border border-prime-gray/30 rounded-xl text-prime-light placeholder-prime-gray/60 focus:border-prime-light/50 focus:outline-none transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-secondary text-prime-light font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-prime-black/50 border border-prime-gray/30 rounded-xl text-prime-light placeholder-prime-gray/60 focus:border-prime-light/50 focus:outline-none transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-secondary text-prime-light font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-prime-black/50 border border-prime-gray/30 rounded-xl text-prime-light placeholder-prime-gray/60 focus:border-prime-light/50 focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-prime-light to-prime-gray text-prime-black font-secondary font-semibold py-3 px-6 rounded-xl hover:from-prime-gray hover:to-prime-light transition-all duration-300 flex items-center justify-center group"
                >
                  Send Message
                  <Send className="w-5 h-5 ml-2 group-hover:animate-pulse" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;