import React, { useState, useEffect } from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { HomeIcon, UserIcon, FolderIcon, NewspaperIcon, SunIcon, MoonIcon } from '@heroicons/react/outline';

const Profile = () => {
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

  const content = {
    EN: {
      title: 'Giga Razki Arianda',
      location: 'Surabaya, Indonesia',
      bio: `Hi, I'm a fresh graduate in computer engineering and interested in the field of data science, artificial intelligence, web, and mobile development. Besides that, I am the type of person who has a great curiosity about things that intrigue me and adaptability. This makes me even more excited to build relationships with many people. Even in a team, I always try to contribute as a team member by giving my ability to create new experiences.`,
      education: 'Education',
      experience: 'Experience',
      schools: [
        {
          name: 'Universitas Dinamika',
          degree: 'Computer Engineering',
          years: '2020 - 2024',
        },
        {
          name: 'SMA Negeri 2 Bangkalan',
          degree: 'Science',
          years: '2017 - 2020',
        },
      ],
      jobs: [
        {
          company: 'PT Salam Pacific Indonesia Lines',
          title: 'Artificial Intelligence Engineer',
          years: 'May 2024 - July 2024',
        },
        {
          company: 'PT BISA ARTIFISIAL INDONESIA',
          title: 'Artificial Intelligence Student',
          years: 'February 2023 - June 2023',
        },
      ],
    },
    ID: {
      title: 'Giga Razki Arianda',
      location: 'Surabaya, Indonesia',
      bio: `Hai, saya adalah lulusan baru di bidang teknik komputer dan tertarik pada bidang data science, kecerdasan buatan, pengembangan web, dan pengembangan mobile. Selain itu, saya adalah tipe orang yang memiliki rasa ingin tahu yang besar tentang hal-hal yang menarik perhatian saya dan kemampuan beradaptasi. Hal ini membuat saya semakin bersemangat untuk membangun hubungan dengan banyak orang. Bahkan dalam sebuah tim, saya selalu berusaha berkontribusi sebagai anggota tim dengan memberikan kemampuan saya untuk menciptakan pengalaman baru.`,
      education: 'Pendidikan',
      experience: 'Pengalaman',
      schools: [
        {
          name: 'Universitas Dinamika',
          degree: 'Teknik Komputer',
          years: '2020 - 2024',
        },
        {
          name: 'SMA Negeri 2 Bangkalan',
          degree: 'IPA',
          years: '2017 - 2020',
        },
      ],
      jobs: [
        {
          company: 'PT Salam Pacific Indonesia Lines',
          title: 'Engineer Kecerdasan Buatan',
          years: 'Mei 2024 - Juli 2024',
        },
        {
          company: 'PT BISA ARTIFISIAL INDONESIA',
          title: 'Siswa Kecerdasan Buatan',
          years: 'Februari 2023 - Juni 2023',
        },
      ],
    },
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-4 pb-20 overflow-y-auto bg-gray-100 dark:bg-gray-900 dark:text-white">
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
      <div className="flex flex-col items-center mb-8 space-y-4">
        <img
          src="/assets/profile.png"
          alt="Profile"
          className="object-cover w-32 h-32 rounded-full"
        />
        <div className="text-center">
          <h1 className="text-4xl font-bold">{content[language].title}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">{content[language].location}</p>
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
          <p className="text-lg leading-relaxed">{content[language].bio}</p>
        </div>
        <div>
          <h2 className="mb-4 text-2xl font-bold">{content[language].education}</h2>
          <div className="space-y-4">
            {content[language].schools.map((school, index) => (
              <div key={index} className="flex justify-between">
                <div>
                  <strong>{school.name}</strong>
                  <br />
                  {school.degree}
                </div>
                <div className="text-right">
                  <span className="text-gray-600 dark:text-gray-400">{school.years}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-2xl font-bold">{content[language].experience}</h2>
          <div className="space-y-4">
            {content[language].jobs.map((job, index) => (
              <div key={index} className="flex justify-between">
                <div>
                  <strong>{job.company}</strong>
                  <br />
                  {job.title}
                </div>
                <div className="text-right">
                  <span className="text-gray-600 dark:text-gray-400">{job.years}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
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

export default Profile;
