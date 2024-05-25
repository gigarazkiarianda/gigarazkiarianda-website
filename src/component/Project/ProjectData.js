const projects = [
{
      id: '1',
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
      id: '2',
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
      id: '3',
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
      id: '4',
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
      id: '5',
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
      id: '6',
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
];

export default projects;
