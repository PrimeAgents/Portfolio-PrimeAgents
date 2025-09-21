import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Star, GitFork } from 'lucide-react';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
}

const Projects: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Featured repositories (pinned repos)
  const featuredRepos = [
    'Interoccupational-Pension-Fund-AI-System',
    'Financial-AI-System',
    'AI-Assurance-System',
    'Cybersecurity-AI-Agents',
    'HR-AI-Assistant',
    'Meeting-AI-Summarizer'
  ];

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await fetch('https://api.github.com/users/ich-youness/repos?sort=updated&per_page=50');
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const data = await response.json();
        
        // Filter out forks and sort by featured repos first
        const filteredRepos = data
          .filter((repo: Repository) => !repo.name.includes('fork'))
          .sort((a: Repository, b: Repository) => {
            const aIsFeatured = featuredRepos.includes(a.name);
            const bIsFeatured = featuredRepos.includes(b.name);
            
            if (aIsFeatured && !bIsFeatured) return -1;
            if (!aIsFeatured && bIsFeatured) return 1;
            
            // If both are featured, sort by the order in featuredRepos array
            if (aIsFeatured && bIsFeatured) {
              return featuredRepos.indexOf(a.name) - featuredRepos.indexOf(b.name);
            }
            
            // For non-featured repos, sort by stars then by updated date
            return b.stargazers_count - a.stargazers_count;
          });
        
        setRepositories(filteredRepos);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchRepositories();
  }, []);

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      Python: 'from-blue-500 to-blue-600',
      JavaScript: 'from-yellow-400 to-yellow-500',
      TypeScript: 'from-blue-600 to-blue-700',
      React: 'from-cyan-400 to-cyan-500',
      'Jupyter Notebook': 'from-orange-400 to-orange-500',
      HTML: 'from-red-500 to-red-600',
      CSS: 'from-blue-400 to-blue-500',
      Java: 'from-red-600 to-red-700',
      'C++': 'from-blue-700 to-blue-800',
      Go: 'from-cyan-500 to-cyan-600',
      Rust: 'from-orange-600 to-orange-700',
    };
    return colors[language] || 'from-gray-500 to-gray-600';
  };

  if (loading) {
    return (
      <section id="projects" className="py-20 bg-prime-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-12 bg-prime-dark/30 rounded-lg w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-prime-dark/20 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="py-20 bg-prime-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-asimovian text-4xl md:text-5xl font-bold text-prime-light mb-6">
              My Projects
            </h2>
            <p className="text-red-400">Error loading repositories: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  const featuredRepositories = repositories.filter(repo => featuredRepos.includes(repo.name));
  const otherRepositories = repositories.filter(repo => !featuredRepos.includes(repo.name)).slice(0, 8);

  return (
    <section id="projects" className="py-20 bg-prime-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-asimovian text-4xl md:text-5xl font-bold text-prime-light mb-6"
          >
            My Projects
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-prime-light to-prime-gray mx-auto mb-8"></div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-secondary text-lg text-prime-gray max-w-3xl mx-auto"
          >
            Here are some of my featured projects showcasing AI systems, automation tools, and full-stack applications.
          </motion.p>
        </div>

        {/* Featured Projects */}
        {featuredRepositories.length > 0 && (
          <div className="mb-16">
            <motion.h3 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="font-asimovian text-2xl font-bold text-prime-light mb-8 flex items-center"
            >
              <Star className="w-6 h-6 mr-2 text-yellow-400" />
              Featured Projects
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredRepositories.map((repo, index) => (
                <motion.div
                  key={repo.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-gradient-to-br from-prime-dark/40 to-prime-black/60 backdrop-blur-sm border-2 border-yellow-400/30 rounded-2xl p-6 hover:border-yellow-400/50 transition-all duration-500 hover:transform hover:scale-[1.02]"
                >
                  {/* Featured badge */}
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-prime-black text-xs font-bold px-2 py-1 rounded-full">
                    FEATURED
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="font-asimovian text-lg font-bold text-prime-light group-hover:text-white transition-colors duration-300 line-clamp-2">
                        {repo.name.replace(/-/g, ' ')}
                      </h4>
                      <div className="flex items-center space-x-2 text-prime-gray/60 text-sm">
                        <Star className="w-4 h-4" />
                        <span>{repo.stargazers_count}</span>
                        <GitFork className="w-4 h-4" />
                        <span>{repo.forks_count}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="font-secondary text-prime-gray leading-relaxed mb-4 group-hover:text-prime-gray/90 transition-colors duration-300 line-clamp-3">
                      {repo.description || 'No description available'}
                    </p>

                    {/* Language and Topics */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {repo.language && (
                        <span className={`inline-block bg-gradient-to-r ${getLanguageColor(repo.language)} text-white text-xs font-semibold px-2 py-1 rounded-full`}>
                          {repo.language}
                        </span>
                      )}
                      {repo.topics?.slice(0, 2).map((topic) => (
                        <span key={topic} className="inline-block bg-prime-dark/50 text-prime-gray text-xs px-2 py-1 rounded-full">
                          {topic}
                        </span>
                      ))}
                    </div>

                    {/* Link */}
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center font-secondary font-semibold text-yellow-400 hover:text-yellow-300 transition-colors duration-300 group/link"
                    >
                      <Github className="w-5 h-5 mr-2 group-hover/link:animate-pulse" />
                      View Project
                      <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Other Projects */}
        {otherRepositories.length > 0 && (
          <div>
            <motion.h3 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="font-asimovian text-2xl font-bold text-prime-light mb-8"
            >
              Other Projects
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherRepositories.map((repo, index) => (
                <motion.div
                  key={repo.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-gradient-to-br from-prime-dark/40 to-prime-black/60 backdrop-blur-sm border border-prime-gray/20 rounded-2xl p-6 hover:border-prime-light/30 transition-all duration-500 hover:transform hover:scale-[1.02]"
                >
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="font-asimovian text-lg font-bold text-prime-light group-hover:text-white transition-colors duration-300 line-clamp-2">
                        {repo.name.replace(/-/g, ' ')}
                      </h4>
                      <div className="flex items-center space-x-2 text-prime-gray/60 text-sm">
                        <Star className="w-4 h-4" />
                        <span>{repo.stargazers_count}</span>
                        <GitFork className="w-4 h-4" />
                        <span>{repo.forks_count}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="font-secondary text-prime-gray leading-relaxed mb-4 group-hover:text-prime-gray/90 transition-colors duration-300 line-clamp-3">
                      {repo.description || 'No description available'}
                    </p>

                    {/* Language and Topics */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {repo.language && (
                        <span className={`inline-block bg-gradient-to-r ${getLanguageColor(repo.language)} text-white text-xs font-semibold px-2 py-1 rounded-full`}>
                          {repo.language}
                        </span>
                      )}
                      {repo.topics?.slice(0, 2).map((topic) => (
                        <span key={topic} className="inline-block bg-prime-dark/50 text-prime-gray text-xs px-2 py-1 rounded-full">
                          {topic}
                        </span>
                      ))}
                    </div>

                    {/* Link */}
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center font-secondary font-semibold text-prime-light hover:text-white transition-colors duration-300 group/link"
                    >
                      <Github className="w-5 h-5 mr-2 group-hover/link:animate-pulse" />
                      View Project
                      <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* GitHub link */}
        <div className="text-center mt-16">
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            href="https://github.com/ich-youness"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center font-secondary font-semibold text-prime-gray hover:text-prime-light transition-colors duration-300 group"
          >
            <Github className="w-6 h-6 mr-3 group-hover:animate-pulse" />
            View All Projects on GitHub
            <ExternalLink className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Projects;