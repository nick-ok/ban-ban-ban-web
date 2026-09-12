import { useMemo, useState } from 'react';

import clsx from 'clsx';
import { AnimatePresence, motion, type Variants } from 'motion/react';

import { getLocationById } from '@/entities/location';
import { useNavigationStore } from '@/entities/navigation';
import { usePlayerProgressStore } from '@/entities/player-progress/model/store';
import {
  getLastUnlockedLocationScenario,
  getScenarioById,
} from '@/entities/scenario';
import { useTranslation } from '@/features/i18n';
import { Button, Icon, ZoomMotion } from '@/shared/ui';
import { ScanFX } from '@/widgets/scan-fx';

import { NoInstructions } from './NoInstructions';

import styles from './BriefingScene.module.css';

const messageVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

const actionsVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

export const BriefingScene = () => {
  const { t } = useTranslation();

  const {
    setScene,
    navigateToPreview,
    selectedScenarioId,
    selectedLocationId,
  } = useNavigationStore();
  const progress = usePlayerProgressStore();

  const scenario = useMemo(() => {
    if (selectedScenarioId !== null) {
      return getScenarioById(selectedScenarioId);
    }

    return getLastUnlockedLocationScenario(
      selectedLocationId ?? 'loc1',
      progress,
    );
  }, [progress, selectedLocationId, selectedScenarioId]);

  const location = getLocationById(scenario?.locationId ?? null);

  const briefingFlow = scenario?.briefingFlow ?? [];
  const sender = scenario?.briefingSender;

  const [currentStep, setCurrentStep] = useState(0);

  const isLastStep = currentStep === briefingFlow.length - 1;
  const visibleMessages = briefingFlow.slice(0, currentStep + 1);

  const handleScreenClick = () => {
    if (!isLastStep) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  if (!scenario || briefingFlow.length === 0) {
    return <NoInstructions />;
  }

  return (
    <ZoomMotion className={styles.root} onClick={handleScreenClick}>
      <ScanFX />

      <header className={styles.header}>
        {location && (
          <div className={styles.locationTitle}>
            <Icon
              name={location?.icon.name ?? 'hoa'}
              className={styles.locationIcon}
            />
            <h2 className={styles.locationName}>{location?.name ?? '-'}</h2>
          </div>
        )}
      </header>

      <div className={styles.chatFeed}>
        <div className={styles.chatFeedInner}>
          <AnimatePresence mode="popLayout">
            {visibleMessages.toReversed().map((msg) => {
              const isAI = msg.senderType === 'ai';

              return (
                <motion.div
                  key={msg.id}
                  layout
                  className={clsx(styles.clientBox, isAI && styles.aiBox)}
                  variants={messageVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {sender?.avatarUrl && (
                    <img
                      src={
                        !isAI
                          ? sender.avatarUrl
                          : '/images/message/avatar-ai.webp'
                      }
                      alt="avatar"
                      className={styles.avatarImage}
                    />
                  )}

                  <div className={styles.messageContent}>
                    {!isAI && (
                      <>
                        <span className={styles.senderName}>
                          {sender?.name}
                        </span>
                        <span className={styles.senderPosition}>
                          {sender?.position}
                        </span>
                      </>
                    )}
                    <p className={styles.text}>{t(msg.textKey)}</p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {isLastStep && (
          <motion.footer
            className={styles.actionsBlock}
            variants={actionsVariants}
            initial="hidden"
            animate="visible"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              onClick={() => navigateToPreview(selectedLocationId ?? 'loc1')}
            >
              {t('scenarios.cancel')}
            </Button>

            <Button onClick={() => setScene('game')}>
              {t('scenarios.start')}
            </Button>
          </motion.footer>
        )}
      </AnimatePresence>
    </ZoomMotion>
  );
};
