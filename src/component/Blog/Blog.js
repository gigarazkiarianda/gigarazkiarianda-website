import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  HomeIcon,
  UserIcon,
  FolderIcon,
  NewspaperIcon,
  MoonIcon,
  SunIcon
} from '@heroicons/react/outline';
import dummyPosts from './dummyPosts';

const Blog = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('EN');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const categories = [
    { EN: 'Artificial Intelligence', ID: 'Kecerdasan Buatan' },
    { EN: 'Machine Learning', ID: 'Pembelajaran Mesin' },
    { EN: 'Deep Learning', ID: 'Pembelajaran Mendalam' },
    { EN: 'UI/UX', ID: 'UI/UX' },
    { EN: 'Software Engineering', ID: 'Rekayasa Perangkat Lunak' },
    { EN: 'Game Developer', ID: 'Pengembang Game' },
    { EN: 'Android Developer', ID: 'Pengembang Android' },
    { EN: 'IOS Developer', ID: 'Pengembang IOS' }
  ];

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
    document.documentElement.classList.toggle('dark', darkMode);
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

  const postsPerPage = 10;
  const filteredPosts = dummyPosts.filter(post => {
    const matchesSearch = post.title[language].toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? post.category[language] === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  const paginatedPosts = filteredPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

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
      <div className="flex-grow w-full px-4 py-8 mt-14">
        <div className="flex flex-col w-full max-w-4xl mx-auto space-y-4">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={language === 'EN' ? 'Search posts...' : 'Cari postingan...'}
            className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:text-white dark:border-gray-600"
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:text-white dark:border-gray-600"
          >
            <option value="">{language === 'EN' ? 'All Categories' : 'Semua Kategori'}</option>
            {categories.map((category) => (
              <option key={category.EN} value={category[language]}>
                {category[language]}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col items-center w-full px-4 py-8 mb-16 space-y-8">
          {paginatedPosts.map((post) => (
            <div key={post.id} className="flex flex-col w-full max-w-4xl p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 sm:flex-row">
              <img src={post.img} alt={post.title[language]} className="object-cover w-full h-48 rounded-lg sm:w-48 sm:h-auto sm:mr-6" />
              <div className="flex flex-col justify-between flex-1">
                <div className="flex flex-row items-center space-x-4">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">{post.title[language]}</h3>
                </div>
                <div className="flex flex-col mt-2 text-gray-600 sm:flex-row sm:items-center sm:space-x-4 dark:text-gray-400">
                  <span>{new Date(post.date).toLocaleDateString(language === 'EN' ? 'en-US' : 'id-ID')}</span>
                  <span>{post.category[language]}</span>
                </div>
                <p className="mt-4 text-gray-600 dark:text-gray-400">{post.summary[language]}</p>
                <Link to={`/post/${post.id}`} className="mt-4 text-blue-500 dark:text-blue-400">
                  {language === 'EN' ? 'Read More' : 'Baca Selengkapnya'}
                </Link>
              </div>
            </div>
          ))}
          <div className="flex justify-between w-full max-w-4xl mb-16">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 text-white bg-blue-500 rounded-lg ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
            >
              {language === 'EN' ? 'Previous Page' : 'Halaman Sebelumnya'}
            </button>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 text-white bg-blue-500 rounded-lg ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
            >
              {language === 'EN' ? 'Next Page' : 'Halaman Berikutnya'}
            </button>
          </div>
        </div>
      </div>
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

export default Blog;
