import React from 'react';
import { Calendar } from 'lucide-react';
import Section from '../components/Section';

interface TimelineItem {
  id: number;
  title: string;
  organization: string;
  period: string;
  description: string;
  type: 'education' | 'experience';
}

const timelineItems: TimelineItem[] = [
  {
    id: 1,
    title: 'B.Tech in Artificial Intelligence and Machine Learning',
    organization: 'Kalasalingam University',
    period: '2022 - 2026',
    description: 'Currently pursuing my degree with a focus on AI/ML technologies and software development.',
    type: 'education'
  },
  {
    id: 2,
    title: 'Full Stack Web Development Intern',
    organization: 'Edu-Versity',
    period: 'Aug 2024 - Oct 2024',
    description: 'Completed hands-on training and internship focused on MERN stack development. Designed and developed full-stack web applications solving real-world problems with collaborative team efforts.',
    type: 'experience'
  },
  {
    id: 3,
    title: 'Java Programming Intern',
    organization: 'Codsoft',
    period: '2024',
    description: 'Successfully completed internship in Java programming, working on challenging projects and enhancing programming skills.',
    type: 'experience'
  }
];

const TimelineCard: React.FC<{ item: TimelineItem; index: number }> = ({ item, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`relative flex md:contents ${isEven ? 'flex-row-reverse' : ''}`}>
      <div className="col-start-1 col-end-2 mr-10 md:mx-auto relative">
        <div className="h-full w-6 flex items-center justify-center">
          <div className="h-full w-1 bg-blue-200 dark:bg-blue-900 pointer-events-none"></div>
        </div>
        <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 dark:bg-blue-400 shadow"></div>
      </div>
      
      <div 
        className={`bg-white dark:bg-gray-800 col-start-2 col-end-4 p-4 rounded-xl my-4 shadow-md w-full 
          ${isEven ? 'mr-auto md:mr-0 md:ml-auto' : 'ml-auto md:ml-0 md:mr-auto'}`}
      >
        <div className="flex flex-col md:flex-row justify-between mb-3">
          <div>
            <h3 className="font-bold text-gray-800 dark:text-white text-lg">{item.title}</h3>
            <p className="text-blue-600 dark:text-blue-400 font-medium">{item.organization}</p>
          </div>
          <div className="flex items-center mt-2 md:mt-0">
            <Calendar size={16} className="text-gray-500 dark:text-gray-400 mr-1" />
            <span className="text-sm text-gray-500 dark:text-gray-400">{item.period}</span>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
        <div 
          className={`absolute top-5 ${isEven ? 'left-0 -translate-x-full md:right-0 md:translate-x-full md:left-auto' : 'right-0 translate-x-full md:left-0 md:-translate-x-full md:right-auto'} 
            md:top-1/2 md:-translate-y-1/2 w-3 h-3 rotate-45 
            ${item.type === 'education' ? 'bg-blue-500 dark:bg-blue-400' : 'bg-teal-500 dark:bg-teal-400'}`}
        >
        </div>
      </div>
    </div>
  );
};

const Education: React.FC = () => {
  return (
    <Section
      id="education"
      title="Education & Experience"
      subtitle="My academic journey and professional experience"
      className="bg-gray-50 dark:bg-gray-900"
    >
      <div className="flex justify-center space-x-8 mb-8">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-blue-500 dark:bg-blue-400 mr-2"></div>
          <span className="text-gray-700 dark:text-gray-300">Education</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-teal-500 dark:bg-teal-400 mr-2"></div>
          <span className="text-gray-700 dark:text-gray-300">Experience</span>
        </div>
      </div>

      <div className="container">
        <div className="flex flex-col md:grid grid-cols-9">
          {timelineItems.map((item, index) => (
            <React.Fragment key={item.id}>
              {index % 2 === 0 ? (
                <>
                  <div className="hidden md:block col-span-4"></div>
                  <TimelineCard item={item} index={index} />
                </>
              ) : (
                <>
                  <TimelineCard item={item} index={index} />
                  <div className="hidden md:block col-span-4"></div>
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Education;