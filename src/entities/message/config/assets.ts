export const AVATAR_ASSETS = {
  anonymous: '/images/message/avatar-anon.webp',

  male_1: '/images/message/avatar-male-1.webp',
  male_2: '/images/message/avatar-male-2.webp',
  male_3: '/images/message/avatar-male-3.webp',
  male_4: '/images/message/avatar-male-4.webp',
  male_5: '/images/message/avatar-male-5.webp',

  female_1: '/images/message/avatar-female-1.webp',
  female_2: '/images/message/avatar-female-2.webp',
  female_3: '/images/message/avatar-female-3.webp',
  female_4: '/images/message/avatar-female-4.webp',
  female_5: '/images/message/avatar-female-5.webp',
} as const;

export const TITLE_ASSETS = {
  empty: '',
  dissent: '/images/message/dissent.webp',
  hype: '/images/message/fire.webp',
} as const;

export type AvatarAssetKey = keyof typeof AVATAR_ASSETS;
export type TitleAssetKey = keyof typeof TITLE_ASSETS;

export const MALE_AVATAR_KEYS: AvatarAssetKey[] = [
  'male_1',
  'male_2',
  'male_3',
  'male_4',
  'male_5',
];
export const FEMALE_AVATAR_KEYS: AvatarAssetKey[] = [
  'female_1',
  'female_2',
  'female_3',
  'female_4',
  'female_5',
];

export const TITLE_KEYS: TitleAssetKey[] = ['dissent', 'hype'];
