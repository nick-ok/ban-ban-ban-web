import { useEffect, useRef } from 'react';

import clsx from 'clsx';
import { AnimatePresence, motion } from 'motion/react';

import { AudioService } from '@/features/audio';

import { useNotificationsStore } from '../model/useNotificationsStore';
import { Notification } from './Notfication';

import styles from './NotificationStack.module.css';

const CARD_OFFSET_Y = -7;
const CARD_SCALE_STEP = 0.04;
const STAGGER_DELAY = 0.1;
const AUTO_DISMISS_TIMEOUT = 50_000;

export const NotificationStack = () => {
  const hasPlayedSoundRef = useRef(false);

  const activeLive = useNotificationsStore((state) => state.activeLive);
  const dismissTopNotification = useNotificationsStore(
    (state) => state.dismissTopNotification,
  );

  useEffect(() => {
    if (activeLive.length === 0) {
      return;
    }

    const timer = setTimeout(() => {
      dismissTopNotification();
    }, AUTO_DISMISS_TIMEOUT);

    return () => clearTimeout(timer);
  }, [activeLive, dismissTopNotification]);

  useEffect(() => {
    if (activeLive.length > 0 && !hasPlayedSoundRef.current) {
      AudioService.play({ key: 'notification' });
      hasPlayedSoundRef.current = true;
    }

    if (activeLive.length === 0) {
      hasPlayedSoundRef.current = false;
    }
  }, [activeLive.length]);

  if (activeLive.length === 0) {
    return null;
  }

  return (
    <div className={styles.root}>
      <AnimatePresence mode="popLayout">
        {activeLive.map((notification, index) => {
          const isTopCard = index === 0;

          return (
            <motion.div
              key={notification.id}
              className={clsx(styles.notification, !isTopCard && styles.benind)}
              layout
              initial={{ y: -150, opacity: 0, scale: 0.9 }}
              animate={{
                y: index * CARD_OFFSET_Y,
                scale: 1 - index * CARD_SCALE_STEP,
                zIndex: 100 - index,
                opacity: isTopCard ? 1 : 0.7 - index * 0.1,
              }}
              exit={{
                y: -100,
                opacity: 0,
                scale: 0.8,
                transition: { duration: 0.25 },
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 25,
                delay: index * STAGGER_DELAY,
              }}
            >
              <Notification
                notification={notification}
                onDismiss={dismissTopNotification}
                withAction={true}
                withSound={false}
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};
