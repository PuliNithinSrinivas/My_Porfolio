import React from 'react';
import Section from '../components/Section';

const Certifications: React.FC = () => {
  return (
    <Section
      id="certifications"
      title="Certifications"
      subtitle="Professional certifications and achievements"
      className="bg-gray-50 dark:bg-gray-900"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div 
            key={i}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="h-40 bg-gray-100 dark:bg-gray-700 rounded-md mb-4 flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400">Certificate Preview</p>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Certification #{i}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Coming Soon
            </p>
            <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
              <span>Issuing Organization</span>
              <span>Date: TBD</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Certifications;