import React, { useState } from 'react';
import Section from '../components/Section';

interface Skill {
  name: string;
  category: 'languages' | 'frameworks' | 'tools' | 'other';
}

const skills: Skill[] = [
  { name: 'Java', category: 'languages' },
  { name: 'JavaScript', category: 'languages' },
  { name: 'HTML', category: 'languages' },
  { name: 'CSS', category: 'languages' },
  { name: 'Spring', category: 'frameworks' },
  { name: 'React', category: 'frameworks' },
  { name: 'Git', category: 'tools' },
  { name: 'GitHub', category: 'tools' },
  { name: 'VS Code', category: 'tools' },
  { name: 'MS Word', category: 'tools' },
  { name: 'Data Structures', category: 'other' },
  { name: 'Algorithms', category: 'other' },
  { name: 'Machine Learning', category: 'other' },
];

type Category = 'languages' | 'frameworks' | 'tools' | 'other';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('languages');

  const filteredSkills = skills.filter(skill => skill.category === activeCategory);

  const categories = [
    { id: 'languages', name: 'Languages' },
    { id: 'frameworks', name: 'Frameworks' },
    { id: 'tools', name: 'Tools' },
    { id: 'other', name: 'Other' },
  ];

  return (
    <Section
      id="skills"
      title="My Skills"
      subtitle="A comprehensive overview of my technical abilities"
      className="bg-gray-50 dark:bg-gray-900"
    >
      <div className="flex justify-center mb-8">
        <div className="inline-flex p-1 bg-gray-200 dark:bg-gray-800 rounded-lg">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id as Category)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeCategory === category.id
                  ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredSkills.map((skill) => (
          <div
            key={skill.name}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-200"
          >
            <p className="text-gray-900 dark:text-white font-medium text-center">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;