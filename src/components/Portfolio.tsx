import React from 'react';
import { ExternalLink, Github, Shield, Brain, Mic, Users } from 'lucide-react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'Cybersecurity-AI-Agents',
      description: 'A comprehensive, modular platform for automating cybersecurity reconnaissance and reporting using a multi-agent system built on CrewAI.',
      language: 'Python',
      icon: Shield,
      link: 'https://github.com/PrimeAgents/Cybersecurity-AI-Agents',
      gradient: 'from-red-500/20 to-orange-500/20',
      borderGradient: 'from-red-500 to-orange-500'
    },
    {
      title: 'Notion-RAG-AIAgents',
      description: 'A Retrieval-Augmented Generation (RAG) agent that queries a Notion knowledge base to provide intelligent responses using AI models.',
      language: 'Python',
      icon: Brain,
      link: 'https://github.com/PrimeAgents/Notion-RAG-AIAgents',
      gradient: 'from-blue-500/20 to-purple-500/20',
      borderGradient: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Meeting-summarizer',
      description: 'An AI-powered meeting summarizer that processes audio or video meeting files and generates concise summaries, action items, and key points using advanced language models.',
      language: 'Python',
      icon: Mic,
      link: 'https://github.com/PrimeAgents/Meeting-summarizer',
      gradient: 'from-green-500/20 to-teal-500/20',
      borderGradient: 'from-green-500 to-teal-500'
    },
    {
      title: 'HR-Assistant',
      description: 'A full-stack application designed to streamline HR processes with an AI-powered assistant. It includes a Python backend and a modern React (Vite + TypeScript + Tailwind) frontend.',
      language: 'Python + React (Vite + TS + Tailwind)',
      icon: Users,
      link: 'https://github.com/PrimeAgents/HR-Assistant',
      gradient: 'from-pink-500/20 to-rose-500/20',
      borderGradient: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-prime-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-asimovian text-4xl md:text-5xl font-bold text-prime-light mb-6">
            Our Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-prime-light to-prime-gray mx-auto mb-8"></div>
          <p className="font-secondary text-lg text-prime-gray max-w-3xl mx-auto">
            Explore our cutting-edge AI solutions that are transforming industries and pushing the boundaries of what's possible with artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-prime-dark/40 to-prime-black/60 backdrop-blur-sm border border-prime-gray/20 rounded-2xl p-8 hover:border-prime-light/30 transition-all duration-500 hover:transform hover:scale-[1.02]"
            >
              {/* Background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon and Language */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${project.borderGradient} bg-opacity-20 group-hover:animate-pulse-glow`}>
                    <project.icon className="w-8 h-8 text-prime-light" />
                  </div>
                  <span className="font-secondary text-sm text-prime-gray bg-prime-dark/50 px-3 py-1 rounded-full">
                    {project.language}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-asimovian text-xl font-bold text-prime-light mb-4 group-hover:text-white transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="font-secondary text-prime-gray leading-relaxed mb-6 group-hover:text-prime-gray/90 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex items-center space-x-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center font-secondary font-semibold text-prime-light hover:text-white transition-colors duration-300 group/link"
                  >
                    <Github className="w-5 h-5 mr-2 group-hover/link:animate-pulse" />
                    View on GitHub
                    <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
                  </a>
                </div>
              </div>

              {/* Hover border effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.borderGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl`}></div>
            </div>
          ))}
        </div>

        {/* GitHub link */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/PrimeAgents"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center font-secondary font-semibold text-prime-gray hover:text-prime-light transition-colors duration-300 group"
          >
            <Github className="w-6 h-6 mr-3 group-hover:animate-pulse" />
            View All Projects on GitHub
            <ExternalLink className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;