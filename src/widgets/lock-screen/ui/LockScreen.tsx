import { useEffect, useState } from 'react';

import { useNavigationStore } from '@/entities/navigation';
import { useTranslation } from '@/features/i18n';

import styles from './styles.module.css';

export const LockScreen = () => {
  const { t, i18n } = useTranslation();
  const { setScene } = useNavigationStore();
  const [now, setNow] = useState(new Date());

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

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.wallpaper} />

      <div className={styles.content}>
        <div className={styles.clock}>
          <div className={styles.time}>{timeStr}</div>
          <div className={styles.date}>{dateStr}</div>
        </div>

        <div className={styles.menu}>
          <button className={styles.btn} onClick={() => setScene('lobby')}>
            {t('screens.lock.new_game')}
          </button>

          <button className={styles.btn} onClick={() => setScene('lobby')}>
            {t('screens.lock.continue')}
          </button>

          <button
            className={styles.btn}
            onClick={() => alert('Settings placeholder')}
          >
            {t('screens.lock.settings')}
          </button>
        </div>
      </div>
    </div>
  );
};
