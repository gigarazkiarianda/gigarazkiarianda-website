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

const Project = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([
    {
      name: 'Fan Control System Using Multi-Language Voice Through Audio Classification on Yamnet',
      description: 'This project is my final assignment as a requirement for obtaining a bachelors degree in engineering. This project has a function to turn on and off the fan using sounds from several languages ​​that have been trained via Python and communicated on the Arduino Uno using serial communication.',
      image: '/assets/project1.jpg',
      tag: 'Thesis'
    },
  ]);

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

  const filteredProjects = projects.filter(
    (project) =>
      (selectedTag === 'All' || project.tag === selectedTag) &&
      project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const closeModal = () => {
    setSelectedProject(null);
  };

  const handleCardClick = (project) => {
    setSelectedProject(project);
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
          <h3 className="text-xl font-semibold">Projects</h3>
        </div>
      </div>
      <div className="w-full max-w-2xl px-4">
        <input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        <div className="flex flex-wrap mb-4 space-x-2">
          {['All', 'Personal Project', 'Capstone Project', 'Thesis'].map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1 rounded-full ${
                selectedTag === tag ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 dark:text-gray-400'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
            <div key={index} className="overflow-hidden bg-white rounded-lg shadow-lg cursor-pointer dark:bg-gray-800" onClick={() => handleCardClick(project)}>
              <img src={project.image} alt={project.name} className="object-cover w-full h-32 sm:h-48" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{project.name}</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {project.description.length > 80 ? project.description.substr(0, 80) + "..." : project.description}
                </p>
                <div className="flex items-center justify-between mt-2">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-200 rounded-full dark:bg-blue-700 dark:text-blue-100">
                    {project.tag}
                  </span>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-3 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-600"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={closeModal}>
          <div className="w-full max-w-lg p-4 bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <img src={selectedProject.image} alt={selectedProject.name} className="object-cover w-full h-32 mt-4 sm:h-48" />
            <h3 className="text-lg font-semibold">{selectedProject.name}</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{selectedProject.description}</p>
            <div className="flex justify-end mt-4">
              <button onClick={closeModal} className="px-4 py-2 text-sm font-semibold text-white bg-red-500 rounded-full hover:bg-red-600">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md dark:bg-gray-800">
      <div className="flex justify-around py-4">
        <a href="/" className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
          <HomeIcon className="w-6 h-6" />
          <span className="mt-1 text-xs">Home</span>
        </a>
        <a href="/Project" className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
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

export default Project;
