import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  codeUrl: string;
  category: 'java' | 'web' | 'aiml';
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Football Analysis',
    description: 'A comprehensive football analysis project using Python and Machine Learning algorithms to analyze player performance and predict match outcomes.',
    image: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['Python', 'Machine Learning', 'Data Analysis'],
    demoUrl: '#',
    codeUrl: 'https://github.com/PuliNithinSrinivas/Football-Analysis',
    category: 'aiml'
  },
  {
    id: 2,
    title: 'AI Chatbot',
    description: 'An intelligent chatbot application built with Java and NLP capabilities, featuring a mobile-friendly interface and natural language understanding.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['Java', 'NLP', 'Mobile Development'],
    demoUrl: '#',
    codeUrl: '#',
    category: 'java'
  },
  {
    id: 3,
    title: 'Coming Soon: Web Project',
    description: 'An exciting web development project currently in development. Check back soon for updates!',
    image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    demoUrl: '#',
    codeUrl: '#',
    category: 'web'
  }
];

type Category = 'all' | 'java' | 'web' | 'aiml';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative overflow-hidden h-48">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span 
              key={tag} 
              className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <a 
            href={project.demoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
          >
            <ExternalLink size={16} />
            <span>Live Demo</span>
          </a>
          <a 
            href={project.codeUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
          >
            <Github size={16} />
            <span>Source Code</span>
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'java', name: 'Java Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'aiml', name: 'AI/ML Projects' }
  ];

  return (
    <Section
      id="projects"
      title="My Projects"
      subtitle="A collection of my recent work and personal projects"
      className="bg-white dark:bg-gray-800"
    >
      <div className="flex justify-center mb-8">
        <div className="inline-flex p-1 bg-gray-200 dark:bg-gray-700 rounded-lg">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id as Category)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeCategory === category.id
                  ? 'bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;