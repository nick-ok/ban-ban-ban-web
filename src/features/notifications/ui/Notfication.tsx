import { useEffect, useMemo } from 'react';

import ReactMarkdown from 'react-markdown';

import { AudioService } from '@/features/audio';
import { i18n, useTranslation, type ParseKeys } from '@/features/i18n';
import type { AppNotification } from '@/features/notifications/model/types';
import { formatDateTime, randomArrayItem } from '@/shared/lib';
import { Button, Icon } from '@/shared/ui';

import styles from './Notification.module.css';

interface Props {
  notification: AppNotification;
  onDismiss?: () => void;
  withAction?: boolean;
  withSound?: boolean;
}

const BTN_TEXTS: ParseKeys[] = [
  'screens.notifications.good1',
  'screens.notifications.good2',
  'screens.notifications.good3',
  'screens.notifications.good4',
  'screens.notifications.good5',
];

export const Notification = ({
  notification,
  onDismiss,
  withAction = false,
  withSound = false,
}: Props) => {
  const { t } = useTranslation();

  const { iconName, title, description, timestamp } = notification;

  const btnText = useMemo(() => {
    const txt = randomArrayItem(BTN_TEXTS) ?? 'screens.notifications.good1';

    return t(txt);
  }, []);

  useEffect(() => {
    if (!withSound) {
      return;
    }

    AudioService.play({ key: 'notification' });
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <Icon name={iconName} className={styles.icon} />

        <div>
          <p className={styles.date}>
            {formatDateTime(new Date(timestamp), i18n.language)}
          </p>

          <h4 className={styles.title}>{title}</h4>

          <div>
            <ReactMarkdown>{t(description)}</ReactMarkdown>
          </div>
        </div>
      </div>

      {withAction && (
        <Button className={styles.btn} onClick={onDismiss}>
          {btnText}
        </Button>
      )}
    </div>
  );
};
