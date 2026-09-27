import clsx from 'clsx';
import { motion } from 'motion/react';

import { useNavigationStore } from '@/entities/navigation';
import { useTranslation } from '@/features/i18n';
import { Notification, useNotificationsStore } from '@/features/notifications';
import { Button, Icon, ZoomMotion } from '@/shared/ui';

import styles from './NotificationsCenterScene.module.css';

export const NotificationsCenterScene = () => {
  const { t } = useTranslation();

  const { setScene } = useNavigationStore();
  const { notifications } = useNotificationsStore();

  const sorted = [...notifications].sort((a, b) => b.timestamp - a.timestamp);
  const noData = sorted.length === 0;

  return (
    <ZoomMotion scale={1.1} className={styles.root}>
      <div className={styles.head}>
        <Button onClick={() => setScene('lobby')}>
          <Icon name={'angle-left'} className={styles.angleLeft} />
        </Button>

        <h1 className={styles.headTitle}>
          {t('screens.notifications.notificationsCenter')}
        </h1>
      </div>

      <div className={clsx(styles.notifications, noData && styles.noData)}>
        {noData && <p>{t('screens.notifications.noData')}</p>}

        {sorted.length > 0 &&
          sorted.map((notification, idx) => (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, y: -60, scaleY: 0.4 }}
              animate={{ opacity: 1, y: 0, scaleY: 1 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
                delay: idx * 0.07,
              }}
              style={{ transformOrigin: 'top' }}
            >
              <Notification notification={notification} />
            </motion.div>
          ))}
      </div>
    </ZoomMotion>
  );
};
