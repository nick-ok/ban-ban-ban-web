export const AVATAR_ASSETS = {
  anonymous: '/images/message/avatar-anon.webp',
  bot: '/images/message/avatar-bot.webp',
  ai: '/images/message/avatar-ai.webp',

  male_1: '/images/message/male/avatar-male-1.webp',
  male_2: '/images/message/male/avatar-male-2.webp',
  male_3: '/images/message/male/avatar-male-3.webp',
  male_4: '/images/message/male/avatar-male-4.webp',
  male_5: '/images/message/male/avatar-male-5.webp',
  male_6: '/images/message/male/avatar-male-6.webp',
  male_7: '/images/message/male/avatar-male-6.webp',
  male_8: '/images/message/male/avatar-male-8.webp',
  male_9: '/images/message/male/avatar-male-9.webp',
  male_10: '/images/message/male/avatar-male-10.webp',
  male_11: '/images/message/male/avatar-male-11.webp',
  male_12: '/images/message/male/avatar-male-12.webp',
  male_13: '/images/message/male/avatar-male-13.webp',
  male_14: '/images/message/male/avatar-male-14.webp',
  male_15: '/images/message/male/avatar-male-15.webp',
  male_16: '/images/message/male/avatar-male-16.webp',
  male_17: '/images/message/male/avatar-male-17.webp',
  male_18: '/images/message/male/avatar-male-18.webp',
  male_19: '/images/message/male/avatar-male-19.webp',

  female_1: '/images/message/female/avatar-female-1.webp',
  female_2: '/images/message/female/avatar-female-2.webp',
  female_3: '/images/message/female/avatar-female-3.webp',
  female_4: '/images/message/female/avatar-female-4.webp',
  female_5: '/images/message/female/avatar-female-5.webp',
  female_6: '/images/message/female/avatar-female-6.webp',
  female_7: '/images/message/female/avatar-female-7.webp',
  female_8: '/images/message/female/avatar-female-8.webp',
  female_9: '/images/message/female/avatar-female-9.webp',
  female_10: '/images/message/female/avatar-female-10.webp',
  female_11: '/images/message/female/avatar-female-11.webp',
  female_12: '/images/message/female/avatar-female-12.webp',
  female_13: '/images/message/female/avatar-female-13.webp',
  female_14: '/images/message/female/avatar-female-14.webp',
  female_15: '/images/message/female/avatar-female-15.webp',
  female_16: '/images/message/female/avatar-female-16.webp',
  female_17: '/images/message/female/avatar-female-17.webp',
  female_18: '/images/message/female/avatar-female-18.webp',
} as const;

export const TITLE_ASSETS = {
  empty: '',
  dissent: '/images/message/dissent.webp',
  hype: '/images/message/fire.webp',
} as const;

export const UI_ASSETS = {
  like: '/images/message/like.webp',
} as const;

export type AvatarAssetKey = keyof typeof AVATAR_ASSETS;
export type TitleAssetKey = keyof typeof TITLE_ASSETS;
export type UIAssetKey = keyof typeof UI_ASSETS;

export const MALE_AVATAR_KEYS: AvatarAssetKey[] = [
  'male_1',
  'male_2',
  'male_3',
  'male_4',
  'male_5',
  'male_6',
  'male_7',
  'male_8',
  'male_9',
  'male_10',
  'male_11',
  'male_12',
  'male_13',
  'male_14',
  'male_15',
  'male_16',
  'male_17',
  'male_18',
  'male_19',
];
export const FEMALE_AVATAR_KEYS: AvatarAssetKey[] = [
  'female_1',
  'female_2',
  'female_3',
  'female_4',
  'female_5',
  'female_6',
  'female_7',
  'female_8',
  'female_9',
  'female_10',
  'female_11',
  'female_12',
  'female_13',
  'female_14',
  'female_15',
  'female_16',
  'female_17',
  'female_18',
];

export const TITLE_KEYS: TitleAssetKey[] = ['dissent', 'hype'];
