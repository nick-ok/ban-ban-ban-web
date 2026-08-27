import { AnimatePresence, motion } from 'motion/react';

import { Icon, type IconName } from '@/shared/ui';

import styles from './PreviewSceneSplash.module.css';

interface Props {
  isReady: boolean;
  iconName: IconName;
  title: string;
}

export const PreviewSceneSplash = ({ isReady, iconName, title }: Props) => {
  return (
    <AnimatePresence>
      {!isReady && (
        <motion.div
          className={styles.splash}
          initial={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
          animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
          exit={{ opacity: 0, scale: 0.96, x: '-50%', y: '-50%' }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
        >
          <Icon name={iconName} size={64} />
          <div className={styles.splashTitle}>{title}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
