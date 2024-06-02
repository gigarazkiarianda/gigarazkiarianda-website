import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {  HomeIcon,
  UserIcon,
  FolderIcon,
  NewspaperIcon,
  MoonIcon,
  SunIcon,
  GlobeAltIcon,
  UserGroupIcon,
  CollectionIcon } from '@heroicons/react/outline';
import projects from './ProjectData';

const ProjectPost = () => {
  const { projectId } = useParams();
  const project = projects.find((project) => project.id === projectId);

  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('EN');

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    setDarkMode(savedMode === 'true');
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    darkMode
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
  }, [darkMode]);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'EN' ? 'ID' : 'EN');
  };

  if (!project) {
    return <div>Project not found!</div>;
  }

  const projectName = project.name?.[language] || 'Project Name Unavailable';
  const projectDescription = project.description?.[language] || 'Description Unavailable';
  const projectTag = project.tag || 'Tag Unavailable';
  const projectClient = project.client || 'Client Unavailable';
  const projectLanguages = project.languages?.join(', ') || 'Languages Unavailable';

  return (
    <div className={`flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white ${darkMode ? 'dark' : ''}`}>
      <div className="absolute flex items-center space-x-4 top-4 right-4">
        <button onClick={toggleLanguage} className="focus:outline-none">
          <span className="text-lg font-bold">{language === 'EN' ? 'ID' : 'EN'}</span>
        </button>
        <button onClick={toggleDarkMode} className="focus:outline-none">
          {darkMode ? (
            <SunIcon className="w-6 h-6 text-yellow-500" />
          ) : (
            <MoonIcon className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </div>
      <main className="container flex-grow p-4 mx-auto mt-12 mb-12">
        <h1 className="mb-4 text-2xl font-semibold text-center">{projectName}</h1>
        <p className="flex items-center justify-center mb-4"> <span className="flex items-center"><GlobeAltIcon className="w-4 h-4 mr-1 " />{projectLanguages}</span></p>
        <img src={project.image} alt={projectName} className="object-cover w-full mx-auto mt-10 mb-4 rounded-lg md:w-auto md:max-h-80"  />
        <p className="mb-4" dangerouslySetInnerHTML={{ __html: projectDescription }}></p>
        <p className="mb-4"> <span className="flex items-center"><CollectionIcon className="w-4 h-4 mr-1" />{projectTag}</span></p>
        <p className="mb-4"> <span className="flex items-center"><UserGroupIcon className="w-4 h-4 mr-1" />{projectClient}</span></p>
        
      </main>
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md dark:bg-gray-800">
        <div className="flex justify-around py-4">
          <Link to="/" className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
            <HomeIcon className="w-6 h-6" />
            <span className="mt-1 text-xs">{language === 'EN' ? 'Home' : 'Beranda'}</span>
          </Link>
          <Link to="/Project" className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
            <FolderIcon className="w-6 h-6" />
            <span className="mt-1 text-xs">{language === 'EN' ? 'Project' : 'Proyek'}</span>
          </Link>
          <Link to="/Blog" className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
            <NewspaperIcon className="w-6 h-6" />
            <span className="mt-1 text-xs">{language === 'EN' ? 'Blog' : 'Blog'}</span>
          </Link>
          <Link to="/Profile" className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
            <UserIcon className="w-6 h-6" />
            <span className="mt-1 text-xs">{language === 'EN' ? 'Profile' : 'Profil'}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectPost;
