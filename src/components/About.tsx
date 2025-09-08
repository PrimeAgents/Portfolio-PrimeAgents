import React from 'react';
import { Bot, Cpu, Network, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Bot,
      title: 'AI Agent Development',
      description: 'Creating intelligent, autonomous agents that learn and adapt to complex environments.'
    },
    {
      icon: Cpu,
      title: 'Advanced Automation',
      description: 'Streamlining processes with cutting-edge AI and machine learning technologies.'
    },
    {
      icon: Network,
      title: 'System Integration',
      description: 'Seamlessly connecting AI solutions with existing infrastructure and workflows.'
    },
    {
      icon: Sparkles,
      title: 'Innovation Focus',
      description: 'Pushing the boundaries of what\'s possible with artificial intelligence and IT.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-prime-black to-prime-dark/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-asimovian text-4xl md:text-5xl font-bold text-prime-light mb-6">
            About the Agency
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-prime-light to-prime-gray mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <p className="font-secondary text-lg text-prime-gray leading-relaxed">
              At <span className="text-prime-light font-semibold">PrimeAgents</span>, we are pioneers in the realm of artificial intelligence and advanced IT solutions. Our mission is to harness the transformative power of AI to create intelligent systems that not only solve today's challenges but anticipate tomorrow's opportunities.
            </p>
            
            <p className="font-secondary text-lg text-prime-gray leading-relaxed">
              We specialize in developing sophisticated AI agents that operate autonomously, learn continuously, and deliver exceptional results across diverse domains including cybersecurity, process automation, and intelligent data analysis.
            </p>
            
            <p className="font-secondary text-lg text-prime-gray leading-relaxed">
              Our team combines deep technical expertise with innovative thinking to build solutions that are not just functional, but revolutionary. Every project we undertake is an opportunity to push the boundaries of what's possible with artificial intelligence.
            </p>

            <div className="pt-6">
              <a
                href="#portfolio"
                className="inline-flex items-center font-secondary font-semibold text-prime-light hover:text-white transition-colors duration-300 group"
              >
                Discover Our Projects
                <Sparkles className="ml-2 w-5 h-5 group-hover:animate-pulse" />
              </a>
            </div>
          </div>

          {/* Right side - Feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-prime-dark/30 backdrop-blur-sm border border-prime-gray/20 rounded-xl p-6 hover:bg-prime-dark/50 hover:border-prime-light/30 transition-all duration-300 group"
              >
                <feature.icon className="w-8 h-8 text-prime-light mb-4 group-hover:animate-pulse" />
                <h3 className="font-asimovian text-lg font-semibold text-prime-light mb-2">
                  {feature.title}
                </h3>
                <p className="font-secondary text-sm text-prime-gray leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;