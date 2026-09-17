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
import { AudioService } from '@/features/audio';
import { useTranslation } from '@/features/i18n';
import { Button, Icon, ZoomMotion } from '@/shared/ui';

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
      AudioService.play({ key: 'chatMessage', randomize: false });
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleNavigateToPreview = () => {
    navigateToPreview(selectedLocationId ?? 'loc1');
  };

  if (!scenario || briefingFlow.length === 0) {
    return <NoInstructions />;
  }

  return (
    <ZoomMotion className={styles.root} onClick={handleScreenClick}>
      <header className={styles.header} onClick={(e) => e.stopPropagation()}>
        {location && (
          <div className={styles.headerInner}>
            <Button
              className={styles.backBtn}
              onClick={handleNavigateToPreview}
            >
              <Icon name={'angle-left'} className={styles.angleIcon} />
            </Button>

            <div className={styles.locationTitle}>
              <Icon
                name={location?.icon.name ?? 'hoa'}
                className={styles.locationIcon}
              />
              <h2 className={styles.locationName}>{location?.name ?? ''}</h2>
            </div>

            <div className={styles.owner}>
              <img
                src={location.owner.avatarUrl}
                className={styles.onwerImage}
              />

              <div>
                <div className={styles.ownerName}>{location.owner.name}</div>
                <div className={styles.ownerPosition}>
                  {location.owner.position}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      <div className={styles.chatFeed}>
        <div className={styles.chatFeedInner}>
          <AnimatePresence mode="popLayout">
            {visibleMessages.toReversed().map((msg) => {
              const isAI = msg.senderType === 'ai';
              const isSystem = msg.senderType === 'system';

              return (
                <motion.div
                  key={msg.id}
                  layout
                  className={clsx(
                    styles.clientBox,
                    isAI && styles.aiBox,
                    isSystem && styles.systemBox,
                  )}
                  variants={messageVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {isAI && <Icon name={'sparkles'} />}

                  <div className={styles.messageContent}>
                    {!isAI && !isSystem && (
                      <>
                        <span className={styles.senderName}>
                          {sender?.name}
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
              onClick={handleNavigateToPreview}
              className={styles.actionBtn}
              style={{ color: 'white' }}
            >
              {t('scenarios.cancel')}
            </Button>

            <Button
              onClick={() => setScene('game')}
              className={styles.actionBtn}
            >
              {t('scenarios.start')}
            </Button>
          </motion.footer>
        )}
      </AnimatePresence>
    </ZoomMotion>
  );
};
