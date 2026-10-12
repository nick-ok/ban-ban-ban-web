import clsx from 'clsx';
import { motion } from 'motion/react';
import ReactMarkdown from 'react-markdown';

import { useGameSettingsStore } from '@/entities/game-settings';
import { useNavigationStore } from '@/entities/navigation';
import { useTranslation } from '@/features/i18n';
import { Button, Icon, ShineFX } from '@/shared/ui';

import { HOW_TO_PLAY } from '../config/constants';

import styles from './HowToPlay.module.css';

export const HowToPlay = () => {
  const { t } = useTranslation();

  const navigation = useNavigationStore();
  const gameSettings = useGameSettingsStore();

  const handleGotIt = () => {
    if (!gameSettings.isHowToPlayReaded) {
      gameSettings.setHowToPlayReaded();
    }

    navigation.setScene(!gameSettings.isHowToPlayReaded ? 'lobby' : 'lock');
  };

  return (
    <div className={styles.root}>
      <h2 className={styles.title}>{t('screens.howToPlay.title')}</h2>

      <div className={styles.htpList}>
        {HOW_TO_PLAY.map((htp) => {
          return (
            <motion.div
              key={htp.id}
              className={clsx(styles.htpItem, htp.isRight && styles.right)}
              initial={{ opacity: 0, x: htp.isRight ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <div className={styles.htpContent}>
                <div className={styles.htpIconWrapper}>
                  <Icon name={htp.icon} className={styles.htpIcon} />
                </div>

                <div>
                  <ReactMarkdown>{t(htp.text)}</ReactMarkdown>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <ShineFX>
        <Button
          variant={'accentBlue'}
          onClick={handleGotIt}
          className={styles.gotItBtn}
        >
          {t('screens.howToPlay.gotIt')}
        </Button>
      </ShineFX>
    </div>
  );
};
