import { useMemo, useState } from 'react';

import { AnimatePresence, motion } from 'motion/react';

import { GameSettingsContent } from '@/entities/game-settings';
import { useNavigationStore } from '@/entities/navigation';
import { useTranslation } from '@/features/i18n';
import {
  Button,
  GIPAIICon,
  Icon,
  ShineFX,
  Sunburst,
  ZoomMotion,
} from '@/shared/ui';

import { MessageBox } from './MessageBox';

import styles from './GameEndScene.module.css';

export const GameEndScene = () => {
  const { t } = useTranslation();

  const navigation = useNavigationStore();

  const [currentMessageIdx, setCurrentMessageIdx] = useState(0);

  const messages = useMemo(() => {
    return [
      t('screens.gameend.msg1'),
      t('screens.gameend.msg2'),
      t('screens.gameend.msg3'),
      t('screens.gameend.msg4'),
    ];
  }, [t]);

  const isLastMessage = useMemo(() => {
    return currentMessageIdx === messages.length - 1;
  }, [currentMessageIdx, messages]);

  const backgroundSrc =
    currentMessageIdx <= 1
      ? '/images/gameend/solution.webp'
      : '/images/gameend/global.webp';

  const handleNext = () => {
    if (!isLastMessage) {
      setCurrentMessageIdx((prev) => prev + 1);
    } else {
      navigation.setScene('lobby');
    }
  };

  return (
    <ZoomMotion duration={0.8} className={styles.root}>
      <AnimatePresence mode={'popLayout'}>
        <motion.img
          key={backgroundSrc}
          src={backgroundSrc}
          className={styles.backgroundImg}
          draggable={false}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        />
      </AnimatePresence>

      <div className={styles.inner}>
        <ZoomMotion duration={2} scale={0.1} className={styles.shield}>
          <Sunburst />

          <Icon className={styles.shieldIcon} name={'shield'} />
          <ShineFX>
            <Button variant={'white'} glow className={styles.shieldTitle}>
              <GIPAIICon className={styles.aiIcon} />
              {t('screens.gameend.title')}
            </Button>
          </ShineFX>
        </ZoomMotion>
      </div>

      <div className={styles.messages}>
        <MessageBox
          key={currentMessageIdx}
          text={messages[currentMessageIdx]}
          isEnterBtn={isLastMessage}
          onNext={handleNext}
        />
      </div>

      <div className={styles.gameSettings}>
        <GameSettingsContent />
      </div>
    </ZoomMotion>
  );
};
