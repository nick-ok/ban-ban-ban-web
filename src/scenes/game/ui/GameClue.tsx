import type { Scenario } from '@/entities/scenario';
import { useTranslation } from '@/features/i18n';
import { Icon } from '@/shared/ui';

import { GameClueCard } from './GameClueCard';

import styles from './GameClue.module.css';

interface Props {
  scenario: Scenario;
}

export const GameClue = ({ scenario }: Props) => {
  const { t } = useTranslation();

  const banPool = scenario.pools.ban || [];
  const longBanPool = scenario.pools.longBan || [];

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        {banPool.length > 0 && (
          <div className={styles.section}>
            <div className={styles.actionHeader}>
              <Icon name="tap" className={styles.tapIcon} />
              <span>{t('screens.game.howToBan')}</span>
            </div>

            <div className={styles.cardsList}>
              {banPool.map((template, index) => (
                <GameClueCard key={`ban-${index}`} template={template} />
              ))}
            </div>
          </div>
        )}

        {longBanPool.length > 0 && (
          <div className={styles.section}>
            <div className={styles.actionHeader}>
              <Icon name="tap-long" className={styles.tapIcon} />
              <span>{t('screens.game.howToLongBan')}</span>
            </div>

            <div className={styles.cardsList}>
              {longBanPool.map((template, index) => (
                <GameClueCard key={`longBan-${index}`} template={template} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
