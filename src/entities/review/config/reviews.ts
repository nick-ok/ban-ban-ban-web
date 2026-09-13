import { nanoid } from 'nanoid';

import type { LocationId } from '@/entities/location';

import type { Review } from '../model/types';

export const LOCATION_REVIEWS: Record<LocationId, Review[]> = {
  loc1: [
    {
      id: nanoid(),
      username: 'dmitry_KK',
      text: {
        ru: 'В этой локации в последнее время стало слишком много капсеров... Модераторы вообще работают?',
        en: 'Lately, there are way too many people typing in all caps in this area... Do the moderators even do anything?',
      },
      rating: 1,
      requiredProgress: 0,
    },
    {
      id: nanoid(),
      username: 'anna99',
      text: {
        ru: 'Постоянно натыкаюсь на каких-то странных анонимов в чате. Надеюсь, скоро наведут порядок.',
        en: 'I keep running into these weird anonymous users in the chat. I hope they clean things up soon.',
      },
      rating: 2,
      requiredProgress: 20,
    },
    {
      id: nanoid(),
      username: 'ivan',
      text: {
        ru: 'Постоянно натыкаюсь на каких-то странных анонимов в чате. Надеюсь, скоро наведут порядок.',
        en: 'I keep running into these weird anonymous users in the chat. I hope they clean things up soon.',
      },
      rating: 5,
      requiredProgress: 50,
    },
    {
      id: nanoid(),
      username: 'elena_prekrasnaya',
      text: {
        ru: 'Постоянно натыкаюсь на каких-то странных анонимов в чате. Надеюсь, скоро наведут порядок.',
        en: 'I keep running into these weird anonymous users in the chat. I hope they clean things up soon.',
      },
      rating: 5,
      requiredProgress: 100,
    },
    {
      id: nanoid(),
      username: 'CyberPavel',
      text: {
        ru: 'Постоянно натыкаюсь на каких-то странных анонимов в чате. Надеюсь, скоро наведут порядок.',
        en: 'I keep running into these weird anonymous users in the chat. I hope they clean things up soon.',
      },
      rating: 5,
      requiredProgress: 100,
      isPerfectOnly: true,
    },
  ],

  loc2: [],
};
