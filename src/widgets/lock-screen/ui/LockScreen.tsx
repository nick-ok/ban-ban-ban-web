import { useEffect, useState } from 'react';

import cn from 'clsx';
import { motion } from 'motion/react';
import type { Variants } from 'motion/react';

import { useNavigationStore } from '@/entities/navigation';
import { useTranslation } from '@/features/i18n';

import styles from './styles.module.css';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export const LockScreen = () => {
  const { t, i18n } = useTranslation();
  const { setScene } = useNavigationStore();
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeStr = new Intl.DateTimeFormat(i18n.language, {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(now);

  const dateStr = new Intl.DateTimeFormat(i18n.language, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  }).format(now);

  return (
    <motion.div
      className={styles.root}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={styles.wallpaper}>
        <div className={cn(styles.blob, styles.blob_1)} />
        <div className={cn(styles.blob, styles.blob_2)} />
        <div className={cn(styles.blob, styles.blob_3)} />
        <div className={cn(styles.blob, styles.blob_4)} />
      </div>

      <div className={styles.content}>
        <motion.div className={styles.clock} variants={itemVariants}>
          <div className={styles.time}>{timeStr}</div>
          <div className={styles.date}>{dateStr}</div>
        </motion.div>

        <motion.div className={styles.menu} variants={itemVariants}>
          <button className={styles.btn} onClick={() => setScene('lobby')}>
            {t('screens.lock.new_game')}
          </button>
          <button className={styles.btn} onClick={() => setScene('lobby')}>
            {t('screens.lock.continue')}
          </button>
          <button className={styles.btn} onClick={() => alert('Settings')}>
            {t('screens.lock.settings')}
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};
