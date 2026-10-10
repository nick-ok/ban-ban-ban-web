import { motion, type Variants } from 'motion/react';

import { useTranslation } from '@/features/i18n';
import { Button, ShineFX } from '@/shared/ui';

import styles from './ScenarioIntro.module.css';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'backOut' },
  },
};

interface Props {
  title: string;
  timePassed: string;
  worktime: string;
  onClose: () => void;
}

export const ScenarioIntro = ({
  title,
  timePassed,
  worktime,
  onClose,
}: Props) => {
  const { t } = useTranslation();

  return (
    <motion.div
      className={styles.root}
      variants={containerVariants}
      initial={'hidden'}
      animate={'visible'}
    >
      <motion.div className={styles.title} variants={textVariants}>
        {title}
      </motion.div>

      <motion.div variants={textVariants} className={styles.worktime}>
        {t('scenarios.worktime')} - {worktime}
      </motion.div>

      {timePassed && (
        <motion.div className={styles.timePassed} variants={textVariants}>
          {timePassed}
        </motion.div>
      )}

      <motion.div variants={buttonVariants}>
        <ShineFX>
          <Button
            variant={'accentBlue'}
            className={styles.toWorkBtn}
            onClick={onClose}
          >
            {t('scenarios.toWork')}
          </Button>
        </ShineFX>
      </motion.div>
    </motion.div>
  );
};
