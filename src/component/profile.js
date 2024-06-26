import React, { useState, useEffect } from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { HomeIcon, UserIcon, FolderIcon, NewspaperIcon, SunIcon, MoonIcon } from '@heroicons/react/outline';

const Profile = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('EN');
  const [dropdown, setDropdown] = useState('resume');

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
      certificate: 'Certificate',
      techStack: 'Tech Stack',
      schools: [
        {
          name: 'Universitas Dinamika',
          location: 'Surabaya, Indonesia',
          degree: 'Computer Engineering',
          years: '2020 - 2024',
        },
        {
          name: 'SMA Negeri 2 Bangkalan',
          location: 'Bangkalan, Indonesia',
          degree: 'Science',
          years: '2017 - 2020',
        },
      ],
      jobs: [
        {
          company: 'PT Salam Pacific Indonesia Lines',
          title: 'Artificial Intelligence Engineer',
          years: 'May 2024 - July 2024',
          location: 'Surabaya, Indonesia',
          type: 'on-site'
        },
        {
          company: 'PT BISA ARTIFISIAL INDONESIA',
          title: 'Artificial Intelligence Student',
          years: 'February 2023 - June 2023',
          location: 'Jakarta Selatan, Indonesia',
          type: 'remote'
        },
      ],
      techStackDetails: {
        programmingLanguages: ['HTML5', 'CSS3', 'Javascript', 'Python', 'C++'],
        databases: ['MYSQL', 'FIREBASE'],
        frontendFrameworks: ['React', 'Expo', 'Streamlit', 'TailwindCSS', 'Bootstrap'],
        backendFramework: ['ExpressJs', 'Flask'],
        hosting: ['Vercel'],
        AI: ['TensorFlow', 'Keras', 'Scikit-learn', 'Pandas', 'Numpy', 'Matplotlib'],
        design: ['Figma', 'Adobe Photoshop', 'Adobe Illustrator', "Adobe XD"],
        projectManager: ['Trello', 'Notion']
      }
    },
    ID: {
      title: 'Giga Razki Arianda',
      location: 'Surabaya, Indonesia',
      bio: `Hai, saya adalah lulusan baru di bidang teknik komputer dan tertarik pada bidang data science, kecerdasan buatan, pengembangan web, dan pengembangan mobile. Selain itu, saya adalah tipe orang yang memiliki rasa ingin tahu yang besar tentang hal-hal yang menarik perhatian saya dan kemampuan beradaptasi. Hal ini membuat saya semakin bersemangat untuk membangun hubungan dengan banyak orang. Bahkan dalam sebuah tim, saya selalu berusaha berkontribusi sebagai anggota tim dengan memberikan kemampuan saya untuk menciptakan pengalaman baru.`,
      education: 'Pendidikan',
      experience: 'Pengalaman',
      certificate: 'Sertifikat',
      techStack: 'Teknologi yang Digunakan',
      schools: [
        {
          name: 'Universitas Dinamika',
          location: 'Surabaya, Indonesia',
          degree: 'Teknik Komputer',
          years: '2020 - 2024',
        },
        {
          name: 'SMA Negeri 2 Bangkalan',
          location: 'Bangkalan, Indonesia',
          degree: 'IPA',
          years: '2017 - 2020',
        },
      ],
      jobs: [
        {
          company: 'PT Salam Pacific Indonesia Lines',
          title: 'Engineer Kecerdasan Buatan',
          years: 'Mei 2024 - Juli 2024',
          location: 'Surabaya, Indonesia',
          type: 'on-site'
        },
        {
          company: 'PT BISA ARTIFISIAL INDONESIA',
          title: 'Siswa Kecerdasan Buatan',
          years: 'Februari 2023 - Juni 2023',
          location: 'Jakarta Selatan, Indonesia',
          type: 'remote'
        },
      ],
      techStackDetails: {
        programmingLanguages: ['HTML5', 'CSS3', 'Javascript', 'Python', 'C++'],
        databases: ['MYSQL', 'FIREBASE'],
        frontendFrameworks: ['React', 'Expo', 'Streamlit', 'TailwindCSS', 'Bootstrap'],
        backendFramework: ['ExpressJs', 'Flask'],
        hosting: ['Vercel'],
        AI: ['TensorFlow', 'Keras', 'Scikit-learn', 'Pandas', 'Numpy', 'Matplotlib'],
        design: ['Figma', 'Adobe Photoshop', 'Adobe Illustrator', "Adobe XD"],
        projectManager: ['Trello', 'Notion']
      }
    },
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100 dark:bg-gray-900 dark:text-white">
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
      <div className="flex flex-col items-center mb-8 space-y-4 mt-14">
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
          <a href="https://www.linkedin.com/in/gigarazkiarianda/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
            <FaLinkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
      <div className="w-full max-w-5xl px-4 pb-20 space-y-8 text-justify">
        <div>
          <p className="text-lg leading-relaxed">{content[language].bio}</p>
        </div>
        <div className="mb-4">
          <select
            value={dropdown}
            onChange={(e) => setDropdown(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option value="resume">{language === 'EN' ? 'Resume' : 'Resume'}</option>
            <option value="certificate">{language === 'EN' ? 'Certificate' : 'Sertifikat'}</option>
            <option value="techStack">{language === 'EN' ? 'Tech Stack' : 'Teknologi yang Digunakan'}</option>
          </select>
        </div>
        {dropdown === 'resume' && (
          <div>
            <h2 className="mb-4 text-2xl font-bold">{content[language].education}</h2>
            <div className="space-y-4">
              {content[language].schools.map((school, index) => (
                <div key={index} className="flex justify-between">
                  <div>
                    <strong>{school.name}</strong>
                    <br />
                    {school.degree}
                    <br/>
                    {school.years}
                  </div>
                  <div className="text-right">
                    <span className="text-gray-600 dark:text-gray-400">{school.location}</span>
                  </div>
                </div>
              ))}
            </div>
            <h2 className="mb-4 text-2xl font-bold">{content[language].experience}</h2>
            <div className="space-y-4">
              {content[language].jobs.map((job, index) => (
                <div key={index} className="flex justify-between">
                  <div>
                    <strong>{job.company}</strong>
                    <br />
                    {job.title}
                    <br/>
                    {job.years}
                    <br/>
                    {job.type}
                  </div>
                  <div className="text-right">
                    <span className="text-gray-600 dark:text-gray-400">{job.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {dropdown === 'certificate' && (
          <div>
            <h2 className="mb-4 text-2xl font-bold">{content[language].certificate}</h2>
            <div className="space-y-4">
              <p className="text-lg leading-relaxed">Certificate details will be displayed here.</p>
            </div>
          </div>
        )}
        {dropdown === 'techStack' && (
          <div>
            <h2 className="mb-4 text-2xl font-bold">{content[language].techStack}</h2>
            <div className="flex flex-wrap -mx-2">
              <div className="w-full px-2 lg:w-1/2">
                <h3 className="text-xl font-semibold">Programming Languages</h3>
                <ul className="space-y-2">
                  {content[language].techStackDetails.programmingLanguages.map((lang, index) => (
                    <li key={index} className="p-2 bg-green-200 rounded bg-opacity-40">{lang}</li>
                  ))}
                </ul>
                <h3 className="mt-4 text-xl font-semibold">Databases</h3>
                <ul className="space-y-2">
                  {content[language].techStackDetails.databases.map((db, index) => (
                    <li key={index} className="p-2 bg-green-200 rounded bg-opacity-40">{db}</li>
                  ))}
                </ul>
                <h3 className="mt-4 text-xl font-semibold">Frontend Frameworks</h3>
                <ul className="space-y-2">
                  {content[language].techStackDetails.frontendFrameworks.map((framework, index) => (
                    <li key={index} className="p-2 bg-green-200 rounded bg-opacity-40">{framework}</li>
                  ))}
                </ul>
              </div>
              <div className="w-full px-2 lg:w-1/2">
                <h3 className="text-xl font-semibold">Backend Frameworks</h3>
                <ul className="space-y-2">
                  {content[language].techStackDetails.backendFramework.map((framework, index) => (
                    <li key={index} className="p-2 bg-green-200 rounded bg-opacity-40">{framework}</li>
                  ))}
                </ul>
                <h3 className="mt-4 text-xl font-semibold">Hosting</h3>
                <ul className="space-y-2">
                  {content[language].techStackDetails.hosting.map((host, index) => (
                    <li key={index} className="p-2 bg-green-200 rounded bg-opacity-40">{host}</li>
                  ))}
                </ul>
                <h3 className="mt-4 text-xl font-semibold">Artificial Intelligence</h3>
                <ul className="space-y-2">
                  {content[language].techStackDetails.AI.map((ai, index) => (
                    <li key={index} className="p-2 bg-green-200 rounded bg-opacity-40">{ai}</li>
                  ))}
                </ul>
                <h3 className="mt-4 text-xl font-semibold">Design</h3>
                <ul className="space-y-2">
                  {content[language].techStackDetails.design.map((design, index) => (
                    <li key={index} className="p-2 bg-green-200 rounded bg-opacity-40">{design}</li>
                  ))}
                </ul>
                <h3 className="mt-4 text-xl font-semibold">Project Management</h3>
                <ul className="space-y-2">
                  {content[language].techStackDetails.projectManager.map((pm, index) => (
                    <li key={index} className="p-2 bg-green-200 rounded bg-opacity-40">{pm}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
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
