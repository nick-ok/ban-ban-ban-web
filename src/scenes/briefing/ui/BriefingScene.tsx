import { useMemo, useState } from 'react';

import clsx from 'clsx';
import { AnimatePresence, motion, type Variants } from 'motion/react';
import ReactMarkdown from 'react-markdown';

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

  const [currentStep, setCurrentStep] = useState(0);

  const scenario = useMemo(() => {
    if (selectedScenarioId !== null) {
      return getScenarioById(selectedScenarioId);
    }

    return getLastUnlockedLocationScenario(
      selectedLocationId ?? 'loc1',
      progress,
    );
  }, [progress, selectedLocationId, selectedScenarioId]);

  const isBreafingReaded = useMemo(() => {
    const attemptCount =
      progress.scenarioResults[scenario?.id ?? 'loc1_sc1']?.attemptCount ?? 0;

    return attemptCount > 0;
  }, [scenario]);

  const location = getLocationById(scenario?.locationId ?? null);

  const briefingFlow = scenario?.briefingFlow ?? [];
  const sender = scenario?.briefingSender;

  const isLastStep = !isBreafingReaded
    ? currentStep === briefingFlow.length - 1
    : true;
  const visibleMessages = isBreafingReaded
    ? briefingFlow
    : briefingFlow.slice(0, currentStep + 1);

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
      <header
        className={styles.header}
        style={{ background: location?.background }}
        onClick={(e) => e.stopPropagation()}
      >
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
                  key={msg.textKey}
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
                  {isAI && (
                    <div className={styles.gipAI}>
                      <Icon name={'gip-ai'} className={styles.aiIcon} />
                      <span>GIP AI</span>
                    </div>
                  )}

                  <div className={styles.messageContent}>
                    <div className={styles.text}>
                      {!isAI && !isSystem && (
                        <div className={styles.senderName}>
                          <img
                            src={sender?.avatarUrl}
                            className={styles.messageAvatar}
                          />
                          {sender?.name}
                        </div>
                      )}
                      <ReactMarkdown>{t(msg.textKey)}</ReactMarkdown>
                    </div>
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
              className={styles.actionCancelBtn}
            >
              {t('scenarios.cancel')}
            </Button>

            <Button
              onClick={() => setScene('game')}
              className={styles.actionStartBtn}
            >
              {t('scenarios.start')}
            </Button>
          </motion.footer>
        )}
      </AnimatePresence>
    </ZoomMotion>
  );
};
