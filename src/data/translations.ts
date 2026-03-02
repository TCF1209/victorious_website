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
  hero_register: string;
  hero_contact: string;

  // About
  about_title: string;
  about_p1: string;
  about_p2: string;

  // Schedule
  schedule_title: string;
  schedule_group_note: string;

  // Coaches
  coaches_title: string;
  coaches_view_more: string;
  coaches_close: string;

  // Achievements
  achievements_title: string;

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

    hero_tagline: 'Building Future Champions',
    hero_register: 'Register Now',
    hero_contact: 'Contact Us',

    about_title: 'About Our Academy',
    about_p1: 'Victorious Badminton Academy is committed to developing the badminton skills and talents of our students. With experienced coaches and structured training programs, we help students reach their full potential in badminton.',
    about_p2: 'We offer high-quality training for all levels — from beginners to high-performing athletes.',

    schedule_title: 'Training Schedule',
    schedule_group_note: 'Group Class Schedule',

    coaches_title: 'Our Coaches',
    coaches_view_more: 'View More',
    coaches_close: 'Close',

    achievements_title: 'Student Achievements',

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

    hero_tagline: '培养未来冠军',
    hero_register: '立即报名',
    hero_contact: '联系我们',

    about_title: '关于我们的学院',
    about_p1: 'Victorious 羽毛球学院致力于培养学生的羽毛球技能和才华。凭借经验丰富的教练和系统化的训练计划，我们帮助学生在羽毛球运动中发挥最大潜力。',
    about_p2: '我们为所有水平的学生提供高质量的训练——从初学者到高水平运动员。',

    schedule_title: '训练时间表',
    schedule_group_note: '团体课程时间表',

    coaches_title: '我们的教练',
    coaches_view_more: '查看更多',
    coaches_close: '关闭',

    achievements_title: '学生成就',

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

    hero_tagline: 'Membentuk Juara Masa Depan',
    hero_register: 'Daftar Sekarang',
    hero_contact: 'Hubungi Kami',

    about_title: 'Tentang Akademi Kami',
    about_p1: 'Victorious Badminton Academy komited untuk membangunkan kemahiran dan bakat badminton pelajar kami. Dengan jurulatih berpengalaman dan program latihan berstruktur, kami membantu pelajar mencapai potensi penuh mereka dalam sukan badminton.',
    about_p2: 'Kami menawarkan latihan berkualiti tinggi untuk semua peringkat — dari pemula hingga atlet berprestasi tinggi.',

    schedule_title: 'Jadual Latihan',
    schedule_group_note: 'Jadual Kelas Berkumpulan',

    coaches_title: 'Jurulatih Kami',
    coaches_view_more: 'Lihat Lebih Lanjut',
    coaches_close: 'Tutup',

    achievements_title: 'Pencapaian Pelajar',

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
