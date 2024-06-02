import React, { useState, useEffect } from 'react';
import { HomeIcon, UserIcon, FolderIcon, NewspaperIcon, MoonIcon, SunIcon, ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import projects from './ProjectData';

const Project = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('EN');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 10;

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

  const filteredProjects = projects.filter(
    (project) =>
      (selectedTag === 'All' || project.tag === selectedTag) &&
      project.name && project.name[language] && project.name[language].toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

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
      <div className="flex flex-col items-center mb-16 space-y-4 sm:flex-row sm:justify-center sm:items-center sm:space-x-8">
        <div className="text-center mt-14">
          <h3 className="text-xl font-semibold">{language === 'EN' ? 'Projects' : 'Proyek'}</h3>
        </div>
      </div>
      <div className="flex-1 w-full max-w-2xl px-4 pb-20 mx-auto">
        <input
          type="text"
          placeholder={language === 'EN' ? 'Search projects...' : 'Cari proyek...'}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        <div className="mb-4">
          <select
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            {['All', 'Thesis', 'Software Engineer', 'Website Developer', 'Mobile Developer', 'Artificial Intelligence', 'Game Developer', 'UI/UX Design'].map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {currentProjects.map((project, index) => (
            <div
              key={index}
              className="flex overflow-hidden bg-white rounded-lg shadow-lg cursor-pointer dark:bg-gray-800"
            >
              <img
                src={project.image}
                alt={project.name && project.name[language]}
                className="object-cover w-32 h-32 sm:w-48 sm:h-48"
              />
              <div className="flex flex-col justify-between flex-1 p-4">
                <div>
                  <h3 className="text-lg font-semibold">{project.name && project.name[language]}</h3>
                  <p className="mt-2 mb-4 text-sm text-gray-600 dark:text-gray-400" dangerouslySetInnerHTML={{ __html: project.description && project.description[language] && project.description[language].length > 100 ? project.description[language].substring(0, 100) + '...' : project.description && project.description[language] }}></p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-200 rounded-full dark:bg-blue-700 dark:text-blue-100">
                    {project.tag}
                  </span>
                  <Link
                    to={`/project/${project.id}`}
                    className="px-3 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-600"
                  >
                    {language === 'EN' ? 'Details' : 'Detail'}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-8">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex items-center px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            {language === 'EN' ? 'Previous' : 'Sebelumnya'}
          </button>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="flex items-center px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {language === 'EN' ? 'Next' : 'Berikutnya'}
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
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

export default Project;
