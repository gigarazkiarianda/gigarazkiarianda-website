import React, { useState, useEffect } from 'react';
import {
  HomeIcon,
  UserIcon,
  FolderIcon,
  NewspaperIcon,
  MoonIcon,
  SunIcon
} from '@heroicons/react/outline';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Home = () => {
  const [name, setName] = useState('Giga Razki Arianda');
  const [profession, setProfession] = useState('AI Engineer');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProfession((prevProfession) => (prevProfession === 'AI Engineer' ? 'Software Engineer' : 'AI Engineer'));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white ${darkMode ? 'dark' : ''}`}>
      <div className="absolute top-4 right-4">
        <button onClick={toggleDarkMode} className="focus:outline-none">
          {darkMode ? (
            <SunIcon className="w-6 h-6 text-yellow-500" />
          ) : (
            <MoonIcon className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </div>
      <div className="flex flex-col items-center mb-16 space-y-4 sm:flex-row sm:justify-center sm:items-center sm:space-x-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold transition-all duration-1000">{name}</h1>
          <h3 className="text-xl font-semibold">
            I'm <span className="text-blue-500">{profession}</span>
          </h3>
        </div>
        <div className="flex items-center flex-shrink-0">
          <img
            src="/assets/profile.png"
            alt="Profile"
            className="object-cover w-32 h-32 rounded-full"
          />
        </div>
      </div>
      <div className="flex mt-2 space-x-4">
        <a href="https://github.com/gigarazkiarianda" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
          <FaGithub className="w-6 h-6" />
        </a>
        <a href="https://instagram.com/gigarazkiarianda" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
          <FaInstagram className="w-6 h-6" />
        </a>
        <a href="https://linkedin.com/gigarazkiarianda" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
          <FaLinkedin className="w-6 h-6" />
        </a>
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md dark:bg-gray-800">
        <div className="flex justify-around py-4">
          <a href="/" className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
            <HomeIcon className="w-6 h-6" />
            <span className="mt-1 text-xs">Home</span>
          </a>
          <a href="#project" className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
            <FolderIcon className="w-6 h-6" />
            <span className="mt-1 text-xs">Project</span>
          </a>
          <a href="/Blog" className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
            <NewspaperIcon className="w-6 h-6" />
            <span className="mt-1 text-xs">Blog</span>
          </a>
          <a href="/Profile" className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
            <UserIcon className="w-6 h-6" />
            <span className="mt-1 text-xs">Profile</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
