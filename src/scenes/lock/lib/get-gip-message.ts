import {
  getGlobalAIProgress,
  type PlayerProgress,
} from '@/entities/player-progress';
import type { ParseKeys } from '@/features/i18n';

export const getGIPMessage = (progress: PlayerProgress) => {
  const globalAIProgress = getGlobalAIProgress(progress);

  const messages: { threshold: number; key: ParseKeys }[] = [
    { threshold: 100, key: 'screens.lock.gipMessages.msg_100' },
    { threshold: 75, key: 'screens.lock.gipMessages.msg_75' },
    { threshold: 50, key: 'screens.lock.gipMessages.msg_50' },
    { threshold: 25, key: 'screens.lock.gipMessages.msg_25' },
    { threshold: 10, key: 'screens.lock.gipMessages.msg_10' },
    { threshold: 0, key: 'screens.lock.gipMessages.msg_0' },
  ];

  const message = messages.find((t) => globalAIProgress >= t.threshold);

  return message ? message.key : 'screens.lock.gipMessages.msg_0';
};
