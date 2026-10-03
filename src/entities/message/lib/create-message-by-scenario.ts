import { nanoid } from 'nanoid';

import type { Scenario } from '@/entities/scenario';
import { i18n } from '@/features/i18n';
import { randomArrayItem, randomNumberInRange } from '@/shared/lib';

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
import { createMessageText } from './create-message-text';

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

const generateCountValueByCondition = (
  condition: string | undefined,
): number => {
  if (!condition) {
    return randomNumberInRange({ min: 100, max: 1000 });
  }

  const match = condition.match(/^([><])(\d+)$/);

  if (!match) {
    return 0;
  }

  const [, sign, valueStr] = match;
  const targetValue = parseInt(valueStr, 10);

  if (sign === '>') {
    return randomNumberInRange({
      min: targetValue + 1,
      max: targetValue + 1_000,
    });
  }

  return randomNumberInRange({
    min: Math.max(0, targetValue - 500),
    max: Math.max(0, targetValue - 1),
  });
};

export const createMessageByScenario = (
  scenario: Scenario,
  banAction: BanAction,
): Message => {
  const language = i18n.language;

  let activePool = scenario.pools[banAction];
  const poolEmpty = !activePool || activePool.length === 0;

  if (poolEmpty) {
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
    const likesCondition = template.likes || defaultTemplate.likes;
    likes = generateCountValueByCondition(likesCondition);
  }

  let reports = 0;
  if (scenario.hasReports) {
    const reportsCondition = template.reports || defaultTemplate.reports;
    reports = generateCountValueByCondition(reportsCondition);
  }

  const text = createMessageText({
    locationId: scenario.locationId,
    contentType,
    language,
  });

  return {
    id: nanoid(),
    side: getRandomSide(),
    speed: getRandomSpeed(scenario.messageSpeedRange),
    avatarKey: getRandomAvatarKey(user),

    user,
    content: {
      type: contentType,
      hasLikes: scenario.hasLikes,
      likes,
      hasReports: scenario.hasReports,
      reports,
      text,
    },
    title,
    banAction: poolEmpty ? 'none' : banAction,
  };
};
