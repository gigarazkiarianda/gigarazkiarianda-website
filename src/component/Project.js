import React, { useState, useEffect } from 'react';
import {
  HomeIcon,
  UserIcon,
  FolderIcon,
  NewspaperIcon,
  MoonIcon,
  SunIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from '@heroicons/react/outline';

const Project = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('EN');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 10;

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
      tag: 'Thesis',
      client: 'University',
      languages: ['Python', 'Arduino']
    },
    {
      name: {
        EN: 'Snake Game',
        ID: 'Game Ular'
      },
      description: {
        EN: 'This project is a classic implementation of the game "Snake" using the Python programming language. The goal of this project is to provide a deeper understanding of the Python programming language through the development of a simple game.',
        ID: 'Proyek ini merupakan implementasi klasik dari permainan "Snake" menggunakan bahasa pemrograman Python. Tujuan dari proyek ini adalah untuk memberikan pemahaman yang lebih mendalam tentang bahasa pemrograman Python melalui pengembangan game sederhana.'
      },
      image: '/assets/snake-game.png',
      tag: 'Game Developer',
      client: 'Personal Project',
      languages: ['Python']
    },
    {
      name: {
        EN: 'Rock-Paper-Scissor Classification',
        ID: 'Klasifikasi Batu-Kertas-Gunting'
      },
      description: {
        EN: 'This final project aims to develop machine learning in classifying paper, rock and scissor images using TensorFlow. This model can be used in various applications, such as recognition systems, games, and educational tools.',
        ID: 'Proyek Tugas Akhir ini bertujuan untuk mengembangkan pembelajaran mesin dalam mengklasifikasikan gambar berbentuk kertas, batu, dan gunting menggunakan TensorFlow. Model ini dapat digunakan dalam berbagai aplikasi, seperti sistem pengenalan, game, dan alat pendidikan.'
      },
      image: '/assets/rock-paper-scissor.png',
      tag: 'Artificial Intelligence',
      client: 'Research Project',
      languages: ['Python', 'TensorFlow']
    }, 
    {
      name: {
        EN: 'Simple Calculator',
        ID: 'Kalkulator Sederhana'
      }, 
      description: {
        EN: 'This project is a simple calculator created using Python. This calculator is designed to perform basic operations such as addition, subtraction, multiplication, and division. The goal of this project is to provide users with an easy-to-use tool to perform simple mathematical calculations.',
        ID: 'Proyek ini adalah sebuah kalkulator sederhana yang dibuat menggunakan Python. Kalkulator ini dirancang untuk melakukan operasi dasar seperti penjumlahan, pengurangan, perkalian, dan pembagian. Tujuan dari proyek ini adalah untuk memberikan pengguna alat yang mudah digunakan untuk melakukan perhitungan matematika sederhana.'
      },
          image: '/assets/simple-calculator.png',
          tag: 'Software Engineer',
          client: 'Personal',
          languages: ['Python']
    },

    {
      name: {
        EN: 'Puzzle Game',
        ID: 'Permainan Puzzle'
      }, 
      description: {
        EN: 'This program is an implementation of the Sliding Puzzle puzzle game using the C++ programming language. This game requires the player to move the numbers in a grid box to arrange them in the correct order. Each grid box has a number, except for one empty box. The players goal is to arrange the numbers in the correct order by moving the empty squares to the correct positions.',
        ID: 'Program ini merupakan implementasi dari permainan puzzle Sliding Puzzle menggunakan bahasa pemrograman C++. Permainan ini mengharuskan pemain untuk menggerakkan angka-angka dalam kotak grid untuk menyusun urutan yang benar. Setiap kotak grid memiliki angka, kecuali satu kotak yang kosong. Tujuan pemain adalah menyusun angka-angka tersebut dalam urutan yang benar dengan memindahkan kotak kosong ke posisi yang tepat.'
      },
          image: '/assets/puzzle-game.png',
          tag: 'Game Developer',
          client: 'Personal',
          languages: ['C++']
    },
    {
      name: {
        EN: 'Salary Calculator',
        ID: 'Kalkulator Gaji'
      }, 
      description: {
        EN: 'This project develops a gross salary calculator using the C++ programming language. This calculator is designed to calculate net salary from gross salary taking into account tax percentages and other deductions. Users will enter gross salary, tax percentage, and other relevant deduction values. The program then calculates the taxes due and total deductions, then subtracts these amounts from the gross salary to get the net salary. This project combines basic programming concepts such as input/output, data processing, and the use of arithmetic operators to provide accurate and efficient results',
        ID: 'Proyek ini mengembangkan sebuah kalkulator gaji kotor menggunakan bahasa pemrograman C++. Kalkulator ini dirancang untuk menghitung gaji bersih dari gaji kotor dengan mempertimbangkan persentase pajak dan potongan lainnya. Pengguna akan memasukkan gaji kotor, persentase pajak, dan nilai potongan lain yang relevan. Program kemudian menghitung pajak yang harus dibayar dan total potongan, lalu mengurangi jumlah ini dari gaji kotor untuk mendapatkan gaji bersih. Proyek ini menggabungkan konsep dasar pemrograman seperti input/output, pengolahan data, dan penggunaan operator aritmetika untuk memberikan hasil yang akurat dan efisien.'
      },
          image: '/assets/salary-calculator.png',
          tag: 'Software Engineer',
          client: 'Personal',
          languages: ['C++']
    }
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

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const closeModal = () => {
    setSelectedProject(null);
  };

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

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
        <div className="text-center">
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
      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={closeModal}>
          <div className="w-full max-w-lg p-4 bg-white rounded-lg shadow-lg dark:bg-gray-800" onClick={(e) => e.stopPropagation()}>
            <img src={selectedProject.image} alt={selectedProject.name[language]} className="object-cover w-full h-32 mt-4 sm:h-48" />
            <h3 className="text-lg font-semibold">{selectedProject.name[language]}</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{selectedProject.description[language]}</p>
            <div className="mt-4">
              <h4 className="text-sm font-semibold">{language === 'EN' ? 'Category:' : 'Kategori:'}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">{selectedProject.tag}</p>
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-semibold">{language === 'EN' ? 'Client:' : 'Klien:'}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">{selectedProject.client}</p>
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-semibold">{language === 'EN' ? 'Programming Languages:' : 'Bahasa Pemrograman:'}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">{selectedProject.languages.join(', ')}</p>
            </div>
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
