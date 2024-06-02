const projects = [
  {
    id: '1',
    name: {
      EN: 'Fan Control System Using Multi-Language Voice Through Audio Classification on Yamnet',
      ID: 'Sistem Kontrol Kipas Menggunakan Suara Multi-Bahasa Melalui Klasifikasi Audio pada Yamnet'
    },
    description: {
      EN: `
          <p><strong>Project Description:</strong></p>
          <p>In the current era of rapidly developing globalization, there has been a significant transformation in the way people carry out their daily activities, including the use of household devices such as fans. This project aims to design and implement a revolutionary fan control system by utilizing multi-language voice commands, such as Indonesian, English, and Javanese. This system functions in real-time and uses advanced audio classification technology, namely YAMNet, to translate voice commands into fan control actions.</p>
          
          <p>This initiative responds to the growing demand for intuitive and universally accessible control mechanisms in smart home appliances. By offering voice command functionality in diverse languages, the system caters to a wide range of users, ensuring inclusivity and user-friendliness.</p>
          
          <p><strong>Business Understanding:</strong></p>
          <p>The development of this multi-language voice-based fan control system answers the need for a mechanism that is more intuitive and accessible to a variety of users in today's digital era. With its ability to operate the fan using voice commands from multiple languages, this system provides users with greater flexibility in controlling their room environment.</p>
          
          <p><strong>Data Understanding:</strong></p>
          <p>This project involves using Python to train an audio classification model leveraging YAMNet technology. This training process was carried out in several stages, including a training process with 12 epochs and 15 epochs, with results showing significant improvements in model accuracy and performance. The data used in system testing comes from the audio dataset subset test that has been prepared previously.</p>
          
          <p>The test results show that this multi-language voice-based fan control system has great potential in increasing the comfort and efficiency of using fans in everyday life. While there is still room for improvement in system accuracy and performance, this project paves the way for further development in the integration of voice recognition technology in home devices. Thus, the conclusions of this research highlight the importance of innovative approaches in creating solutions that can accommodate the diverse needs of users in today's digital era.</p>
        `,
      ID: `
          <p><strong>Deskripsi Proyek:</strong></p>
          <p>Dalam era globalisasi yang berkembang pesat saat ini, terjadi transformasi signifikan dalam cara manusia menjalankan kegiatan sehari-hari, termasuk dalam penggunaan perangkat rumah tangga seperti kipas angin. Proyek ini bertujuan untuk merancang dan mengimplementasikan sistem kontrol kipas angin yang revolusioner dengan memanfaatkan perintah suara multi-bahasa, seperti Bahasa Indonesia, Bahasa Inggris, dan Bahasa Jawa. Sistem ini berfungsi secara real-time dan menggunakan teknologi klasifikasi audio yang canggih, yakni YAMNet, untuk menerjemahkan perintah suara menjadi aksi kontrol kipas angin.</p>
          
          <p>Perkembangan sistem kontrol kipas angin berbasis suara multi-bahasa ini menjawab kebutuhan akan mekanisme yang lebih intuitif dan dapat diakses oleh beragam pengguna di era digital saat ini. Dengan kemampuannya untuk mengoperasikan kipas angin menggunakan perintah suara dari berbagai bahasa, sistem ini memberikan fleksibilitas yang lebih besar kepada pengguna dalam mengontrol lingkungan ruang mereka.</p>
          
          <p><strong>Bisnis Understanding:</strong></p>
          <p>Proyek ini melibatkan penggunaan Python untuk melatih model klasifikasi audio dengan memanfaatkan teknologi YAMNet. Proses pelatihan ini dilakukan dalam beberapa tahap, termasuk proses training dengan 12 epoch dan 15 epoch, dengan hasil yang menunjukkan peningkatan signifikan dalam akurasi dan performa model. Data yang digunakan dalam pengujian sistem berasal dari audio dataset subset test yang telah dipersiapkan sebelumnya.</p>
          
          <p>Hasil pengujian menunjukkan bahwa sistem kontrol kipas angin berbasis suara multi-bahasa ini memiliki potensi besar dalam meningkatkan kenyamanan dan efisiensi penggunaan kipas angin dalam kehidupan sehari-hari. Meskipun masih ada ruang untuk peningkatan dalam akurasi dan kinerja sistem, proyek ini membuka jalan bagi pengembangan lebih lanjut dalam integrasi teknologi pengenalan suara dalam perangkat rumah tangga. Dengan demikian, kesimpulan dari penelitian ini menyoroti pentingnya pendekatan inovatif dalam menciptakan solusi yang dapat mengakomodasi kebutuhan beragam pengguna di era digital saat ini.</p>
        `
    },
    image: '/assets/project1.jpg',
    tag: 'Thesis',
    client: 'University',
    languages: ['Python', 'Arduino']
  },
];

export default projects;
