import { Question } from '../types';
import imgRantaiSawah from '../assets/images/rantai_makanan_sawah_1795060189945.jpg';
import imgEkosistemKolam from '../assets/images/ekosistem_kolam_1795060190880.jpg';
import imgSimbiosisAlam from '../assets/images/simbiosis_alam_1795060190642.jpg';
import imgPiramidaEnergi from '../assets/images/piramida_energi_1795060191177.jpg';
import imgJaringKebun from '../assets/images/jaring_makanan_kebun_1795060189977.jpg';

export const INITIAL_QUESTIONS: Question[] = [
  // =========================================================================
  // PILIHAN GANDA (18 SOAL: ID 1 - 18)
  // =========================================================================
  {
    id: 1,
    type: 'pg',
    topic: 'Komponen Abiotik Ekosistem',
    difficulty: 'Mudah',
    imageUrl: imgEkosistemKolam,
    imageCaption: 'Ilustrasi Ekosistem Kolam Air Tawar',
    text: 'Perhatikan gambar ekosistem kolam di atas! Berikut ini yang termasuk kelompok komponen abiotik penyusun ekosistem tersebut adalah...',
    options: [
      { id: 'A', text: 'Katak, ikan kecil, dan teratai' },
      { id: 'B', text: 'Cahaya matahari, air, dan batu' },
      { id: 'C', text: 'Capung, siput, dan tanaman hidrila' },
      { id: 'D', text: 'Ikan kecil, tanah, dan lumut' },
    ],
    correctAnswer: 'B',
    explanation:
      'Komponen abiotik adalah komponen tak hidup dalam ekosistem. Berdasarkan gambar ekosistem kolam, komponen abiotik meliputi cahaya matahari, air, batu, dan tanah/lumpur. Katak, ikan, teratai, capung, siput, hidrila, dan lumut merupakan komponen biotik (makhluk hidup).',
  },
  {
    id: 2,
    type: 'pg',
    topic: 'Satuan Makhluk Hidup dalam Ekosistem',
    difficulty: 'Mudah',
    text: 'Di halaman sekolah SD Negeri 6 Batuagung terdapat sekelompok 15 batang pohon mangga yang tumbuh bersama di area kebun sekolah. Kumpulan individu sejenis yang menempati wilayah tertentu tersebut disebut...',
    options: [
      { id: 'A', text: 'Individu' },
      { id: 'B', text: 'Populasi' },
      { id: 'C', text: 'Komunitas' },
      { id: 'D', text: 'Bioma' },
    ],
    correctAnswer: 'B',
    explanation:
      'Populasi adalah kumpulan individu sejenis yang hidup bersama di suatu tempat tertentu pada waktu yang sama (contoh: 15 pohon mangga). Satu pohon disebut individu, sedangkan kumpulan berbagai populasi yang saling berinteraksi disebut komunitas.',
  },
  {
    id: 3,
    type: 'pg',
    topic: 'Peran Komponen Biotik (Produsen)',
    difficulty: 'Mudah',
    text: 'Tumbuhan hijau seperti padi, jagung, dan rumput disebut sebagai produsen dalam suatu ekosistem karena mampu...',
    options: [
      { id: 'A', text: 'Memakan hewan pemakan daging' },
      { id: 'B', text: 'Menguraikan sisa makhluk hidup yang telah mati' },
      { id: 'C', text: 'Menghasilkan makanannya sendiri melalui proses fotosintesis' },
      { id: 'D', text: 'Bergerak bebas mencari sumber makanan di alam' },
    ],
    correctAnswer: 'C',
    explanation:
      'Produsen adalah makhluk hidup (terutama tumbuhan berklorofil) yang mampu membuat makanannya sendiri dari air dan karbon dioksida dengan bantuan cahaya matahari melalui fotosintesis.',
  },
  {
    id: 4,
    type: 'pg',
    topic: 'Peran Pengurai (Dekomposer)',
    difficulty: 'Mudah',
    text: 'Pada suatu ekosistem hutan, daun-daun kering yang gugur dan bangkai hewan lama-kelamaan akan hancur dan menyatu kembali dengan tanah menjadi unsur hara yang menyuburkan tanaman. Organisme yang berperan melakukan proses tersebut adalah...',
    options: [
      { id: 'A', text: 'Jamur dan bakteri pengurai' },
      { id: 'B', text: 'Ulat dan belalang' },
      { id: 'C', text: 'Burung hantu dan elang' },
      { id: 'D', text: 'Tumbuhan paku dan lumut' },
    ],
    correctAnswer: 'A',
    explanation:
      'Jamur dan bakteri pengurai berperan sebagai dekomposer yang menguraikan sisa-sisa makhluk hidup (bangkai hewan dan serasah tumbuhan) menjadi zat anorganik (unsur hara) bagi kesuburan tanah.',
  },
  {
    id: 5,
    type: 'pg',
    topic: 'Rantai Makanan Ekosistem Sawah',
    difficulty: 'Sedang',
    imageUrl: imgRantaiSawah,
    imageCaption: 'Skema Rantai Makanan pada Ekosistem Sawah',
    text: 'Perhatikan gambar rantai makanan di ekosistem sawah tersebut! Berdasarkan urutan aliran energi pada gambar, peran hewan katak dalam rantai makanan tersebut adalah sebagai...',
    options: [
      { id: 'A', text: 'Produsen' },
      { id: 'B', text: 'Konsumen tingkat I' },
      { id: 'C', text: 'Konsumen tingkat II' },
      { id: 'D', text: 'Konsumen puncak' },
    ],
    correctAnswer: 'C',
    explanation:
      'Pada gambar rantai makanan sawah: Padi berperan sebagai produsen -> Belalang sebagai konsumen tingkat I (herbivora) -> Katak sebagai konsumen tingkat II (memakan belalang) -> Ular sebagai konsumen tingkat III -> Elang sebagai konsumen puncak.',
  },
  {
    id: 6,
    type: 'pg',
    topic: 'Analisis Perubahan Populasi Rantai Makanan',
    difficulty: 'Sedang',
    text: 'Dalam ekosistem sawah terdapat rantai makanan: Padi → Tikus → Ular → Elang. Apabila petani melakukan perburuan ular secara besar-besaran hingga jumlah ular menurun drastis, dampak langsung yang terjadi pada populasi tikus dan hasil panen padi adalah...',
    options: [
      { id: 'A', text: 'Populasi tikus menurun dan panen padi meningkat' },
      { id: 'B', text: 'Populasi tikus meningkat pesat dan hasil panen padi menurun' },
      { id: 'C', text: 'Populasi elang bertambah banyak karena tikus mudah ditangkap' },
      { id: 'D', text: 'Populasi padi dan tikus sama-sama punah secara bersamaan' },
    ],
    correctAnswer: 'B',
    explanation:
      'Jika ular sebagai predator tikus berkurang drastis, maka jumlah tikus akan berkembang pesat (meningkat). Akibatnya, lebih banyak tanaman padi yang dimakan tikus sehingga hasil panen padi menurun.',
  },
  {
    id: 7,
    type: 'pg',
    topic: 'Rantai Makanan Ekosistem Laut',
    difficulty: 'Sedang',
    text: 'Urutan rantai makanan yang paling tepat pada ekosistem laut dalam adalah...',
    options: [
      { id: 'A', text: 'Ikan besar → Ikan kecil → Zooplankton → Fitoplankton' },
      { id: 'B', text: 'Fitoplankton → Zooplankton → Ikan kecil → Ikan hiu' },
      { id: 'C', text: 'Teratai → Ikan nila → Ular air → Burung bangau' },
      { id: 'D', text: 'Rumput laut → Paus pembunuh → Kepiting → Udang kecil' },
    ],
    correctAnswer: 'B',
    explanation:
      'Pada ekosistem laut, fitoplankton (tumbuhan mikroskopis) bertindak sebagai produsen. Fitoplankton dimakan zooplankton (konsumen I), zooplankton dimakan ikan kecil (konsumen II), dan ikan kecil dimakan predator besar seperti ikan hiu (konsumen puncak).',
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Pengelompokan Hewan Berdasarkan Jenis Makanan',
    difficulty: 'Mudah',
    text: 'Kelompok hewan berikut ini yang seluruh anggotanya termasuk pemakan daging (karnivora) adalah...',
    options: [
      { id: 'A', text: 'Sapi, kambing, dan kelinci' },
      { id: 'B', text: 'Ayam, tikus, dan beruang' },
      { id: 'C', text: 'Elang, harimau, dan ular' },
      { id: 'D', text: 'Belalang, kancil, dan rusa' },
    ],
    correctAnswer: 'C',
    explanation:
      'Elang, harimau, dan ular adalah hewan pemakan daging (karnivora). Sapi, kambing, kelinci, belalang, kancil, dan rusa merupakan herbivora (pemakan tumbuhan). Ayam, tikus, dan beruang termasuk omnivora.',
  },
  {
    id: 9,
    type: 'pg',
    topic: 'Jaring-Jaring Makanan',
    difficulty: 'Sukar',
    imageUrl: imgJaringKebun,
    imageCaption: 'Jaring-Jaring Makanan pada Ekosistem Kebun',
    text: 'Amatilah gambar jaring-jaring makanan di ekosistem kebun di atas! Apabila terjadi wabah penyakit yang menyebabkan seluruh populasi tikus mati, pernyataan analisis yang paling tepat terjadi pada ekosistem kebun tersebut adalah...',
    options: [
      { id: 'A', text: 'Ular kehilangan sumber makanannya sehingga populasinya menurun, sedangkan tanaman jagung tumbuh subur' },
      { id: 'B', text: 'Burung hantu langsung punah karena tidak memiliki sumber makanan lain di kebun' },
      { id: 'C', text: 'Populasi ulat ikut menurun drastis karena tikus merupakan pemangsa ulat' },
      { id: 'D', text: 'Tanaman jagung dan sayuran akan langsung layu karena tidak dimakan tikus' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pada gambar terlihat bahwa ular hanya memperoleh makanan dari tikus, sehingga jika tikus mati semua, populasi ular akan menurun. Sementara itu, tanaman jagung yang sebelumnya dimakan tikus akan berkurang pemangsanya sehingga dapat tumbuh lebih banyak. Burung hantu tidak langsung punah karena masih dapat memangsa burung kecil.',
  },
  {
    id: 10,
    type: 'pg',
    topic: 'Jenis Ekosistem Alami dan Buatan',
    difficulty: 'Mudah',
    text: 'Ekosistem terbentuk secara alami tanpa campur tangan manusia maupun secara buatan yang sengaja dibuat manusia untuk tujuan tertentu. Berikut ini yang merupakan contoh ekosistem buatan adalah...',
    options: [
      { id: 'A', text: 'Hutan hujan tropis, terumbu karang, dan padang gurun' },
      { id: 'B', text: 'Sawah terasering, kolam ikan lele, dan akuarium' },
      { id: 'C', text: 'Sungai Amazon, danau vulkanik, dan hutan bakau alami' },
      { id: 'D', text: 'Laut lepas, sabana, dan muara sungai' },
    ],
    correctAnswer: 'B',
    explanation:
      'Sawah, kolam ikan, waduk, kebun, dan akuarium adalah contoh ekosistem buatan karena dirancang, dibuat, dan dikelola oleh manusia untuk memenuhi kebutuhan tertentu.',
  },
  {
    id: 11,
    type: 'pg',
    topic: 'Simbiosis Komensalisme',
    difficulty: 'Sedang',
    text: 'Tanaman anggrek yang menempel pada batang pohon mangga yang tinggi dapat memperoleh cahaya matahari yang cukup, sedangkan pohon mangga tidak merasa diuntungkan maupun dirugikan oleh keberadaan anggrek tersebut. Pola interaksi antara tanaman anggrek dan pohon mangga disebut...',
    options: [
      { id: 'A', text: 'Simbiosis mutualisme' },
      { id: 'B', text: 'Simbiosis komensalisme' },
      { id: 'C', text: 'Simbiosis parasitisme' },
      { id: 'D', text: 'Kompetisi antarspesies' },
    ],
    correctAnswer: 'B',
    explanation:
      'Simbiosis komensalisme adalah hubungan antara dua makhluk hidup yang berbeda di mana satu pihak diuntungkan (anggrek mendapat tempat tinggi untuk cahaya matahari) dan pihak lain tidak diuntungkan maupun dirugikan (pohon mangga).',
  },
  {
    id: 12,
    type: 'pg',
    topic: 'Simbiosis Parasitisme',
    difficulty: 'Mudah',
    text: 'Di halaman kebun warga, tampak tumbuhan tali putri yang berwarna kuning melilit tanaman pagar. Tali putri tidak memiliki klorofil sehingga menyerap langsung sari makanan dari tanaman pagar hingga tanaman pagar menjadi kurus dan layu. Hubungan tersebut merupakan contoh...',
    options: [
      { id: 'A', text: 'Simbiosis mutualisme karena keduanya saling melengkapi' },
      { id: 'B', text: 'Simbiosis komensalisme karena tanaman pagar tidak terganggu' },
      { id: 'C', text: 'Simbiosis parasitisme karena tali putri diuntungkan sedangkan tanaman pagar dirugikan' },
      { id: 'D', text: 'Predasi karena tali putri memangsa hewan kecil di daun' },
    ],
    correctAnswer: 'C',
    explanation:
      'Simbiosis parasitisme terjadi apabila satu makhluk hidup mendapat keuntungan (tali putri memperoleh zat makanan) sedangkan inangnya dirugikan (tanaman pagar kekurangan nutrisi dan menjadi layu).',
  },
  {
    id: 13,
    type: 'pg',
    topic: 'Simbiosis Mutualisme',
    difficulty: 'Mudah',
    imageUrl: imgSimbiosisAlam,
    imageCaption: 'Dua Contoh Hubungan Simbiosis di Alam',
    text: 'Perhatikan kedua gambar interaksi makhluk hidup di atas (kiri: lebah mengisap nektar bunga matahari; kanan: burung jalak hinggap di punggung kerbau)! Kedua hubungan tersebut menunjukkan jenis simbiosis yang sama, yaitu...',
    options: [
      { id: 'A', text: 'Simbiosis parasitisme, karena lebah dan burung jalak merugikan inangnya' },
      { id: 'B', text: 'Simbiosis komensalisme, karena bunga dan kerbau tidak merasakan dampak apa pun' },
      { id: 'C', text: 'Simbiosis mutualisme, karena kedua pihak sama-sama memperoleh keuntungan' },
      { id: 'D', text: 'Kompetisi, karena keduanya saling berebut tempat hidup di padang rumput' },
    ],
    correctAnswer: 'C',
    explanation:
      'Kedua gambar menunjukkan simbiosis mutualisme (saling menguntungkan): lebah mendapat nektar dan bunga terbantu penyerbukannya; burung jalak mendapat makanan berupa kutu dan kerbau terbebas dari rasa gatal akibat kutu.',
  },
  {
    id: 14,
    type: 'pg',
    topic: 'Interaksi Kompetisi dan Predasi',
    difficulty: 'Sedang',
    text: 'Di sebuah padang rumput, singa berburu dan memangsa seekor zebra untuk memenuhi kebutuhan makanannya. Jenis interaksi antara singa dan zebra dalam ekosistem padang rumput tersebut dinamakan...',
    options: [
      { id: 'A', text: 'Predasi' },
      { id: 'B', text: 'Kompetisi' },
      { id: 'C', text: 'Komensalisme' },
      { id: 'D', text: 'Netralisme' },
    ],
    correctAnswer: 'A',
    explanation:
      'Predasi adalah hubungan antara pemangsa (predator, yaitu singa) dan mangsanya (prey, yaitu zebra). Kompetisi adalah persaingan memperebutkan sumber daya yang sama.',
  },
  {
    id: 15,
    type: 'pg',
    topic: 'Hubungan Komponen Biotik dan Abiotik',
    difficulty: 'Sedang',
    text: 'Cacing tanah membuat lubang-lubang kecil di dalam tanah kebun sehingga udara dan air hujan lebih mudah meresap ke dalam tanah. Peristiwa ini membuktikan bahwa dalam ekosistem terjadi...',
    options: [
      { id: 'A', text: 'Ketergantungan komponen abiotik yang memusnahkan komponen biotik' },
      { id: 'B', text: 'Pengaruh timbal balik antara komponen biotik (cacing) terhadap kualitas komponen abiotik (tanah)' },
      { id: 'C', text: 'Persaingan antara cacing tanah dan tanaman dalam memperebutkan cahaya matahari' },
      { id: 'D', text: 'Proses penghentian daur energi dalam ekosistem kebun' },
    ],
    correctAnswer: 'B',
    explanation:
      'Aktivitas cacing tanah (komponen biotik) menggemburkan dan memperbaiki aerasi tanah (komponen abiotik). Hal ini menunjukkan komponen biotik dapat memengaruhi kondisi komponen abiotik demi kelangsungan ekosistem.',
  },
  {
    id: 16,
    type: 'pg',
    topic: 'Piramida Makanan dan Aliran Energi',
    difficulty: 'Sedang',
    imageUrl: imgPiramidaEnergi,
    imageCaption: 'Piramida Makanan pada Ekosistem Darat',
    text: 'Perhatikan gambar piramida makanan di atas! Mengapa bagian dasar piramida (kelompok tumbuhan/produsen) digambarkan paling lebar dibandingkan tingkatan konsumen di atasnya?',
    options: [
      { id: 'A', text: 'Karena tumbuhan tidak membutuhkan energi matahari untuk bertahan hidup' },
      { id: 'B', text: 'Karena jumlah individu dan energi terbesar berada pada produsen untuk menopang seluruh konsumen di atasnya' },
      { id: 'C', text: 'Karena hewan herbivora lebih sedikit membutuhkan makanan dibandingkan karnivora puncak' },
      { id: 'D', text: 'Karena konsumen puncak seperti elang mampu menghasilkan makanan sendiri' },
    ],
    correctAnswer: 'B',
    explanation:
      'Pada piramida makanan, produsen berada di tingkat dasar yang paling lebar karena memiliki jumlah biomassa dan energi terbesar yang berasal langsung dari matahari. Energi berkurang saat berpindah ke tiap tingkat trofik di atasnya, sehingga jumlah konsumen puncak paling sedikit.',
  },
  {
    id: 17,
    type: 'pg',
    topic: 'Dampak Aktivitas Manusia Terhadap Ekosistem',
    difficulty: 'Sedang',
    text: 'Penangkapan ikan di laut menggunakan bahan peledak atau pukat harimau sangat dilarang oleh pemerintah. Dampak jangka panjang dari tindakan tersebut terhadap keseimbangan ekosistem laut adalah...',
    options: [
      { id: 'A', text: 'Terumbu karang hancur sehingga ikan kecil kehilangan habitat dan berkembang biaknya terganggu' },
      { id: 'B', text: 'Air laut menjadi lebih jernih dan kaya akan oksigen terlarut' },
      { id: 'C', text: 'Populasi fitoplankton meningkat sangat cepat dan menyuburkan terumbu karang' },
      { id: 'D', text: 'Keanekaragaman jenis ikan laut meningkat dua kali lipat' },
    ],
    correctAnswer: 'A',
    explanation:
      'Bahan peledak menghancurkan terumbu karang yang menjadi tempat berlindung, mencari makan, dan berkembang biak berbagai biota laut, sedangkan pukat harimau menjaring ikan kecil yang belum dewasa sehingga merusak regenerasi populasi ikan.',
  },
  {
    id: 18,
    type: 'pg',
    topic: 'Upaya Pelestarian Ekosistem',
    difficulty: 'Mudah',
    text: 'Di wilayah pesisir pantai Bali, masyarakat bersama pemerintah rutin menanam pohon bakau (mangrove). Salah satu manfaat ekologis utama hutan bakau bagi ekosistem pesisir adalah...',
    options: [
      { id: 'A', text: 'Mencegah abrasi pantai serta menjadi tempat berlindung bagi ikan kecil dan kepiting' },
      { id: 'B', text: 'Mengubah air laut yang asin menjadi air tawar siap minum' },
      { id: 'C', text: 'Menghilangkan seluruh populasi burung pemakan ikan di pantai' },
      { id: 'D', text: 'Mempercepat penguapan air laut agar terjadi kemarau panjang' },
    ],
    correctAnswer: 'A',
    explanation:
      'Akar pohon bakau yang kokoh dapat menahan gelombang laut sehingga mencegah abrasi pantai, sekaligus menyediakan habitat alami yang aman bagi kepiting, udang, dan anak-anak ikan.',
  },

  // =========================================================================
  // PILIHAN GANDA KOMPLEKS (3 SOAL: ID 19 - 21) -> 3 Opsi, >1 Jawaban Benar
  // =========================================================================
  {
    id: 19,
    type: 'pgk',
    topic: 'Identifikasi Komponen Biotik Kolam',
    difficulty: 'Sedang',
    imageUrl: imgEkosistemKolam,
    imageCaption: 'Ilustrasi Ekosistem Kolam Air Tawar',
    text: 'Perhatikan kembali gambar ekosistem kolam di atas! Pilihlah dua kelompok komponen yang seluruh anggotanya termasuk KOMPONEN BIOTIK yang tampak pada gambar tersebut!',
    options: [
      { id: 'A', text: 'Katak, capung, dan ikan kecil' },
      { id: 'B', text: 'Bunga teratai, tumbuhan hidrila, dan siput air' },
      { id: 'C', text: 'Cahaya matahari, batu kali, dan air kolam' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      'Komponen biotik adalah makhluk hidup yang tampak pada gambar ekosistem kolam: katak, capung, ikan kecil, bunga teratai, tumbuhan hidrila, dan siput air. Pilihan C (cahaya matahari, batu kali, dan air kolam) merupakan komponen abiotik.',
  },
  {
    id: 20,
    type: 'pgk',
    topic: 'Analisis Jaring-Jaring Makanan & Konsumen',
    difficulty: 'Sukar',
    text: 'Dalam suatu ekosistem padang rumput terdapat tumbuhan rumput, kelinci, belalang, burung pipit, ular, dan burung elang. Rumput dimakan kelinci dan belalang; belalang dimakan burung pipit; kelinci dan burung pipit dimakan ular serta elang. Pilihlah pernyataan yang BENAR mengenai jaring-jaring makanan tersebut! (Jawaban benar lebih dari satu)',
    options: [
      { id: 'A', text: 'Kelinci dan belalang sama-sama berperan sebagai konsumen tingkat I (herbivora)' },
      { id: 'B', text: 'Burung elang memperoleh energi paling besar langsung dari tumbuhan rumput' },
      { id: 'C', text: 'Jika populasi belalang habis, burung pipit akan kekurangan sumber makanan' },
    ],
    correctAnswer: ['A', 'C'],
    explanation:
      'Pernyataan A benar karena kelinci dan belalang sama-sama memakan produsen (rumput). Pernyataan C benar karena burung pipit hanya memakan belalang. Pernyataan B salah karena elang adalah karnivora/konsumen puncak yang tidak memakan rumput secara langsung dan menerima energi paling kecil.',
  },
  {
    id: 21,
    type: 'pgk',
    topic: 'Upaya Menjaga Keseimbangan Ekosistem',
    difficulty: 'Sedang',
    text: 'Keseimbangan ekosistem di lingkungan sekitar perlu dijaga agar seluruh makhluk hidup dapat bertahan hidup secara lestari. Pilihlah tindakan yang TEPAT untuk menjaga keseimbangan ekosistem! (Jawaban benar lebih dari satu)',
    options: [
      { id: 'A', text: 'Melakukan tebang pilih dan reboisasi pada hutan yang gundul' },
      { id: 'B', text: 'Membuang limbah deterjen rumah tangga langsung ke sungai setiap hari' },
      { id: 'C', text: 'Menggunakan musuh alami hama (seperti burung hantu pemangsa tikus) di sawah daripada pestisida berlebihan' },
    ],
    correctAnswer: ['A', 'C'],
    explanation:
      'Tebang pilih, reboisasi, dan pengendalian hama secara hayati (menggunakan burung hantu untuk mengendalikan tikus sawah) menjaga kelestarian rantai makanan. Membuang limbah deterjen ke sungai mencemari air dan mematikan biota perairan.',
  },

  // =========================================================================
  // PGK KATEGORI BENAR / SALAH (9 SOAL: ID 22 - 30) -> 3 Pernyataan per Soal
  // =========================================================================
  {
    id: 22,
    type: 'pgk_kategori',
    topic: 'Komponen Biotik dan Abiotik',
    difficulty: 'Sukar',
    text: 'Ekosistem tersusun atas interaksi erat antara komponen biotik dan abiotik. Tentukan apakah pernyataan mengenai hubungan antar-komponen ekosistem berikut bernilai BENAR atau SALAH!',
    statements: [
      {
        id: 's1',
        text: 'Cahaya matahari merupakan komponen abiotik utama yang dibutuhkan tumbuhan hijau untuk berfotosintesis.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Ekosistem dapat tetap bertahan selamanya meskipun seluruh komponen abiotik seperti air dan udara dihilangkan.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Kadar oksigen terlarut di dalam air memengaruhi kelangsungan hidup ikan dan organisme air lainnya.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan 1 Benar: matahari menjadi sumber energi utama fotosintesis. Pernyataan 2 Salah: makhluk hidup sangat bergantung pada air, udara, suhu, dan cahaya (abiotik). Pernyataan 3 Benar: ikan bernapas menggunakan oksigen terlarut di air.',
  },
  {
    id: 23,
    type: 'pgk_kategori',
    topic: 'Analisis Rantai Makanan Sawah',
    difficulty: 'Sedang',
    imageUrl: imgRantaiSawah,
    imageCaption: 'Skema Rantai Makanan pada Ekosistem Sawah',
    text: 'Perhatikan gambar rantai makanan ekosistem sawah di atas! Tentukan nilai kebenaran (BENAR atau SALAH) dari ketiga pernyataan berikut berdasarkan gambar tersebut!',
    statements: [
      {
        id: 's1',
        text: 'Tanaman padi pada awal rantai makanan berperan sebagai produsen yang menghasilkan energi dari cahaya matahari.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Ular pada gambar rantai makanan tersebut berperan sebagai konsumen tingkat I.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Jika populasi katak menurun drastis akibat perburuan, populasi belalang berpotensi meningkat pesat.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan 1 Benar: padi adalah produsen. Pernyataan 2 Salah: ular memakan katak (konsumen II), sehingga ular berperan sebagai konsumen tingkat III, bukan konsumen I. Pernyataan 3 Benar: katak adalah pemangsa belalang, sehingga jika katak berkurang maka belalang berkembang banyak.',
  },
  {
    id: 24,
    type: 'pgk_kategori',
    topic: 'Ragam Hubungan Simbiosis',
    difficulty: 'Sedang',
    text: 'Di alam terjadi berbagai macam interaksi simbiosis antar makhluk hidup. Tentukan apakah ketiga contoh interaksi simbiosis berikut bernilai BENAR atau SALAH!',
    statements: [
      {
        id: 's1',
        text: 'Hubungan antara ikan remora yang berenang mengikuti ikan hiu untuk mendapat sisa makanan merupakan simbiosis komensalisme.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Hubungan antara nyamuk yang mengisap darah manusia termasuk simbiosis mutualisme karena sama-sama untung.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Hubungan antara benalu yang menempel pada dahan pohon jambu untuk mengambil air dan zat hara termasuk simbiosis parasitisme.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan 1 Benar: ikan remora diuntungkan (mendapat sisa makanan & perlindungan), hiu tidak dirugikan maupun diuntungkan (komensalisme). Pernyataan 2 Salah: nyamuk merugikan manusia (parasitisme). Pernyataan 3 Benar: benalu menyerap nutrisi inang sehingga merugikan pohon jambu (parasitisme).',
  },
  {
    id: 25,
    type: 'pgk_kategori',
    topic: 'Peran Makhluk Hidup dalam Ekosistem',
    difficulty: 'Sedang',
    text: 'Setiap organisme memiliki peran khusus dalam menjaga aliran energi ekosistem. Tentukan apakah pernyataan mengenai peran makhluk hidup berikut bernilai BENAR atau SALAH!',
    statements: [
      {
        id: 's1',
        text: 'Semua jenis tumbuhan hijau termasuk produsen karena memiliki klorofil untuk mengolah zat makanan.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Hewan herbivora seperti kambing dan kelinci selalu menempati posisi konsumen tingkat II.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Bakteri dan jamur pengurai membantu mengembalikan unsur hara ke tanah agar dapat diserap kembali oleh tumbuhan.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan 1 Benar. Pernyataan 2 Salah: herbivora memakan produsen secara langsung sehingga selalu menempati posisi konsumen tingkat I. Pernyataan 3 Benar: dekomposer mendaur ulang materi organik menjadi hara tanah.',
  },
  {
    id: 26,
    type: 'pgk_kategori',
    topic: 'Piramida Energi & Perpindahan Energi',
    difficulty: 'Sedang',
    text: 'Dalam ekosistem terjadi aliran energi dari matahari ke produsen hingga konsumen puncak. Tentukan apakah pernyataan mengenai aliran energi dan piramida makanan berikut bernilai BENAR atau SALAH!',
    statements: [
      {
        id: 's1',
        text: 'Semakin tinggi tingkatan trofik pada piramida makanan, jumlah energi yang tersedia semakin berkurang.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Seluruh 100% energi dari tumbuhan yang dimakan belalang akan berpindah utuh ke tubuh katak.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Sebagian energi yang diterima makhluk hidup digunakan untuk bergerak, tumbuh, dan dilepaskan sebagai panas.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan 1 Benar: energi semakin mengecil menuju puncak piramida. Pernyataan 2 Salah: hanya sekitar 10% energi yang diteruskan ke tingkat trofik berikutnya. Pernyataan 3 Benar: sebagian besar energi terpakai untuk aktivitas metabolisme dan dilepaskan sebagai panas.',
  },
  {
    id: 27,
    type: 'pgk_kategori',
    topic: 'Analisis Jaring-Jaring Makanan Kebun',
    difficulty: 'Sukar',
    imageUrl: imgJaringKebun,
    imageCaption: 'Jaring-Jaring Makanan pada Ekosistem Kebun',
    text: 'Perhatikan kembali gambar jaring-jaring makanan di ekosistem kebun! Tentukan nilai kebenaran (BENAR atau SALAH) untuk setiap pernyataan berikut!',
    statements: [
      {
        id: 's1',
        text: 'Burung hantu menempati posisi konsumen puncak karena memangsa burung kecil dan ular serta tidak dimangsa hewan lain pada gambar.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Ulat, belalang, dan tikus sama-sama berperan sebagai konsumen tingkat I karena memperoleh makanan langsung dari tumbuhan.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Pada gambar tersebut, ular memperoleh energi secara langsung dengan memakan tanaman jagung.',
        correctAnswer: false,
      },
    ],
    explanation:
      'Pernyataan 1 Benar: tanda panah mengarah ke burung hantu dari burung kecil dan ular. Pernyataan 2 Benar: panah dari sayuran/jagung langsung menuju ulat, belalang, dan tikus. Pernyataan 3 Salah: panah menuju ular berasal dari tikus, bukan langsung dari tanaman jagung.',
  },
  {
    id: 28,
    type: 'pgk_kategori',
    topic: 'Adaptasi dan Habitat Ekosistem',
    difficulty: 'Mudah',
    text: 'Setiap ekosistem memiliki karakteristik kondisi lingkungan dan makhluk hidup yang khas. Tentukan apakah pernyataan mengenai jenis-jenis ekosistem berikut bernilai BENAR atau SALAH!',
    statements: [
      {
        id: 's1',
        text: 'Tumbuhan kaktus memiliki batang tebal berair dan daun berbentuk duri untuk beradaptasi di ekosistem gurun yang kering.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Ekosistem tundra merupakan daerah bersuhu sangat panas dengan curah hujan yang sangat tinggi sepanjang tahun.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Ekosistem estuari (muara sungai) merupakan tempat pertemuan antara air tawar sungai dan air asin laut.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan 1 Benar: duri mengurangi penguapan dan batang menyimpan air di gurun. Pernyataan 2 Salah: tundra merupakan ekosistem sangat dingin (daerah kutub), sedangkan yang panas dan bercurah hujan tinggi adalah hutan hujan tropis. Pernyataan 3 Benar: estuari adalah perairan payau tempat bertemunya sungai dan laut.',
  },
  {
    id: 29,
    type: 'pgk_kategori',
    topic: 'Dampak Pencemaran & Perubahan Ekosistem',
    difficulty: 'Sedang',
    text: 'Aktivitas manusia sangat memengaruhi kelestarian ekosistem perairan dan daratan. Tentukan nilai kebenaran (BENAR atau SALAH) dari pernyataan mengenai dampak gangguan ekosistem berikut!',
    statements: [
      {
        id: 's1',
        text: 'Penggunaan pupuk kimia secara berlebihan yang hanyut ke danau dapat memicu ledakan pertumbuhan eceng gondok atau alga (eutrofikasi).',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Pembakaran hutan untuk pembukaan lahan meningkatkan keanekaragaman satwa liar yang hidup di hutan tersebut.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Berkurangnya daerah resapan air akibat penebangan pohon di hulu sungai dapat menyebabkan banjir dan tanah longsor di musim hujan.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan 1 Benar: sisa pupuk memicu eutrofikasi yang menutupi permukaan air dan mengurangi oksigen bagi ikan. Pernyataan 2 Salah: pembakaran hutan merusak habitat dan menurunkan keanekaragaman hayati. Pernyataan 3 Benar: akar pohon berfungsi menahan air hujan dan struktur tanah.',
  },
  {
    id: 30,
    type: 'pgk_kategori',
    topic: 'Studi Kasus Keseimbangan Ekosistem',
    difficulty: 'Sukar',
    text: 'Di Desa Batuagung, sebagian petani menyemprotkan insektisida kimia dosis tinggi ke sawah untuk membasmi belalang, sementara sebagian lainnya memelihara burung pemakan serangga di sekitar pematang sawah. Tentukan apakah kesimpulan analisis berikut bernilai BENAR atau SALAH!',
    statements: [
      {
        id: 's1',
        text: 'Penyemprotan insektisida dosis tinggi secara terus-menerus berisiko ikut mematikan serangga penyerbuk seperti lebah serta mencemari tanah.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Memanfaatkan burung pemakan serangga di pematang sawah merupakan cara pengendalian hama ramah lingkungan yang menjaga rantai makanan alami.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Semakin banyak pestisida kimia yang disemprotkan ke sawah, maka keseimbangan alami ekosistem sawah akan semakin sehat dan stabil.',
        correctAnswer: false,
      },
    ],
    explanation:
      'Pernyataan 1 Benar: pestisida kimia berlebih membunuh organisme non-target (lebah, cacing, katak) dan meninggalkan residu di tanah. Pernyataan 2 Benar: pengendalian hayati memanfaatkan predator alami untuk menekan populasi hama. Pernyataan 3 Salah: kelebihan pestisida justru merusak keseimbangan ekosistem.',
  },
];
