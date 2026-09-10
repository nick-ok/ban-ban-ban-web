import type { LocationId } from '@/entities/location';

import type { Review } from '../model/types';

export const LOCATION_REVIEWS: Record<LocationId, Review[]> = {
  loc1: [
    {
      id: 'rev_1',
      username: 'Дмитрий К.',
      avatarUrl: '/images/message/avatar-male-1.webp',
      text: 'В этой локации в последнее время стало слишком много капсеров... Модераторы вообще работают?',
      rating: 3,
      requiredCompletedCount: 0,
    },
    {
      id: 'rev_2',
      username: 'Анна_99',
      avatarUrl: '/images/message/avatar-female-2.webp',
      text: 'Постоянно натыкаюсь на каких-то странных анонимов в чате. Надеюсь, скоро наведут порядок.',
      rating: 2,
      requiredCompletedCount: 0,
    },
    {
      id: 'rev_3',
      username: 'Стример_Иван',
      avatarUrl: '/images/message/avatar-male-3.webp',
      text: 'Ого, крикунов капсом стало заметно меньше! Спасибо новому модератору за чистый чат!',
      rating: 5,
      requiredCompletedCount: 1,
    },
    {
      id: 'rev_4',
      username: 'Елена прекрасная',
      avatarUrl: '/images/message/avatar-female-4.webp',
      text: 'Чат наконец-то можно читать спокойно. Анонимусы отправляются в бан моментально. Работа на высоте!',
      rating: 5,
      requiredCompletedCount: 2,
    },
    {
      id: 'rev_5',
      username: 'CyberPavel',
      avatarUrl: '/images/message/avatar-male-5.webp',
      text: 'Лучшая модерация, которую я видел. Ни одного спамера или капсера за весь день! Заслуженные 5 звезд.',
      rating: 5,
      requiredCompletedCount: 3,
    },
  ],

  loc2: [],
};
