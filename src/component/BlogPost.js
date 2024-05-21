import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { HomeIcon, FolderIcon, NewspaperIcon, UserIcon, MoonIcon, SunIcon } from '@heroicons/react/outline';
import dummyPosts from './dummyPosts';

const BlogPost = () => {
  const { postId } = useParams();
  const post = dummyPosts.find((p) => p.id === parseInt(postId));
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('EN');

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

  if (!post) {
    return <div>Post not found</div>;
  }

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
      <div className="w-full max-w-4xl p-6 overflow-y-auto bg-transparent" style={{ marginBottom: '64px' }}>
        <p className="text-sm text-center text-gray-500 dark:text-gray-400">
          {new Date(post.date).toLocaleDateString(language === 'EN' ? 'en-US' : 'id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200">{post.title[language]}</h1>
        <p className="text-sm text-center text-gray-500 dark:text-gray-400">
          {language === 'EN' ? 'Category' : 'Kategori'}: {post.category[language]}
        </p>
        <p className="text-sm text-center text-gray-500 dark:text-gray-400">
          {language === 'EN' ? 'Author' : 'Penulis'}: Giga Razki Arianda
        </p>
        <div className="flex justify-center mt-4">
          <img src={post.img} alt={post.title[language]} className="w-full h-auto max-w-2xl rounded-lg" />
        </div>
        <div className="mt-4 text-gray-600 dark:text-gray-400">{post.content[language]}</div>
      </div>
      <footer className="fixed bottom-0 left-0 right-0 bg-gray-100 dark:bg-gray-800">
        <div className="flex justify-around py-4">
          <Link to="/" className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
            <HomeIcon className="w-6 h-6" />
            <span className="mt-1 text-xs">{language === 'EN' ? 'Home' : 'Beranda'}</span>
          </Link>
          <Link to="/project" className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
            <FolderIcon className="w-6 h-6" />
            <span className="mt-1 text-xs">{language === 'EN' ? 'Project' : 'Proyek'}</span>
          </Link>
          <Link to="/blog" className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
            <NewspaperIcon className="w-6 h-6" />
            <span className="mt-1 text-xs">{language === 'EN' ? 'Blog' : 'Blog'}</span>
          </Link>
          <Link to="/profile" className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
            <UserIcon className="w-6 h-6" />
            <span className="mt-1 text-xs">{language === 'EN' ? 'Profile' : 'Profil'}</span>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default BlogPost;
