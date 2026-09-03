import { nanoid } from 'nanoid';

import type { Scenario } from '@/entities/scenario';

import type { BanAction, Message, MessageSide } from '../model/types';

const getRandomSide = (): MessageSide => {
  return Math.random() < 0.5 ? 'left' : 'right';
};

const getRandomSpeed = (speedRange: number[]): number => {
  const [min, max] = speedRange;

  return min + Math.random() * (max - min);
};

export const createMessageByScenario = (
  scenario: Scenario,
  banAction: BanAction,
): Message => {
  const side = getRandomSide();
  const speed = getRandomSpeed(scenario.messageSpeedRange);

  const textMap: Record<BanAction, string> = {
    ban: 'В бан его!',
    long_ban: 'Забань его на долго!',
    none: 'Пущай живёт',
  };

  return {
    id: nanoid(),
    user: 'anonymous',
    content: {
      type: 'normal',
      text: textMap[banAction],
      likes: 0,
    },
    title: 'empty',
    side,
    speed,
    banAction,
  };
};
