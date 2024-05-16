import React, { useState, useEffect } from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { HomeIcon, UserIcon, FolderIcon, NewspaperIcon, SunIcon, MoonIcon } from '@heroicons/react/outline';

const Profile = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setDarkMode(JSON.parse(savedMode));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-4 pb-20 overflow-y-auto bg-gray-100 dark:bg-gray-900 dark:text-white">
      <button onClick={toggleDarkMode} className="absolute top-4 right-4 focus:outline-none">
        {darkMode ? (
          <SunIcon className="w-6 h-6 text-yellow-500" />
        ) : (
          <MoonIcon className="w-6 h-6 text-gray-700" />
        )}
      </button>
      <div className="flex flex-col items-center mb-8 space-y-4">
        <img
          src="/assets/profile.png"
          alt="Profile"
          className="object-cover w-32 h-32 rounded-full"
        />
        <div className="text-center">
          <h1 className="text-4xl font-bold">Giga Razki Arianda</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">Surabaya, Indonesia</p>
        </div>
        <div className="flex space-x-4">
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
      </div>
      <div className="w-full max-w-5xl px-4 space-y-8 text-justify">
        <div>
          <p className="text-lg leading-relaxed">
            Hi, I'm a fresh graduate in computer engineering and interested in the field of data science, artificial intelligence, web, and mobile development. Besides that, I am the type of person who has a great curiosity about things that intrigue me and adaptability. This makes me even more excited to build relationships with many people. Even in a team, I always try to contribute as a team member by giving my ability to create new experiences.
          </p>
        </div>
        <div>
          <h2 className="mb-4 text-2xl font-bold">Education</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <div>
                <strong>Universitas Dinamika</strong>
                <br />
                Computer Engineering
              </div>
              <div className="text-right">
                <span className="text-gray-600 dark:text-gray-400">2020 - 2024</span>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <strong>SMA Negeri 2 Bangkalan</strong>
                <br />
                Science
              </div>
              <div className="text-right">
                <span className="text-gray-600 dark:text-gray-400">2017 - 2020</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-2xl font-bold">Experience</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <div>
                <strong>PT Salam Pacific Indonesia Lines</strong>
                <br />
                Artificial Intelligence Engineer
              </div>
              <div className="text-right">
                <span className="text-gray-600 dark:text-gray-400">May 2024 - July 2024</span>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <strong>PT BISA ARTIFISIAL INDONESIA</strong>
                <br />
                Artificial Intelligence Student
              </div>
              <div className="text-right">
                <span className="text-gray-600 dark:text-gray-400">February 2023 - June 2023</span>
              </div>
            </div>
          </div>
        </div>
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

export default Profile;
