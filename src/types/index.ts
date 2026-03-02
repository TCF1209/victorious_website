export type Language = 'en' | 'zh' | 'ms';

export interface Coach {
  id: string;
  name: string;
  title: Record<Language, string>;
  photo: string;
  featuredAchievements: Record<Language, string[]>;
  fullAchievements: Record<Language, string[]>;
  bio: Record<Language, string>;
}

export interface TrainingLocation {
  id: string;
  name: string;
  sessions: {
    day: Record<Language, string>;
    time: string;
  }[];
}

export interface Achievement {
  id: string;
  image: string;
  caption: Record<Language, string>;
}

export interface Video {
  id: string;
  title: Record<Language, string>;
  url: string;
  thumbnail: string;
}

export interface ContactFormData {
  parentName: string;
  studentName: string;
  studentAge: string;
  phone: string;
  preferredLocation: string;
  message: string;
}
