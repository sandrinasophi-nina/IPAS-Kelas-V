import { Question, QuestionBlueprint, CognitiveLevel, Difficulty } from '../types';

/**
 * Data Acuan Matriks Kisi-Kisi Penulisan Soal Tes Sumatif
 * Kurikulum Merdeka - Fase C (Kelas V) Mata Pelajaran IPAS - Materi Ekosistem
 */

export interface BlueprintDefinition {
  elemen: string;
  tujuanPembelajaran: string;
  indikatorSoal: string;
  levelKognitif: CognitiveLevel;
  bobotSkor: number;
}

// Peta acuan default 30 butir soal IPAS Ekosistem Kurikulum Merdeka
export const DEFAULT_BLUEPRINT_MAP: Record<number, BlueprintDefinition> = {
  1: {
    elemen: 'Komponen Ekosistem',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi komponen biotik dan abiotik penyusun suatu ekosistem di lingkungan sekitar.',
    indikatorSoal:
      'Disajikan gambar ekosistem kolam air tawar, peserta didik dapat menentukan kelompok komponen abiotik yang terdapat pada gambar tersebut.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  2: {
    elemen: 'Komponen Ekosistem',
    tujuanPembelajaran:
      'Peserta didik dapat membedakan satuan makhluk hidup dalam ekosistem (individu, populasi, dan komunitas).',
    indikatorSoal:
      'Disajikan narasi sekelompok tumbuhan sejenis di area kebun sekolah, peserta didik dapat menentukan istilah satuan makhluk hidup yang tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  3: {
    elemen: 'Rantai & Jaring Makanan',
    tujuanPembelajaran:
      'Peserta didik dapat menjelaskan peran tumbuhan hijau sebagai produsen dalam ekosistem.',
    indikatorSoal:
      'Peserta didik dapat menentukan alasan ilmiah mengapa tumbuhan hijau berperan sebagai produsen dalam suatu ekosistem.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  4: {
    elemen: 'Rantai & Jaring Makanan',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi peran organisme pengurai (dekomposer) dalam daur materi ekosistem.',
    indikatorSoal:
      'Disajikan peristiwa pelapukan daun kering dan bangkai hewan menjadi unsur hara tanah, peserta didik dapat menentukan organisme pengurai yang berperan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  5: {
    elemen: 'Rantai & Jaring Makanan',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis peran tiap makhluk hidup dalam skema rantai makanan ekosistem sawah.',
    indikatorSoal:
      'Disajikan gambar rantai makanan di sawah (padi-belalang-katak-ular-elang), peserta didik dapat menentukan peran hewan katak pada rantai makanan tersebut.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  6: {
    elemen: 'Keseimbangan & Pelestarian Ekosistem',
    tujuanPembelajaran:
      'Peserta didik dapat memprediksi dampak perubahan salah satu populasi terhadap keseimbangan rantai makanan.',
    indikatorSoal:
      'Disajikan rantai makanan sawah dan kondisi perburuan ular secara besar-besaran, peserta didik dapat menentukan dampak langsung terhadap populasi tikus dan hasil panen padi.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  7: {
    elemen: 'Rantai & Jaring Makanan',
    tujuanPembelajaran:
      'Peserta didik dapat menyusun urutan rantai makanan yang sesuai pada ekosistem perairan laut.',
    indikatorSoal:
      'Peserta didik dapat menganalisis dan memilih urutan rantai makanan ekosistem laut yang paling tepat mulai dari produsen hingga konsumen puncak.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  8: {
    elemen: 'Komponen Ekosistem',
    tujuanPembelajaran:
      'Peserta didik dapat mengelompokkan hewan berdasarkan jenis makanannya (herbivora, karnivora, omnivora).',
    indikatorSoal:
      'Disajikan beberapa kelompok hewan, peserta didik dapat mengidentifikasi kelompok hewan yang seluruh anggotanya pemakan daging (karnivora).',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  9: {
    elemen: 'Rantai & Jaring Makanan',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis keterkaitan antar rantai makanan dalam sebuah jaring-jaring makanan.',
    indikatorSoal:
      'Disajikan gambar jaring-jaring makanan ekosistem kebun, peserta didik dapat memprediksi dampak apabila populasi tikus mengalami kematian massal.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  10: {
    elemen: 'Komponen Ekosistem',
    tujuanPembelajaran:
      'Peserta didik dapat membedakan ekosistem alami dan ekosistem buatan beserta contohnya.',
    indikatorSoal:
      'Peserta didik dapat mengidentifikasi kelompok contoh ekosistem buatan yang dikelola manusia.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  11: {
    elemen: 'Interaksi & Simbiosis',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi pola interaksi simbiosis komensalisme di lingkungan sekitar.',
    indikatorSoal:
      'Disajikan ilustrasi tanaman anggrek yang menempel pada batang pohon mangga, peserta didik dapat menentukan jenis simbiosis yang terjadi.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  12: {
    elemen: 'Interaksi & Simbiosis',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis ciri hubungan simbiosis parasitisme antara inang dan parasit.',
    indikatorSoal:
      'Disajikan kasus tumbuhan tali putri yang menyerap sari makanan dari tanaman pagar hingga layu, peserta didik dapat menjelaskan jenis simbiosis dan alasannya.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  13: {
    elemen: 'Interaksi & Simbiosis',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi contoh hubungan simbiosis mutualisme dari pengamatan visual.',
    indikatorSoal:
      'Disajikan gambar lebah pada bunga matahari dan burung jalak di punggung kerbau, peserta didik dapat menyimpulkan jenis simbiosis pada kedua gambar.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  14: {
    elemen: 'Interaksi & Simbiosis',
    tujuanPembelajaran:
      'Peserta didik dapat membedakan pola interaksi predasi dan kompetisi dalam suatu ekosistem.',
    indikatorSoal:
      'Disajikan narasi singa yang berburu dan memangsa zebra di padang rumput, peserta didik dapat menentukan jenis interaksi ekologis yang terjadi.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  15: {
    elemen: 'Komponen Ekosistem',
    tujuanPembelajaran:
      'Peserta didik dapat menjelaskan hubungan timbal balik antara komponen biotik dan abiotik.',
    indikatorSoal:
      'Disajikan peran cacing tanah dalam menggemburkan tanah kebun, peserta didik dapat menyimpulkan bentuk interaksi antara komponen biotik dan abiotik.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  16: {
    elemen: 'Piramida Energi & Aliran Energi',
    tujuanPembelajaran:
      'Peserta didik dapat menjelaskan konsep piramida makanan dan distribusi energi pada tiap tingkat trofik.',
    indikatorSoal:
      'Disajikan gambar piramida makanan ekosistem darat, peserta didik dapat menjelaskan alasan bagian dasar piramida (produsen) berukuran paling lebar.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  17: {
    elemen: 'Keseimbangan & Pelestarian Ekosistem',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis dampak aktivitas manusia yang merusak ekosistem perairan laut.',
    indikatorSoal:
      'Disajikan kasus penangkapan ikan dengan bahan peledak dan pukat harimau, peserta didik dapat menentukan dampak jangka panjangnya bagi ekosistem laut.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  18: {
    elemen: 'Keseimbangan & Pelestarian Ekosistem',
    tujuanPembelajaran:
      'Peserta didik dapat menjelaskan manfaat upaya pelestarian ekosistem pesisir melalui penanaman bakau.',
    indikatorSoal:
      'Disajikan upaya penanaman pohon bakau di pesisir pantai, peserta didik dapat menentukan manfaat ekologis utamanya bagi lingkungan pesisir.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  19: {
    elemen: 'Komponen Ekosistem',
    tujuanPembelajaran:
      'Peserta didik dapat mengklasifikasikan berbagai komponen biotik dari pengamatan gambar ekosistem kolam.',
    indikatorSoal:
      'Disajikan gambar ekosistem kolam dan 3 pilihan kelompok komponen, peserta didik dapat memilih semua kelompok yang termasuk komponen biotik.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  20: {
    elemen: 'Rantai & Jaring Makanan',
    tujuanPembelajaran:
      'Peserta didik dapat mengevaluasi kebenaran peran dan dampak perubahan populasi dalam jaring-jaring makanan.',
    indikatorSoal:
      'Disajikan deskripsi jaring-jaring makanan padang rumput dan 3 pilihan pernyataan, peserta didik dapat memilih seluruh pernyataan yang benar.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  21: {
    elemen: 'Keseimbangan & Pelestarian Ekosistem',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan tindakan pelestarian yang tepat untuk menjaga keseimbangan ekosistem.',
    indikatorSoal:
      'Disajikan 3 pilihan tindakan manusia terhadap lingkungan, peserta didik dapat memilih seluruh tindakan yang tepat untuk menjaga keseimbangan ekosistem.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  22: {
    elemen: 'Komponen Ekosistem',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis ketergantungan makhluk hidup terhadap komponen abiotik utama.',
    indikatorSoal:
      'Disajikan 3 pernyataan mengenai peran cahaya matahari, air, udara, dan oksigen terlarut, peserta didik dapat menilai kebenaran (Benar/Salah) masing-masing pernyataan.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  23: {
    elemen: 'Rantai & Jaring Makanan',
    tujuanPembelajaran:
      'Peserta didik dapat menafsirkan peran trofik dan dampak perubahan populasi pada gambar rantai makanan sawah.',
    indikatorSoal:
      'Disajikan gambar rantai makanan sawah dan 3 pernyataan terkait produsen, konsumen, serta dampak punahnya katak, peserta didik dapat menentukan nilai Benar/Salah tiap pernyataan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  24: {
    elemen: 'Interaksi & Simbiosis',
    tujuanPembelajaran:
      'Peserta didik dapat membedakan contoh simbiosis mutualisme, komensalisme, dan parasitisme.',
    indikatorSoal:
      'Disajikan 3 deskripsi pasangan interaksi makhluk hidup (ikan remora-hiu, nyamuk-manusia, benalu-pohon jambu), peserta didik dapat menentukan nilai kebenaran Benar/Salah.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  25: {
    elemen: 'Rantai & Jaring Makanan',
    tujuanPembelajaran:
      'Peserta didik dapat mengevaluasi peran produsen, herbivora, dan dekomposer dalam ekosistem.',
    indikatorSoal:
      'Disajikan 3 pernyataan tentang peran tumbuhan hijau, tingkat trofik herbivora, dan peran pengurai, peserta didik dapat menilai kebenaran (Benar/Salah) tiap pernyataan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  26: {
    elemen: 'Piramida Energi & Aliran Energi',
    tujuanPembelajaran:
      'Peserta didik dapat menjelaskan prinsip berkurangnya energi pada setiap perpindahan tingkat trofik.',
    indikatorSoal:
      'Disajikan 3 pernyataan tentang jumlah energi pada piramida makanan dan pemanfaatan energi oleh organisme, peserta didik dapat menentukan nilai Benar/Salah.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  27: {
    elemen: 'Rantai & Jaring Makanan',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis jalur aliran energi dan posisi konsumen pada gambar jaring-jaring makanan.',
    indikatorSoal:
      'Disajikan gambar jaring-jaring makanan ekosistem kebun dan 3 pernyataan tentang konsumen puncak, herbivora, serta sumber energi ular, peserta didik dapat menentukan nilai Benar/Salah.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  28: {
    elemen: 'Komponen Ekosistem',
    tujuanPembelajaran:
      'Peserta didik dapat mengenali karakteristik habitat berbagai ekosistem darat dan perairan.',
    indikatorSoal:
      'Disajikan 3 deskripsi tentang ekosistem gurun (kaktus), tundra, dan estuari, peserta didik dapat menentukan nilai kebenaran (Benar/Salah) masing-masing pernyataan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  29: {
    elemen: 'Keseimbangan & Pelestarian Ekosistem',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis dampak pencemaran air, pembakaran hutan, dan penebangan liar terhadap ekosistem.',
    indikatorSoal:
      'Disajikan 3 pernyataan mengenai eutrofikasi pupuk kimia, pembakaran hutan, dan penebangan pohon hulu, peserta didik dapat menentukan nilai Benar/Salah tiap pernyataan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  30: {
    elemen: 'Keseimbangan & Pelestarian Ekosistem',
    tujuanPembelajaran:
      'Peserta didik dapat membandingkan dampak pengendalian hama secara kimiawi dan secara hayati terhadap ekosistem sawah.',
    indikatorSoal:
      'Disajikan studi kasus penggunaan insektisida kimia vs pemeliharaan burung pemakan serangga di sawah, peserta didik dapat menilai kebenaran (Benar/Salah) 3 pernyataan analisis.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
};

/**
 * Format label bentuk soal
 */
export function getBentukSoalLabel(type: string): string {
  switch (type) {
    case 'pg':
      return 'Pilihan Ganda (PG)';
    case 'pgk':
      return 'Pilihan Ganda Kompleks (PGK)';
    case 'pgk_kategori':
      return 'Benar / Salah (PGK Kategori)';
    default:
      return 'Pilihan Ganda';
  }
}

/**
 * Format label level kognitif
 */
export function getCognitiveLevelLabel(level: CognitiveLevel): string {
  switch (level) {
    case 'L1':
      return 'L1 (Pemahaman / Mengingat)';
    case 'L2':
      return 'L2 (Aplikasi / Penerapan)';
    case 'L3':
      return 'L3 (Penalaran / Analisis HOTS)';
    default:
      return 'L2 (Aplikasi)';
  }
}

/**
 * Mendapatkan format string ringkas kunci jawaban
 */
export function formatCorrectAnswer(q: Question): string {
  if (q.type === 'pg') {
    return typeof q.correctAnswer === 'string' ? q.correctAnswer : 'A';
  }
  if (q.type === 'pgk') {
    if (Array.isArray(q.correctAnswer)) {
      return q.correctAnswer.join(', ');
    }
    return String(q.correctAnswer || 'A');
  }
  if (q.type === 'pgk_kategori') {
    if (q.statements && q.statements.length > 0) {
      return q.statements
        .map((st, i) => `${i + 1}:${st.correctAnswer ? 'B' : 'S'}`)
        .join(', ');
    }
    return 'B/S';
  }
  return '-';
}

/**
 * Menghasilkan metadata blueprint lengkap untuk butir soal tertentu
 */
export function getQuestionBlueprint(q: Question, index: number): QuestionBlueprint {
  const def = DEFAULT_BLUEPRINT_MAP[q.id];

  const elemen =
    q.elemen ||
    (def ? def.elemen : inferElemenFromTopic(q.topic));

  const levelKognitif: CognitiveLevel =
    q.levelKognitif ||
    (def ? def.levelKognitif : inferLevelFromDifficulty(q.difficulty));

  const tujuanPembelajaran =
    q.tujuanPembelajaran ||
    (def
      ? def.tujuanPembelajaran
      : `Peserta didik mampu memahami dan menerapkan konsep ${q.topic} pada materi Ekosistem IPAS.`);

  const indikatorSoal =
    q.indikatorSoal ||
    (def
      ? def.indikatorSoal
      : `Disajikan stimulus permasalahan tentang ${q.topic}, peserta didik dapat menentukan jawaban yang tepat.`);

  const bobotSkor = q.bobot || (def ? def.bobotSkor : 1);

  return {
    questionId: q.id,
    noSoal: index + 1,
    elemen,
    tujuanPembelajaran,
    materiPokok: q.topic,
    indikatorSoal,
    levelKognitif,
    levelKognitifLabel: getCognitiveLevelLabel(levelKognitif),
    bentukSoal: getBentukSoalLabel(q.type),
    kunciJawaban: formatCorrectAnswer(q),
    bobotSkor,
    difficulty: q.difficulty,
  };
}

function inferElemenFromTopic(topic: string): string {
  const t = topic.toLowerCase();
  if (t.includes('abiotik') || t.includes('biotik') || t.includes('satuan') || t.includes('habitat') || t.includes('ekosistem alami')) {
    return 'Komponen Ekosistem';
  }
  if (t.includes('rantai') || t.includes('jaring') || t.includes('produsen') || t.includes('pengurai') || t.includes('peran')) {
    return 'Rantai & Jaring Makanan';
  }
  if (t.includes('piramida') || t.includes('energi')) {
    return 'Piramida Energi & Aliran Energi';
  }
  if (t.includes('simbiosis') || t.includes('predasi') || t.includes('kompetisi') || t.includes('interaksi')) {
    return 'Interaksi & Simbiosis';
  }
  if (t.includes('keseimbangan') || t.includes('pelestarian') || t.includes('dampak') || t.includes('pencemaran')) {
    return 'Keseimbangan & Pelestarian Ekosistem';
  }
  return 'Komponen Ekosistem';
}

function inferLevelFromDifficulty(diff: Difficulty): CognitiveLevel {
  if (diff === 'Mudah') return 'L1';
  if (diff === 'Sukar') return 'L3';
  return 'L2';
}

/**
 * Menghitung rekapitulasi distribusi kisi-kisi soal
 */
export function getBlueprintStatistics(questions: Question[]) {
  const total = questions.length;
  const blueprints = questions.map((q, idx) => getQuestionBlueprint(q, idx));

  const elemenCountMap: Record<string, number> = {};
  const levelCountMap: Record<CognitiveLevel, number> = { L1: 0, L2: 0, L3: 0 };
  const diffCountMap: Record<Difficulty, number> = { Mudah: 0, Sedang: 0, Sukar: 0 };
  const typeCountMap: Record<string, number> = { pg: 0, pgk: 0, pgk_kategori: 0 };

  blueprints.forEach((bp, idx) => {
    elemenCountMap[bp.elemen] = (elemenCountMap[bp.elemen] || 0) + 1;
    levelCountMap[bp.levelKognitif] = (levelCountMap[bp.levelKognitif] || 0) + 1;
    const q = questions[idx];
    if (q) {
      diffCountMap[q.difficulty] = (diffCountMap[q.difficulty] || 0) + 1;
      typeCountMap[q.type] = (typeCountMap[q.type] || 0) + 1;
    }
  });

  const elemenDistribution = Object.entries(elemenCountMap).map(([elemen, count]) => ({
    elemen,
    count,
    percentage: total > 0 ? Math.round((count / total) * 100) : 0,
  }));

  const levelDistribution = [
    {
      level: 'L1' as const,
      label: 'L1 (Pemahaman / C1-C2)',
      desc: 'Mengingat & Memahami konsep dasar',
      count: levelCountMap.L1,
      percentage: total > 0 ? Math.round((levelCountMap.L1 / total) * 100) : 0,
      color: 'blue',
    },
    {
      level: 'L2' as const,
      label: 'L2 (Aplikasi / C3)',
      desc: 'Menerapkan konsep pada konteks nyata',
      count: levelCountMap.L2,
      percentage: total > 0 ? Math.round((levelCountMap.L2 / total) * 100) : 0,
      color: 'emerald',
    },
    {
      level: 'L3' as const,
      label: 'L3 (Penalaran / C4-C6 HOTS)',
      desc: 'Menganalisis & memecahkan masalah kompleks',
      count: levelCountMap.L3,
      percentage: total > 0 ? Math.round((levelCountMap.L3 / total) * 100) : 0,
      color: 'amber',
    },
  ];

  const difficultyDistribution = [
    {
      difficulty: 'Mudah' as const,
      count: diffCountMap.Mudah,
      percentage: total > 0 ? Math.round((diffCountMap.Mudah / total) * 100) : 0,
      color: 'emerald',
    },
    {
      difficulty: 'Sedang' as const,
      count: diffCountMap.Sedang,
      percentage: total > 0 ? Math.round((diffCountMap.Sedang / total) * 100) : 0,
      color: 'blue',
    },
    {
      difficulty: 'Sukar' as const,
      count: diffCountMap.Sukar,
      percentage: total > 0 ? Math.round((diffCountMap.Sukar / total) * 100) : 0,
      color: 'rose',
    },
  ];

  const typeDistribution = [
    {
      type: 'pg',
      label: 'Pilihan Ganda (PG)',
      count: typeCountMap.pg,
      percentage: total > 0 ? Math.round((typeCountMap.pg / total) * 100) : 0,
    },
    {
      type: 'pgk',
      label: 'Pilihan Ganda Kompleks (PGK)',
      count: typeCountMap.pgk,
      percentage: total > 0 ? Math.round((typeCountMap.pgk / total) * 100) : 0,
    },
    {
      type: 'pgk_kategori',
      label: 'Benar / Salah (PGK Kategori)',
      count: typeCountMap.pgk_kategori,
      percentage: total > 0 ? Math.round((typeCountMap.pgk_kategori / total) * 100) : 0,
    },
  ];

  return {
    total,
    blueprints,
    elemenDistribution,
    levelDistribution,
    difficultyDistribution,
    typeDistribution,
  };
}
