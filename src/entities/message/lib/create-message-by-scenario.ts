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
  let finalBanAction = banAction;

  if (
    finalBanAction !== 'none' &&
    (!scenario.banRules[finalBanAction] ||
      scenario.banRules[finalBanAction].length === 0)
  ) {
    finalBanAction = 'none';
  }

  const { allowedContent } = scenario;
  const side = getRandomSide();
  const speed = getRandomSpeed(scenario.messageSpeedRange);
  const locationId = scenario.locationId;
  const lang = i18n.language;

  let user: UserType = randomArrayItem(allowedContent.users) ?? 'male';
  let title: TitleType = randomArrayItem(allowedContent.titles) ?? 'empty';
  let contentType: ContentType =
    randomArrayItem(allowedContent.content) ?? 'normal';
  let likes = 0;

  if (allowedContent.hasLikes) {
    const longBanRules = scenario.banRules['longBan'] || [];
    const longBanRule = longBanRules.find((r) => r.likes);

    if (longBanRule && longBanRule.likes) {
      const banMin = longBanRule.likes.min ?? 1000;
      const safeMax = banMin - 1 > 100 ? banMin - 1 : 100;

      likes = randomNumberInRange({ min: 100, max: safeMax });
    } else {
      likes = randomNumberInRange({ min: 100, max: 2_000 });
    }
  }

  if (finalBanAction !== 'none') {
    const rules = scenario.banRules[finalBanAction];
    const activeRule = randomArrayItem(rules);

    if (activeRule) {
      if (activeRule.user && activeRule.user.length > 0) {
        user = randomArrayItem(activeRule.user) ?? 'anonymous';
      }
      if (activeRule.title && activeRule.title.length > 0) {
        title = randomArrayItem(activeRule.title) ?? 'empty';
      }
      if (activeRule.content && activeRule.content.length > 0) {
        contentType = randomArrayItem(activeRule.content) ?? 'normal';
      }

      if (allowedContent.hasLikes) {
        if (activeRule.likes) {
          const minLimit = activeRule.likes.min ?? 0;
          const maxLimit = activeRule.likes.max ?? 9999;
          likes = randomNumberInRange({ min: minLimit, max: maxLimit });
        } else {
          likes = randomNumberInRange({ min: 0, max: 20 });
        }
      }
    }
  }

  let text =
    randomArrayItem(LOCATION_MESSAGES[locationId][lang as 'ru' | 'en']) ?? '';

  if (contentType === 'caps') {
    text = text.toUpperCase();
  } else if (contentType === 'fwords') {
    text = obfuscateToFwords(text);
  } else if (contentType === 'binary') {
    text = obfuscateToBinary(text);
  } else if (contentType === 'ad') {
    text = randomArrayItem(AD_MESSAGES[lang as 'ru' | 'en']) ?? '';
  }

  const avatarKey = getRandomAvatarKey(user);

  return {
    id: nanoid(),
    user,
    avatarKey,
    content: {
      type: contentType,
      text,
      likes,
      hasLikes: allowedContent.hasLikes,
    },
    title,
    side,
    speed,
    banAction: finalBanAction,
  };
};
