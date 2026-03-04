
import { TrainingLocation } from '@/types';

export const trainingLocations: TrainingLocation[] = [
  {
    id: 'loc-1',
    name: 'Giant, Bukit Tinggi',
    image: '/images/location/giant_bukit_tinggi.jpg',
    sessions: [
      {
        day: { en: 'Thursday', zh: '星期四', ms: 'Khamis' },
        time: '4:00 PM - 6:00 PM',
      },
      {
        day: { en: 'Sunday', zh: '星期日', ms: 'Ahad' },
        time: '3:00 PM - 5:00 PM',
      },
    ],
  },
  {
    id: 'loc-2',
    name: 'SBA Forum, Setia Alam',
    image: '/images/location/setia_alam_forum_sba.jpg',
    sessions: [
      {
        day: { en: 'Saturday', zh: '星期六', ms: 'Sabtu' },
        time: '9:00 AM - 11:00 AM',
      },
      {
        day: { en: 'Sunday', zh: '星期日', ms: 'Ahad' },
        time: '9:00 AM - 11:00 AM',
      },
    ],
  },
  {
    id: 'loc-3',
    name: 'YTP Sports Arena',
    image: '/images/location/ytp_klang.jpg',
    sessions: [
      {
        day: { en: 'Friday', zh: '星期五', ms: 'Jumaat' },
        time: '8:00 PM - 10:00 PM',
      },
      {
        day: { en: 'Saturday', zh: '星期六', ms: 'Sabtu' },
        time: '3:00 PM - 5:00 PM',
      },
      {
        day: { en: 'Sunday', zh: '星期日', ms: 'Ahad' },
        time: '9:00 AM - 11:00 AM',
      },
      {
        day: { en: 'Sunday', zh: '星期日', ms: 'Ahad' },
        time: '3:00 PM - 5:00 PM',
      },
    ],
  },
];
