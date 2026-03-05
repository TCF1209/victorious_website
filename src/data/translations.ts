import { Language } from '@/types';

type TranslationKeys = {
  // Navbar
  nav_about: string;
  nav_schedule: string;
  nav_coaches: string;
  nav_achievements: string;
  nav_videos: string;
  nav_contact: string;

  // Hero
  hero_tagline: string;
  hero_view_schedule: string;
  hero_contact: string;

  // Stats
  stats_years: string;
  stats_students: string;
  stats_medals: string;
  stats_locations: string;

  // About
  about_title: string;
  about_p1: string;
  about_p2: string;

  // Why Choose Us
  why_title: string;
  why_certified: string;
  why_certified_desc: string;
  why_small_class: string;
  why_small_class_desc: string;
  why_competition: string;
  why_competition_desc: string;
  why_structured: string;
  why_structured_desc: string;
  why_sparring: string;
  why_sparring_desc: string;

  // Schedule
  schedule_title: string;
  schedule_group_note: string;
  schedule_personal_note: string;
  schedule_personal_timing: string;
  schedule_personal_location: string;
  schedule_personal_availability: string;
  schedule_personal_recommended: string;

  // Coaches
  coaches_title: string;
  coaches_head_coach: string;
  coaches_assistant_head_coach: string;
  coaches_senior_coaches: string;
  coaches_junior_coaches: string;
  coaches_background: string;
  coaches_tournament_results: string;
  coaches_view_more: string;
  coaches_close: string;

  // Achievements
  achievements_title: string;
  achievements_full_results: string;
  achievements_view_more: string;
  achievements_close: string;

  // Testimonials
  testimonials_title: string;

  // Videos
  videos_title: string;

  // Contact
  contact_title: string;
  contact_whatsapp: string;
  contact_whatsapp_message: string;
  contact_parent_name: string;
  contact_student_name: string;
  contact_student_age: string;
  contact_phone: string;
  contact_preferred_location: string;
  contact_message: string;
  contact_submit: string;
  contact_success: string;
  contact_select_location: string;

  // Footer
  footer_tagline: string;
  footer_quick_links: string;
  footer_contact_info: string;
  footer_locations: string;
  footer_copyright: string;
};

export const translations: Record<Language, TranslationKeys> = {
  en: {
    nav_about: 'About',
    nav_schedule: 'Schedule',
    nav_coaches: 'Coaches',
    nav_achievements: 'Achievements',
    nav_videos: 'Videos',
    nav_contact: 'Contact',

    hero_tagline: "Let's Strive Together",
    hero_view_schedule: 'View Schedule',
    hero_contact: 'Contact Us',

    stats_years: 'Years Experience',
    stats_students: 'Students Trained',
    stats_medals: 'Medals Won',
    stats_locations: 'Training Locations',

    about_title: 'About Our Academy',
    about_p1: 'Victorious Badminton Academy is committed to developing the badminton skills and talents of our students. With experienced coaches and structured training programs, we help students reach their full potential in badminton.',
    about_p2: 'We offer high-quality training for all levels — from beginners to high-performing athletes.',

    why_title: 'Why Choose Us',
    why_certified: 'Experienced Coaches',
    why_certified_desc: 'Led by a BAM-certified head coach, our coaching team brings years of competitive tournament experience and hands-on training expertise.',
    why_small_class: 'Small Class Sizes',
    why_small_class_desc: 'Maximum 6 students per group ensures personalized attention and faster improvement.',
    why_competition: 'Competition Track Record',
    why_competition_desc: 'Our students consistently win medals at school, district, and state level tournaments.',
    why_structured: 'Structured Training',
    why_structured_desc: 'Progressive curriculum designed to develop technique, fitness, and game strategy.',
    why_sparring: 'Sparring & Game Play',
    why_sparring_desc: 'We provide sparring opportunities where players compete with senior players or coaches, gaining real match experience and improving decision-making under pressure.',

    schedule_title: 'Training Schedule',
    schedule_group_note: 'Group Class Schedule',
    schedule_personal_note: 'Personal Training (1on1, 1on2, 1on4)',
    schedule_personal_timing: 'Timing is Flexible',
    schedule_personal_location: 'Location is Flexible (Klang Area)',
    schedule_personal_availability: 'Kids (Age 5-17) / Adult Personal Class Available',
    schedule_personal_recommended: 'Recommended',

    coaches_title: 'Our Coaches',
    coaches_head_coach: 'Head Coach',
    coaches_assistant_head_coach: 'Assistant Head Coach',
    coaches_senior_coaches: 'Senior Coaches',
    coaches_junior_coaches: 'Junior Coaches',
    coaches_background: 'Background',
    coaches_tournament_results: 'Tournament Results',
    coaches_view_more: 'View More',
    coaches_close: 'Close',

    achievements_title: 'Student Achievements',
    achievements_full_results: 'Victorious BA Results (2022-2025)',
    achievements_view_more: 'View More',
    achievements_close: 'Close',

    testimonials_title: 'What Parents & Students Say',

    videos_title: 'Training Videos',

    contact_title: 'Contact & Registration',
    contact_whatsapp: 'Chat on WhatsApp',
    contact_whatsapp_message: 'I am interested in registering my child for badminton training at Victorious Badminton Academy. Can I know more about the available classes?',
    contact_parent_name: 'Parent Name',
    contact_student_name: 'Student Name',
    contact_student_age: 'Student Age',
    contact_phone: 'Phone Number',
    contact_preferred_location: 'Preferred Location',
    contact_message: 'Message (Optional)',
    contact_submit: 'Send Enquiry',
    contact_success: 'Thank you! We will contact you soon.',
    contact_select_location: 'Select a location',

    footer_tagline: 'Building Future Champions',
    footer_quick_links: 'Quick Links',
    footer_contact_info: 'Contact Info',
    footer_locations: 'Training Locations',
    footer_copyright: '© 2026 Victorious Badminton Academy. All rights reserved.',
  },
  zh: {
    nav_about: '关于我们',
    nav_schedule: '训练时间',
    nav_coaches: '教练团队',
    nav_achievements: '学生成就',
    nav_videos: '训练视频',
    nav_contact: '联系我们',

    hero_tagline: '让我们一起奋斗',
    hero_view_schedule: '查看课程表',
    hero_contact: '联系我们',

    stats_years: '年经验',
    stats_students: '名学生',
    stats_medals: '枚奖牌',
    stats_locations: '个训练地点',

    about_title: '关于我们的学院',
    about_p1: 'Victorious 羽毛球学院致力于培养学生的羽毛球技能和才华。凭借经验丰富的教练和系统化的训练计划，我们帮助学生在羽毛球运动中发挥最大潜力。',
    about_p2: '我们为所有水平的学生提供高质量的训练——从初学者到高水平运动员。',

    why_title: '为什么选择我们',
    why_certified: '经验丰富的教练',
    why_certified_desc: '由BAM认证的主教练领衔，我们的教练团队拥有多年竞技比赛经验和丰富的实战训练专长。',
    why_small_class: '小班制教学',
    why_small_class_desc: '每组最多6名学生，确保个性化关注和更快进步。',
    why_competition: '比赛成绩',
    why_competition_desc: '我们的学生在校级、区级和州级锦标赛中屡获奖牌。',
    why_structured: '系统化训练',
    why_structured_desc: '渐进式课程设计，注重技术、体能和比赛策略的全面发展。',
    why_sparring: '陪练与实战',
    why_sparring_desc: '我们提供陪练机会，让学员与资深球员或教练对打，获得真实的比赛经验，提升压力下的决策能力。',

    schedule_title: '训练时间表',
    schedule_group_note: '团体课程时间表',
    schedule_personal_note: '个人训练（1对1、1对2、1对4）',
    schedule_personal_timing: '时间灵活',
    schedule_personal_location: '地点灵活（巴生地区）',
    schedule_personal_availability: '儿童（5-17岁）/ 成人私人课程',
    schedule_personal_recommended: '推荐地点',

    coaches_title: '我们的教练',
    coaches_head_coach: '主教练',
    coaches_assistant_head_coach: '助理主教练',
    coaches_senior_coaches: '资深教练',
    coaches_junior_coaches: '初级教练',
    coaches_background: '背景',
    coaches_tournament_results: '锦标赛成绩',
    coaches_view_more: '查看更多',
    coaches_close: '关闭',

    achievements_title: '学生成就',
    achievements_full_results: 'Victorious BA Results (2022-2025)',
    achievements_view_more: '查看更多',
    achievements_close: '关闭',

    testimonials_title: '家长与学生反馈',

    videos_title: '训练视频',

    contact_title: '联系与报名',
    contact_whatsapp: '通过 WhatsApp 联系',
    contact_whatsapp_message: '我有兴趣为我的孩子报名参加 Victorious 羽毛球学院的羽毛球训练。请问有哪些课程可供选择？',
    contact_parent_name: '家长姓名',
    contact_student_name: '学生姓名',
    contact_student_age: '学生年龄',
    contact_phone: '电话号码',
    contact_preferred_location: '首选地点',
    contact_message: '留言（可选）',
    contact_submit: '发送询问',
    contact_success: '谢谢！我们会尽快与您联系。',
    contact_select_location: '选择地点',

    footer_tagline: '培养未来冠军',
    footer_quick_links: '快速链接',
    footer_contact_info: '联系信息',
    footer_locations: '训练地点',
    footer_copyright: '© 2026 Victorious Badminton Academy. 版权所有。',
  },
  ms: {
    nav_about: 'Tentang Kami',
    nav_schedule: 'Jadual',
    nav_coaches: 'Jurulatih',
    nav_achievements: 'Pencapaian',
    nav_videos: 'Video',
    nav_contact: 'Hubungi',

    hero_tagline: 'Mari Berusaha Bersama',
    hero_view_schedule: 'Lihat Jadual',
    hero_contact: 'Hubungi Kami',

    stats_years: 'Tahun Pengalaman',
    stats_students: 'Pelajar Dilatih',
    stats_medals: 'Pingat Dimenangi',
    stats_locations: 'Lokasi Latihan',

    about_title: 'Tentang Akademi Kami',
    about_p1: 'Victorious Badminton Academy komited untuk membangunkan kemahiran dan bakat badminton pelajar kami. Dengan jurulatih berpengalaman dan program latihan berstruktur, kami membantu pelajar mencapai potensi penuh mereka dalam sukan badminton.',
    about_p2: 'Kami menawarkan latihan berkualiti tinggi untuk semua peringkat — dari pemula hingga atlet berprestasi tinggi.',

    why_title: 'Mengapa Pilih Kami',
    why_certified: 'Jurulatih Berpengalaman',
    why_certified_desc: 'Diketuai oleh ketua jurulatih bertauliah BAM, pasukan jurulatih kami membawa pengalaman bertanding bertahun-tahun dan kepakaran latihan secara langsung.',
    why_small_class: 'Kelas Kecil',
    why_small_class_desc: 'Maksimum 6 pelajar setiap kumpulan memastikan perhatian peribadi dan peningkatan lebih cepat.',
    why_competition: 'Rekod Pertandingan',
    why_competition_desc: 'Pelajar kami sentiasa memenangi pingat di peringkat sekolah, daerah, dan negeri.',
    why_structured: 'Latihan Berstruktur',
    why_structured_desc: 'Kurikulum progresif yang direka untuk membangunkan teknik, kecergasan, dan strategi permainan.',
    why_sparring: 'Sparring & Permainan',
    why_sparring_desc: 'Kami menyediakan peluang sparring di mana pemain boleh bertanding dengan pemain senior atau jurulatih, memperoleh pengalaman perlawanan sebenar dan meningkatkan keupayaan membuat keputusan di bawah tekanan.',

    schedule_title: 'Jadual Latihan',
    schedule_group_note: 'Jadual Kelas Berkumpulan',
    schedule_personal_note: 'Latihan Peribadi (1on1, 1on2, 1on4)',
    schedule_personal_timing: 'Masa Fleksibel',
    schedule_personal_location: 'Lokasi Fleksibel (Kawasan Klang)',
    schedule_personal_availability: 'Kanak-kanak (Umur 5-17) / Kelas Peribadi Dewasa',
    schedule_personal_recommended: 'Disyorkan',

    coaches_title: 'Jurulatih Kami',
    coaches_head_coach: 'Ketua Jurulatih',
    coaches_assistant_head_coach: 'Penolong Ketua Jurulatih',
    coaches_senior_coaches: 'Jurulatih Kanan',
    coaches_junior_coaches: 'Jurulatih Junior',
    coaches_background: 'Latar Belakang',
    coaches_tournament_results: 'Keputusan Kejohanan',
    coaches_view_more: 'Lihat Lebih Lanjut',
    coaches_close: 'Tutup',

    achievements_title: 'Pencapaian Pelajar',
    achievements_full_results: 'Victorious BA Results (2022-2025)',
    achievements_view_more: 'Lihat Lebih Lanjut',
    achievements_close: 'Tutup',

    testimonials_title: 'Kata Ibu Bapa & Pelajar',

    videos_title: 'Video Latihan',

    contact_title: 'Hubungi & Pendaftaran',
    contact_whatsapp: 'Sembang di WhatsApp',
    contact_whatsapp_message: 'Saya berminat untuk mendaftar anak saya untuk latihan badminton di Victorious Badminton Academy. Boleh saya tahu lebih lanjut tentang kelas yang available?',
    contact_parent_name: 'Nama Ibu Bapa',
    contact_student_name: 'Nama Pelajar',
    contact_student_age: 'Umur Pelajar',
    contact_phone: 'No. Telefon',
    contact_preferred_location: 'Lokasi Pilihan',
    contact_message: 'Mesej (Pilihan)',
    contact_submit: 'Hantar Pertanyaan',
    contact_success: 'Terima kasih! Kami akan menghubungi anda segera.',
    contact_select_location: 'Pilih lokasi',

    footer_tagline: 'Membentuk Juara Masa Depan',
    footer_quick_links: 'Pautan Pantas',
    footer_contact_info: 'Maklumat Hubungan',
    footer_locations: 'Lokasi Latihan',
    footer_copyright: '© 2026 Victorious Badminton Academy. Hak cipta terpelihara.',
  },
};
