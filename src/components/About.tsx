import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Cpu, Network, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Bot,
      title: 'AI Agents & Chatbots',
      description: 'Building intelligent conversational AI and autonomous agents for various business applications.'
    },
    {
      icon: Cpu,
      title: 'Trading Bots',
      description: 'Developing algorithmic trading systems with advanced market analysis and risk management.'
    },
    {
      icon: Network,
      title: 'SaaS Platforms',
      description: 'Creating scalable software-as-a-service solutions with modern web technologies.'
    },
    {
      icon: Sparkles,
      title: 'Full-Stack Development',
      description: 'End-to-end development from backend APIs to responsive frontend interfaces.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-prime-black to-prime-dark/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-asimovian text-4xl md:text-5xl font-bold text-prime-light mb-6"
          >
            About Me
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-prime-light to-prime-gray mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="font-secondary text-lg text-prime-gray leading-relaxed"
            >
              I'm <span className="text-prime-light font-semibold">Youness</span>, an AI Engineer specialized in building AI agents, chatbots, trading bots, and SaaS platforms. I love turning complex ideas into scalable products that solve real-world problems.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="font-secondary text-lg text-prime-gray leading-relaxed"
            >
              With expertise in both AI/ML and full-stack development, I bridge the gap between cutting-edge artificial intelligence and practical, user-friendly applications. My work spans from intelligent automation systems to sophisticated trading algorithms.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="font-secondary text-lg text-prime-gray leading-relaxed"
            >
              I'm passionate about creating AI solutions that are not just technically impressive, but genuinely useful and accessible. Every project is an opportunity to push the boundaries of what's possible with intelligent systems.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <a
                href="#projects"
                className="inline-flex items-center font-secondary font-semibold text-prime-light hover:text-white transition-colors duration-300 group"
              >
                Explore My Projects
                <Sparkles className="ml-2 w-5 h-5 group-hover:animate-pulse" />
              </a>
            </motion.div>
          </div>

          {/* Right side - Feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-prime-dark/30 backdrop-blur-sm border border-prime-gray/20 rounded-xl p-6 hover:bg-prime-dark/50 hover:border-prime-light/30 transition-all duration-300 group"
              >
                <feature.icon className="w-8 h-8 text-prime-light mb-4 group-hover:animate-pulse" />
                <h3 className="font-asimovian text-lg font-semibold text-prime-light mb-2">
                  {feature.title}
                </h3>
                <p className="font-secondary text-sm text-prime-gray leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;