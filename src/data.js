// =============================================================================
// PORTFOLIO DATA — Edit values here without touching components
// =============================================================================

export const profile = {
  name: 'Sby Sepdianto Manalu',
  title: 'Software Engineer | Web, IoT & AI Enthusiast',
  bio: 'Fresh Graduate Teknik Informatika yang sangat antusias dengan dunia software development. Fokus eksplorasi meliputi Web Development, Mobile App Development, Machine Learning, dan IoT Solutions. Selalu bersemangat untuk belajar hal baru dan membangun solusi teknologi yang user-friendly.',
  email: 'sbymanalu@gmail.com',
  socialLinks: [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sby-sepdianto-manalu-386772295/',
      icon: 'linkedin',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/sbymanalu_/',
      icon: 'instagram',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/sbymanalu',
      icon: 'github',
    },
  ],
};

export const projects = [
  {
    id: 'absensi-iot',
    category: 'IOT & AI',
    title: 'Sistem Absensi Cerdas Berbasis IoT & AI',
    techStack: ['Python', 'Flask', 'Raspberry Pi', 'CNN', 'RFID'],
    description:
      'Sistem presensi terintegrasi dengan Raspberry Pi, RFID, dan pengenalan wajah menggunakan Convolutional Neural Network.',
    highlights: [
      'Face recognition dengan CNN untuk identifikasi otomatis',
      'Integrasi RFID sebagai metode absensi alternatif',
      'Dashboard monitoring kehadiran berbasis web',
    ],
    image: '/images/project_absensi_iot.jpg',
    hasGeofencing: false,
  },
  {
    id: 'coffee-shop',
    category: 'MOBILE APP',
    title: 'Aplikasi Mobile Pemesanan Coffee Shop',
    techStack: ['React Native', 'PHP', 'MySQL'],
    description:
      'Aplikasi seluler untuk kedai kopi dengan fitur pemesanan dan riwayat transaksi yang user-friendly.',
    highlights: [
      'UI/UX intuitif untuk proses pemesanan cepat',
      'Riwayat transaksi dan tracking pesanan',
      'Backend PHP dengan database MySQL terintegrasi',
    ],
    image: '/images/project_coffeeshop.jpg',
    hasGeofencing: false,
  },
  {
    id: 'robot-keamanan',
    category: 'IOT & ROBOTICS',
    title: 'Robot Keamanan Mobile (Computer Vision)',
    techStack: ['YOLO', 'Python', 'Robotics', 'OpenCV'],
    description:
      'Robot bergerak dengan sistem computer vision dan YOLO untuk deteksi objek secara real-time.',
    highlights: [
      'Object detection real-time menggunakan YOLO',
      'Navigasi otonom dengan sensor ultrasonik',
      'Live video streaming ke dashboard monitoring',
    ],
    image: '/images/project_robot.jpg',
    hasGeofencing: false,
  },
  {
    id: 'sentimen-prediksi',
    category: 'AI & DATA SCIENCE',
    title: 'Analisis Sentimen & Prediksi Harga',
    techStack: ['Python', 'TensorFlow', 'NLP', 'LSTM', 'BERT'],
    description:
      'Machine Learning dengan Random Forest, LSTM, dan BERT untuk analisis sentimen dan prediksi data.',
    highlights: [
      'NLP pipeline dengan BERT untuk analisis sentimen',
      'Model LSTM untuk prediksi time-series harga',
      'Visualisasi data interaktif dan laporan otomatis',
    ],
    image: '/images/project_sentimen.jpg',
    hasGeofencing: false,
  },
  {
    id: 'geofencing',
    category: 'WEB APPLICATION',
    title: 'Web Absensi Geofencing PKL Kominfo',
    techStack: ['Laravel', 'MySQL', 'Google Maps API', 'Bootstrap'],
    description:
      'Sistem absensi berbasis web dengan geofencing untuk memastikan kehadiran peserta PKL di lokasi yang ditentukan.',
    highlights: [
      'Geofencing radius 50m untuk validasi lokasi absensi',
      'Dashboard admin dengan statistik kehadiran real-time',
      'Notifikasi otomatis untuk ketidakhadiran',
    ],
    image: '/images/project_geofencing.jpg',
    hasGeofencing: true,
  },
];

export const certifications = [
  {
    title: 'Associate Data Scientist',
    issuer: 'VSGA Digital Talent Scholarship 2025',
    description:
      'Sertifikasi keahlian dalam bidang Data Science dengan fokus pada machine learning, data analysis, dan implementasi model prediktif.',
    image: '/images/sertifikat_vsga.jpeg',
  },
  {
    title: 'IT CAMP 2025 — Machine Learning',
    issuer: 'Ikatan Mahasiswa Ilmu Komputer USU (IMILKOM)',
    description:
      'Peningkatan kompetensi IT dengan fokus utama pada penerapan dasar dan pembuatan model Machine Learning.',
    image: '/images/sertifikat_itcamp.png',
  },
  {
    title: 'Google I/O Extended Medan 2025',
    issuer: 'Google Developer Group Medan',
    description:
      'Partisipasi dalam Google I/O Extended yang menampilkan teknologi terbaru dari Google, termasuk AI/ML advancements.',
    image: '/images/sertifikat_google.jpeg',
  },
];

export const skills = {
  'Web Development': [
    'React.js',
    'Next.js',
    'JavaScript',
    'HTML/CSS',
    'Tailwind CSS',
    'Laravel',
    'Node.js',
    'Bootstrap',
    'PHP',
    'REST API',
  ],
  'IoT & Embedded': [
    'Arduino',
    'ESP32',
    'Raspberry Pi',
    'RFID',
    'MQTT',
    'Sensors',
    'Robotics',
    'C/C++',
  ],
  'AI & Data Science': [
    'Python',
    'TensorFlow',
    'PyTorch',
    'OpenCV',
    'YOLO',
    'NLP / BERT',
    'Scikit-learn',
    'Pandas',
    'LSTM',
    'CNN',
  ],
  'Mobile & Tools': [
    'React Native',
    'MySQL',
    'Firebase',
    'SQLite',
    'Git',
    'VS Code',
  ],
};

export const services = [
  {
    title: 'Data Science',
    description:
      'Menganalisis dan memproses data menggunakan machine learning dan statistical methods untuk menghasilkan insights yang actionable.',
  },
  {
    title: 'Mobile App Development',
    description:
      'Mengembangkan aplikasi mobile cross-platform dengan React Native dan user-friendly design.',
  },
  {
    title: 'Web Development',
    description:
      'Membangun aplikasi web full-stack, responsive UI/UX, dan integrasi database yang robust.',
  },
  {
    title: 'IoT & Embedded Systems',
    description:
      'Merancang dan mengembangkan solusi IoT dengan microcontroller, sensor, dan cloud connectivity.',
  },
];

export const experience = [
  {
    role: 'Praktik Kerja Lapangan (PKL)',
    organization: 'Dinas Kominfo',
    period: 'Juli — September 2025',
    description:
      'Mengembangkan sistem web absensi geofencing untuk monitoring kehadiran peserta PKL. Terlibat dalam pengembangan infrastruktur IT dan pemeliharaan jaringan.',
  },
  {
    role: 'Pembicara / Narasumber',
    organization: 'SMA Negeri 1 Tigapanah, Karo',
    period: 'Maret 2026',
    description:
      'Menjadi pembicara dalam kegiatan sosialisasi dan promosi kampus Universitas Sumatera Utara (USU) kepada siswa-siswi SMA, berbagi pengalaman kuliah di Teknik Informatika dan peluang karir di bidang teknologi.',
  },
];

export const education = [
  {
    degree: 'S1 Teknik Informatika',
    institution: 'Universitas Methodist Indonesia',
    period: '2022 — 2026',
    description:
      'Mempelajari dasar-dasar ilmu komputer, pengembangan perangkat lunak, dan sistem tertanam. Aktif membangun berbagai proyek praktis di bidang Web, IoT, dan AI selama masa perkuliahan.',
  },
];

export const bootMessages = [
  { tag: 'SYSTEM', text: 'initializing profile...', delay: 0 },
  { tag: 'BIOS', text: 'hardware check passed', delay: 400 },
  { tag: 'NET', text: 'establishing secure connection...', delay: 800 },
  { tag: 'GPS', text: 'location locked — Medan, Indonesia', delay: 1200 },
  { tag: 'AUTH', text: 'credentials verified', delay: 1600 },
  { tag: 'FACE_ID', text: 'match found: Sby Sepdianto Manalu', delay: 2000 },
];
