import React, { useState, useEffect } from 'react';
import {
  HomeIcon,
  UserIcon,
  FolderIcon,
  NewspaperIcon,
  MoonIcon,
  SunIcon
} from '@heroicons/react/outline';

const Project = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('EN');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([
    {
      name: {
        EN: 'Fan Control System Using Multi-Language Voice Through Audio Classification on Yamnet',
        ID: 'Sistem Kontrol Kipas Menggunakan Suara Multi-Bahasa Melalui Klasifikasi Audio pada Yamnet'
      },
      description: {
        EN: 'This project is my final assignment as a requirement for obtaining a bachelors degree in engineering. This project has a function to turn on and off the fan using sounds from several languages ​​that have been trained via Python and communicated on the Arduino Uno using serial communication.',
        ID: 'Proyek ini adalah tugas akhir saya sebagai syarat untuk memperoleh gelar sarjana teknik. Proyek ini memiliki fungsi untuk menyalakan dan mematikan kipas menggunakan suara dari beberapa bahasa yang telah dilatih melalui Python dan dikomunikasikan pada Arduino Uno menggunakan komunikasi serial.'
      },
      image: '/assets/project1.jpg',
      tag: 'Thesis'
    },
  ]);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setDarkMode(JSON.parse(savedMode));
    }
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
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
      project.name[language].toLowerCase().includes(searchTerm.toLowerCase())
  );

  const closeModal = () => {
    setSelectedProject(null);
  };

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white ${darkMode ? 'dark' : ''}`}>
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
        <div className="text-center">
          <h3 className="text-xl font-semibold">{language === 'EN' ? 'Projects' : 'Proyek'}</h3>
        </div>
      </div>
      <div className="w-full max-w-2xl px-4">
        <input
          type="text"
          placeholder={language === 'EN' ? 'Search projects...' : 'Cari proyek...'}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        <div className="flex flex-wrap mb-4 space-x-2">
          {['All', 'Personal Project', 'Capstone Project', 'Thesis', 'Website Developer', 'Mobile Developer', 'Artificial Intelligence'].map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1 mb-2 rounded-full ${
                selectedTag === tag ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 dark:text-gray-400'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-4">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="flex overflow-hidden bg-white rounded-lg shadow-lg cursor-pointer dark:bg-gray-800"
              onClick={() => handleCardClick(project)}
            >
              <img
                src={project.image}
                alt={project.name[language]}
                className="object-cover w-32 h-32 sm:w-48 sm:h-48"
              />
              <div className="flex flex-col justify-between flex-1 p-4">
                <div>
                  <h3 className="text-lg font-semibold">{project.name[language]}</h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    {project.description[language].length > 100
                      ? project.description[language].substring(0, 100) + '...'
                      : project.description[language]}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-200 rounded-full dark:bg-blue-700 dark:text-blue-100">
                    {project.tag}
                  </span>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-3 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-600"
                  >
                    {language === 'EN' ? 'Details' : 'Detail'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={closeModal}>
          <div className="w-full max-w-lg p-4 bg-white rounded-lg shadow-lg dark:bg-gray-800" onClick={(e) => e.stopPropagation()}>
            <img src={selectedProject.image} alt={selectedProject.name[language]} className="object-cover w-full h-32 mt-4 sm:h-48" />
            <h3 className="text-lg font-semibold">{selectedProject.name[language]}</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{selectedProject.description[language]}</p>
            <div className="flex justify-end mt-4">
              <button onClick={closeModal} className="px-4 py-2 text-sm font-semibold text-white bg-red-500 rounded-full hover:bg-red-600">
                {language === 'EN' ? 'Close' : 'Tutup'}
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md dark:bg-gray-800">
        <div className="flex justify-around py-4">
          <a href="/" className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
            <HomeIcon className="w-6 h-6" />
            <span className="mt-1 text-xs">{language === 'EN' ? 'Home' : 'Beranda'}</span>
          </a>
          <a href="/Project" className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
            <FolderIcon className="w-6 h-6" />
            <span className="mt-1 text-xs">{language === 'EN' ? 'Project' : 'Proyek'}</span>
          </a>
          <a href="/Blog" className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
            <NewspaperIcon className="w-6 h-6" />
            <span className="mt-1 text-xs">{language === 'EN' ? 'Blog' : 'Blog'}</span>
          </a>
          <a href="/Profile" className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
            <UserIcon className="w-6 h-6" />
            <span className="mt-1 text-xs">{language === 'EN' ? 'Profile' : 'Profil'}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
