import { useMemo } from 'react';

import ReactMarkdown from 'react-markdown';

import { obfuscateToBinary } from '@/entities/message';
import { usePlayerProgressStore } from '@/entities/player-progress/model/store';
import { useTranslation } from '@/features/i18n';
import { Icon, ZoomMotion } from '@/shared/ui';

import { getGIPMessage } from '../lib/get-gip-message';

import styles from './GIPMessage.module.css';

export const GIPMessage = () => {
  const { t } = useTranslation();

  const playerProgress = usePlayerProgressStore();
  const message = getGIPMessage(playerProgress);

  const messageText = useMemo(() => {
    if (playerProgress.isGlobalAIActive) {
      return obfuscateToBinary(t(message));
    }

    return t(message);
  }, [playerProgress.isGlobalAIActive, t]);

  return (
    <ZoomMotion duration={0.8} scale={0.2} className={styles.root}>
      <div className={styles.title}>
        <Icon name="gip-ai" className={styles.icon} />
        @GIP AI
      </div>

      <div className={styles.text}>
        <ReactMarkdown>{messageText}</ReactMarkdown>
      </div>
    </ZoomMotion>
  );
};
