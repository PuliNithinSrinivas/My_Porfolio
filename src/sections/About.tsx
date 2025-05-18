import React from 'react';
import { Briefcase, GraduationCap, User, Heart } from 'lucide-react';
import Section from '../components/Section';

const About: React.FC = () => {
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Get to know me better and what drives my passion for development"
      className="bg-white dark:bg-gray-800"
    >
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <div className="relative">
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-blue-500 dark:border-blue-400 mx-auto">
              <img
                src="https://i.ibb.co/7dM3BN4v/Nithinprofile.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500 dark:bg-blue-400 rounded-full flex items-center justify-center text-white">
              <span className="font-bold text-xl">1+ Yr</span>
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2 space-y-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            A dedicated student with a passion for Java Development and AI/ML
          </h3>
          
          <p className="text-gray-600 dark:text-gray-400">
            I'm currently pursuing my degree in Artificial Intelligence and Machine Learning at Kalasalingam University. 
            My journey in the tech world began with Java programming, and I've since expanded my skills to include web development 
            and AI/ML technologies.
          </p>
          
          <p className="text-gray-600 dark:text-gray-400">
            I believe in continuous learning and staying updated with the latest technologies. 
            When I'm not coding, you can find me solving DSA problems, exploring new technologies, or 
            working on personal projects.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
              <Briefcase className="w-6 h-6 text-blue-500 dark:text-blue-400" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Experience</p>
                <p className="font-medium text-gray-900 dark:text-white">1+ Year</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
              <GraduationCap className="w-6 h-6 text-blue-500 dark:text-blue-400" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Education</p>
                <p className="font-medium text-gray-900 dark:text-white">B.Tech AIML</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
              <User className="w-6 h-6 text-blue-500 dark:text-blue-400" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                <p className="font-medium text-gray-900 dark:text-white">Madurai, India</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
              <Heart className="w-6 h-6 text-blue-500 dark:text-blue-400" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Interests</p>
                <p className="font-medium text-gray-900 dark:text-white">Java, AI/ML</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;