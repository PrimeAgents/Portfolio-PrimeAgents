import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Github, Linkedin, User, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-prime-black to-prime-dark/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-asimovian text-4xl md:text-5xl font-bold text-prime-light mb-6"
          >
            Get In Touch
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-prime-light to-prime-gray mx-auto mb-8"></div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-secondary text-lg text-prime-gray max-w-3xl mx-auto"
          >
            Ready to bring your AI project to life? Let's discuss how we can work together to build something amazing.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Contact info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h3 className="font-asimovian text-2xl font-bold text-prime-light mb-6">
                  Let's Build Something Amazing
                </h3>
                <p className="font-secondary text-prime-gray leading-relaxed">
                  Whether you need AI agents, trading bots, SaaS platforms, or custom AI development, I'm ready to bring your vision to life with cutting-edge technology and clean engineering.
                </p>
              </div>

              {/* Contact methods */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4 group">
                  <div className="p-3 bg-prime-dark/40 rounded-xl border border-prime-gray/20 group-hover:border-prime-light/30 transition-colors duration-300">
                    <Mail className="w-6 h-6 text-prime-light group-hover:animate-pulse" />
                  </div>
                  <div>
                    <p className="font-secondary text-prime-light font-semibold">Upwork</p>
                    <a 
                      href="https://www.upwork.com/freelancers/~01d9cb8461d264d355" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-secondary text-prime-gray hover:text-prime-light transition-colors duration-300"
                    >
                      View Profile
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="p-3 bg-prime-dark/40 rounded-xl border border-prime-gray/20 group-hover:border-prime-light/30 transition-colors duration-300">
                    <Linkedin className="w-6 h-6 text-prime-light group-hover:animate-pulse" />
                  </div>
                  <div>
                    <p className="font-secondary text-prime-light font-semibold">LinkedIn</p>
                    <a 
                      href="https://linkedin.com/in/youness-ai-engineer" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-secondary text-prime-gray hover:text-prime-light transition-colors duration-300"
                    >
                      Connect with me
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="p-3 bg-prime-dark/40 rounded-xl border border-prime-gray/20 group-hover:border-prime-light/30 transition-colors duration-300">
                    <Github className="w-6 h-6 text-prime-light group-hover:animate-pulse" />
                  </div>
                  <div>
                    <p className="font-secondary text-prime-light font-semibold">GitHub</p>
                    <a 
                      href="https://github.com/ich-youness" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-secondary text-prime-gray hover:text-prime-light transition-colors duration-300"
                    >
                      github.com/ich-youness
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right side - Contact form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-prime-dark/30 backdrop-blur-sm border border-prime-gray/20 rounded-2xl p-8"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
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
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;