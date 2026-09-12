import { motion, type Variants } from 'motion/react';

import { useTranslation } from '@/features/i18n';
import Sunburst from '@/shared/assets/sunburst.svg';
import { Button, CountMotion, Icon, ZoomMotion } from '@/shared/ui';

import styles from './DayendRewards.module.css';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 },
  },
};

interface Props {
  nextLocationUnlocked: boolean;
  newReviewsAdded: boolean;
  globalAccuracy: number;
  onCancel: () => void;
  onSave: () => void;
}

export const DayendRewards = ({
  globalAccuracy,
  nextLocationUnlocked,
  newReviewsAdded,
  onCancel,
  onSave,
}: Props) => {
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <Sunburst
        className={styles.sunburst}
        preserveAspectRatio="xMidYMid slice"
      />

      <ZoomMotion scale={0.5} duration={0.5} className={styles.inner}>
        <motion.h1 variants={itemVariants} className={styles.title}>
          {t('screens.dayend.congratulations')}
        </motion.h1>

        <motion.div
          className={styles.rewards}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className={styles.accuracyCard}>
            <span className={styles.accuracyLabel}>
              {t('screens.dayend.globalAIProgress')}
            </span>
            <CountMotion
              to={globalAccuracy}
              format={(v) => `${v}%`}
              className={styles.accuracyValue}
            />
          </motion.div>

          <div className={styles.rewardsList}>
            {!nextLocationUnlocked && (
              <motion.div variants={itemVariants} className={styles.rewardItem}>
                <Icon name={'check'} className={styles.rewardIcon} />
                <span className={styles.rewardText}>
                  {t('screens.dayend.newTask')}
                </span>
              </motion.div>
            )}

            {nextLocationUnlocked && (
              <motion.div variants={itemVariants} className={styles.rewardItem}>
                <Icon name={'check'} className={styles.rewardIcon} />
                <span className={styles.rewardText}>
                  {t('screens.dayend.newLocation')}
                </span>
              </motion.div>
            )}

            {newReviewsAdded && (
              <motion.div variants={itemVariants} className={styles.rewardItem}>
                <Icon name={'check'} className={styles.rewardIcon} />
                <span className={styles.rewardText}>
                  {t('screens.dayend.newReviews')}
                </span>
              </motion.div>
            )}
          </div>
        </motion.div>

        <div className={styles.actions}>
          <Button
            variant={'success'}
            className={styles.actionBtn}
            onClick={onSave}
          >
            {t('screens.dayend.saveAndContinue')}
          </Button>

          <Button
            variant={'white'}
            className={styles.actionBtn}
            onClick={onCancel}
          >
            {t('screens.dayend.cancel')}
          </Button>
        </div>
      </ZoomMotion>
    </div>
  );
};
