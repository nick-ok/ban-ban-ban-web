import { nanoid } from 'nanoid';

import { LOCATION_MESSAGES } from '@/entities/location/config/locationMessages';
import type { Scenario } from '@/entities/scenario';
import { i18n } from '@/features/i18n';
import { randomArrayItem, randomNumberInRange } from '@/shared/lib';

import { AD_MESSAGES } from '../config/ad-messages';
import {
  FEMALE_AVATAR_KEYS,
  MALE_AVATAR_KEYS,
  type AvatarAssetKey,
} from '../config/assets';
import type {
  BanAction,
  ContentType,
  Message,
  MessageSide,
  TitleType,
  UserType,
} from '../model/types';
import { obfuscateToBinary } from './obfuscate-to-binary';
import { obfuscateToFwords } from './obfuscate-to-fwords';

const resolveParam = <T>(param: T | T[] | undefined, fallback: T | T[]): T => {
  const activeParam = param !== undefined ? param : fallback;

  if (Array.isArray(activeParam)) {
    return randomArrayItem(activeParam) as T;
  }

  return activeParam;
};

const getRandomSide = (): MessageSide =>
  Math.random() < 0.5 ? 'left' : 'right';

const getRandomSpeed = (speedRange: number[]): number => {
  const [min, max] = speedRange;
  return min + Math.random() * (max - min);
};

const getRandomAvatarKey = (userType: UserType): AvatarAssetKey => {
  if (userType === 'anonymous') {
    return 'anonymous';
  }

  if (userType === 'bot') {
    return 'bot';
  }

  if (userType === 'ai') {
    return 'ai';
  }

  if (userType === 'male') {
    return randomArrayItem(MALE_AVATAR_KEYS) ?? 'anonymous';
  }

  if (userType === 'female') {
    return randomArrayItem(FEMALE_AVATAR_KEYS) ?? 'anonymous';
  }

  return 'anonymous';
};

export const createMessageByScenario = (
  scenario: Scenario,
  banAction: BanAction,
): Message => {
  const language = i18n.language;

  let activePool = scenario.pools[banAction];

  if (!activePool || activePool.length === 0) {
    activePool = scenario.pools['none'];
  }

  const template = randomArrayItem(activePool) || scenario.pools['none'][0];
  const defaultTemplate = scenario.pools['none'][0];

  const user = resolveParam<UserType>(
    template.user,
    defaultTemplate.user ?? 'male',
  );
  const contentType = resolveParam<ContentType>(
    template.content,
    defaultTemplate.content ?? 'normal',
  );
  const title = resolveParam<TitleType>(
    template.title,
    defaultTemplate.title ?? 'empty',
  );

  let likes = 0;
  if (scenario.hasLikes) {
    const likesRange = template.likes || defaultTemplate.likes;

    if (likesRange) {
      likes = randomNumberInRange({ min: likesRange.min, max: likesRange.max });
    } else {
      likes = randomNumberInRange({ min: 100, max: 1000 });
    }
  }

  let text = '';
  if (contentType === 'ad') {
    text = randomArrayItem(AD_MESSAGES[language as 'ru' | 'en']) ?? '';
  } else {
    text =
      randomArrayItem(
        LOCATION_MESSAGES[scenario.locationId][language as 'ru' | 'en'],
      ) ?? '';
  }

  if (contentType === 'caps') {
    text = text.toUpperCase();
  } else if (contentType === 'fwords') {
    text = obfuscateToFwords(text);
  } else if (contentType === 'binary') {
    text = obfuscateToBinary(text);
  }

  return {
    id: nanoid(),
    side: getRandomSide(),
    speed: getRandomSpeed(scenario.messageSpeedRange),
    avatarKey: getRandomAvatarKey(user),

    user,
    content: {
      type: contentType,
      likes,
      hasLikes: scenario.hasLikes,
      text,
    },
    title,
    banAction,
  };
};
