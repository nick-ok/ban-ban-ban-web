import { useMemo } from 'react';

import type { Scenario } from '@/entities/scenario';
import { useTranslation } from '@/features/i18n';
import type { ParseKeys } from '@/features/i18n';
import { Icon } from '@/shared/ui';

import styles from './GameClue.module.css';

interface Props {
  pools: Scenario['pools'];
}

type ClueKey = 'anonymous' | 'bot' | 'ai' | 'hype' | 'dissent' | 'angry';

const DYNAMIC_CLUES: { key: ClueKey; src: string; label: ParseKeys }[] = [
  {
    key: 'anonymous',
    src: '/images/message/avatar-anon.webp',
    label: 'screens.game.anonymousType',
  },
  {
    key: 'bot',
    src: '/images/message/avatar-bot.webp',
    label: 'screens.game.botType',
  },
  {
    key: 'dissent',
    src: '/images/message/dissent.webp',
    label: 'screens.game.dissentType',
  },
  {
    key: 'hype',
    src: '/images/message/fire.webp',
    label: 'screens.game.hypeType',
  },
  {
    key: 'angry',
    src: '/images/message/angry.webp',
    label: 'screens.game.angryType',
  },
];

export const GameClue = ({ pools }: Props) => {
  const { t } = useTranslation();

  const clueMap = useMemo(() => {
    const map: Record<ClueKey, boolean> = {
      anonymous: false,
      bot: false,
      ai: false,
      hype: false,
      dissent: false,
      angry: false,
    };

    if (pools) {
      return map;
    }

    return map;
  }, [pools]);

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.banClue}>
          <Icon name="tap" className={styles.tapIcon} />
          <span>{t('screens.game.howToBan')}</span>
        </div>

        <div className={styles.banClue}>
          <Icon name="tap-long" className={styles.tapIcon} />
          <span>{t('screens.game.howToLongBan')}</span>
        </div>

        {DYNAMIC_CLUES.map(({ key, src, label }) => {
          if (!clueMap[key]) {
            return null;
          }

          return (
            <div key={key} className={styles.banClue}>
              <img className={styles.avatarImg} src={src} alt={key} />
              <span>{t(label)}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
