import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';
import emailjs from '@emailjs/browser';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      await emailjs.sendForm(
        'service_w6bylsp',
        'template_s4gbrwb',
        formRef.current!,
        'R5jThIMgZdPSn7iq9'
      );

      setSubmitMessage({
        type: 'success',
        text: 'Your message has been sent successfully! I will get back to you soon.'
      });
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitMessage({
        type: 'error',
        text: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section
      id="contact"
      title="Contact Me"
      subtitle="Feel free to reach out for collaboration or just to say hello"
      className="bg-white dark:bg-gray-800"
    >
      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-2/5">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Have a project in mind or want to explore opportunities for collaboration? Feel free to contact me through any of the methods below.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                <p className="font-medium text-gray-900 dark:text-white">sreenupuli2005@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                <p className="font-medium text-gray-900 dark:text-white">+91 6303265532</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                <p className="font-medium text-gray-900 dark:text-white">Madurai, India</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Social Profiles</h4>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.linkedin.com/in/nithinsrinivas-puli" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://github.com/PuliNithinSrinivas" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
              >
                <Github size={18} />
              </a>
              <a 
                href="mailto:sreenupuli2005@gmail.com"
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="md:w-3/5">
          <form ref={formRef} onSubmit={handleSubmit} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Send Message</h3>
            
            {submitMessage && (
              <div 
                className={`p-3 mb-4 rounded-md ${
                  submitMessage.type === 'success' 
                    ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300' 
                    : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-300'
                }`}
              >
                {submitMessage.text}
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  placeholder="john.doe@example.com"
                />
              </div>
            </div>
            
            <div className="mb-4">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formState.subject}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                placeholder="Project Inquiry"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                placeholder="Hi, I'm interested in working with you on a project..."
              ></textarea>
            </div>
            
            <div className="text-right">
              <Button 
                type="submit" 
                variant="primary"
                disabled={isSubmitting}
                className="flex items-center gap-2"
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} />
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;