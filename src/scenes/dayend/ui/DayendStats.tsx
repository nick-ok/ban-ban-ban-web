import { useMemo } from 'react';

import { motion, type Variants } from 'motion/react';

import type { GameStats } from '@/features/game';
import { useTranslation } from '@/features/i18n';
import { CountMotion, Icon } from '@/shared/ui';

import styles from './DayendStats.module.css';

interface Props {
  stats: GameStats;
  isPassed: boolean;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100 },
  },
};

export const DayendStats = ({ stats, isPassed }: Props) => {
  const { t } = useTranslation();

  const statItems = useMemo(
    () => [
      {
        id: 'total',
        icon: 'check' as const,
        label: t('screens.dayend.totalMessages'),
        value: stats.total,
      },
      {
        id: 'banned',
        icon: 'check' as const,
        label: t('screens.dayend.banned'),
        value: stats.banned,
      },
      {
        id: 'longBanned',
        icon: 'check' as const,
        label: t('screens.dayend.longBanned'),
        value: stats.longBanned,
      },
      ...(!isPassed
        ? [
            {
              id: 'wrongBanned',
              icon: 'cross' as const,
              label: t('screens.dayend.wrongBanned'),
              value: stats.wrongBanned,
              color: 'var(--color-danger)',
            },
            {
              id: 'missedLong',
              icon: 'cross' as const,
              label: t('screens.dayend.missedLong'),
              value: stats.missedLong,
              color: 'var(--color-danger)',
            },
            {
              id: 'missed',
              icon: 'cross' as const,
              label: t('screens.dayend.missed'),
              value: stats.missed,
              color: 'var(--color-warning)',
            },
          ]
        : []),
    ],
    [stats, isPassed, t],
  );

  return (
    <motion.div
      className={styles.stats}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {statItems.map((item) => (
        <motion.div
          key={item.id}
          className={styles.stat}
          variants={itemVariants}
        >
          <Icon name={item.icon} className={styles.statIcon} />
          <span style={{ color: item.color }}>{item.label}</span>
          <CountMotion className={styles.statValue} to={item.value} />
        </motion.div>
      ))}
    </motion.div>
  );
};
