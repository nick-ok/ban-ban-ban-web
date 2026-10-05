import type { ParseKeys } from '@/features/i18n';
import type { IconName } from '@/shared/ui';

interface HowToPlay {
  id: string;
  icon: IconName;
  text: ParseKeys;
  isRight: boolean;
}

export const HOW_TO_PLAY: HowToPlay[] = [
  { id: 'ban', icon: 'tap', text: 'screens.howToPlay.ban', isRight: false },
  {
    id: 'longBan',
    icon: 'tap-long',
    text: 'screens.howToPlay.longBan',
    isRight: true,
  },
  {
    id: 'clue',
    icon: 'question',
    text: 'screens.howToPlay.clue',
    isRight: false,
  },
];
