import { nanoid } from 'nanoid';

import type { Scenario } from '@/entities/scenario';
import { randomArrayItem } from '@/shared/lib/random-array-item';
import { randomNumberInRange } from '@/shared/lib/random-number-in-range';

import {
  FEMALE_AVATAR_KEYS,
  MALE_AVATAR_KEYS,
  type AvatarAssetKey,
} from '../config/assets';
import type {
  BanAction,
  Message,
  MessageSide,
  TitleType,
  UserType,
} from '../model/types';

const getRandomSide = (): MessageSide => {
  return Math.random() < 0.5 ? 'left' : 'right';
};

const getRandomSpeed = (speedRange: number[]): number => {
  const [min, max] = speedRange;

  return min + Math.random() * (max - min);
};

const getRandomAvatarKey = (userType: UserType): AvatarAssetKey => {
  if (userType === 'anonymous') {
    return 'anonymous';
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
  const side = getRandomSide();
  const speed = getRandomSpeed(scenario.messageSpeedRange);

  let user: UserType = Math.random() < 0.5 ? 'male' : 'female';
  let title: TitleType = 'empty';
  let likes = randomNumberInRange(100, 2000);

  const textMap: Record<BanAction, string> = {
    ban: 'В бан его!',
    longBan: 'Забань его на долго!',
    none: 'Пущай живёт',
  };

  if (banAction !== 'none') {
    const rules = scenario.banRules[banAction];
    const activeRule = randomArrayItem(rules);

    likes = randomNumberInRange(0, 20);

    if (activeRule) {
      if (activeRule.user && activeRule.user.length > 0) {
        user = randomArrayItem(activeRule.user) ?? 'anonymous';
      }

      if (activeRule.title && activeRule.title.length > 0) {
        title = randomArrayItem(activeRule.title) ?? 'empty';
      }

      if (activeRule.likes) {
        const minLimit = activeRule.likes.min ?? 0;
        const maxLimit = activeRule.likes.max ?? 9999;

        likes = randomNumberInRange(minLimit, maxLimit);
      }
    }
  }

  const avatarKey = getRandomAvatarKey(user);

  return {
    id: nanoid(),
    user: 'anonymous',
    avatarKey,
    content: {
      type: 'normal',
      text: textMap[banAction],
      likes,
    },
    title,
    side,
    speed,
    banAction,
  };
};
