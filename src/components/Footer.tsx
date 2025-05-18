import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-blue-400">Portfolio</h2>
            <p className="text-gray-400 mt-2 max-w-md">
              A showcase of my projects, skills, and journey as a developer.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
            
            <p className="flex items-center text-gray-400 text-sm">
              <span>© {currentYear} PULI NITHIN SRINIVAS. All rights reserved.</span>
              <span className="mx-1">•</span>
              <span>Made with</span>
              <Heart size={14} className="mx-1 text-red-500" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;