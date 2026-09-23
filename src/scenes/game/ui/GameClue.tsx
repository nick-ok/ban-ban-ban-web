import { useMemo } from 'react';

import type { TitleType, UserType } from '@/entities/message';
import type { BanRule, Scenario } from '@/entities/scenario';
import { useTranslation } from '@/features/i18n';
import type { ParseKeys } from '@/features/i18n';
import { Icon } from '@/shared/ui';

import styles from './GameClue.module.css';

interface Props {
  banRules: Scenario['banRules'];
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

export const GameClue = ({ banRules }: Props) => {
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

    if (!banRules) {
      return map;
    }

    const allRules: BanRule[] = [
      ...(banRules.ban ?? []),
      ...(banRules.longBan ?? []),
    ];

    for (const rule of allRules) {
      if (rule.user) {
        (Object.keys(map) as ClueKey[]).forEach((key) => {
          if (rule.user?.includes(key as UserType)) {
            map[key] = true;
          }
        });
      }

      if (rule.title) {
        (Object.keys(map) as ClueKey[]).forEach((key) => {
          if (rule.title?.includes(key as TitleType)) {
            map[key] = true;
          }
        });
      }
    }

    return map;
  }, [banRules]);

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
