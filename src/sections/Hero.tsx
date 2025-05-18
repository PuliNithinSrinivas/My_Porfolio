import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import Button from '../components/Button';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "I'm a Java Developer";
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [typedText]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section 
      id="home" 
      className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-transparent to-teal-400/20 dark:from-blue-500/10 dark:to-teal-500/10 opacity-60"></div>
      </div>
      
      <div className="container relative px-4 z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="relative">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-400 mb-4">
              Hello, I'm PULI NITHIN SRINIVAS
            </h1>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-400 blur-lg opacity-20 -z-10"></div>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-700 dark:text-gray-300 mb-8">
            {typedText}
            <span className={`inline-block w-2 h-8 ml-1 bg-blue-600 dark:bg-blue-400 ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mb-8 leading-relaxed">
            A passionate student developer focused on Java Development and AI/ML.
            Currently exploring Spring Framework and building full-stack applications.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="primary" 
              size="lg" 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600"
            >
              View Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2"
            >
              Contact Me
            </Button>
          </div>
          
          <a 
            href="#about" 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-gray-400 animate-bounce"
            aria-label="Scroll down"
          >
            <ArrowDown size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;