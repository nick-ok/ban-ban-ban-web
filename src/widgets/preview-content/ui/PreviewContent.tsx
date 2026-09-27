import { useState } from 'react';

import { AnimatePresence, motion, type Variants } from 'motion/react';
import ReactMarkdown from 'react-markdown';

import { getIsLocationCompleted, getLocationById } from '@/entities/location';
import { obfuscateToBinary } from '@/entities/message';
import { useNavigationStore } from '@/entities/navigation';
import { usePlayerProgressStore } from '@/entities/player-progress/model/store';
import { getReviewsByProgress } from '@/entities/review';
import {
  getLastUnlockedLocationScenario,
  getLocationScenarios,
} from '@/entities/scenario';
import { useTranslation } from '@/features/i18n';
import { Button, Icon } from '@/shared/ui';

import { getContentStats } from '../lib/get-content-stats';
import { PreviewContentReviews } from './PreviewContentReviews';
import { PreviewContentScenarios } from './PreviewContentScenarios';
import { PreviewContentStats } from './PreviewContentStats';

import styles from './PreviewContent.module.css';

const textAnimationVariants: Variants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -15 },
};

export const PreviewContent = () => {
  const { t } = useTranslation();

  const [isReviewsOpen, setReviewsOpen] = useState(false);

  const { selectedLocationId, setSelectedScenarioId, closePreview, setScene } =
    useNavigationStore();
  const playerProgress = usePlayerProgressStore();

  const location = getLocationById(selectedLocationId);
  const reviews = getReviewsByProgress({
    locationId: location?.id ?? 'loc1',
    progress: playerProgress,
  });
  const contentStats = getContentStats(location?.id ?? 'loc1', playerProgress);
  const scenarios = getLocationScenarios(selectedLocationId);
  const completedScenarioIds = playerProgress.completedScenarioIds;

  const isLocationCompleted = getIsLocationCompleted({
    locationId: location?.id,
    completedScenarioIds,
  });
  const isAutomoderationEnabled =
    playerProgress.autoModeration?.[location?.id ?? 'loc1'];
  const isGlobalAIActive = playerProgress.isGlobalAIActive;

  const isAIModeration = isAutomoderationEnabled || isGlobalAIActive;

  const handleStart = () => {
    if (!location) {
      return;
    }

    const scenario = getLastUnlockedLocationScenario(
      location.id,
      playerProgress,
    );

    setSelectedScenarioId(scenario.id);
    setScene(isGlobalAIActive || isAutomoderationEnabled ? 'game' : 'briefing');
  };

  const handleEnableAI = () => {
    if (!isLocationCompleted || !location?.id || isGlobalAIActive) {
      return;
    }

    playerProgress.toggleAutoModeration(location.id);
  };

  if (!location) {
    return null;
  }

  return (
    <div className={styles.root}>
      <div
        className={styles.header}
        style={{
          background: isGlobalAIActive
            ? 'var(--color-black)'
            : location.background,
        }}
      >
        <Icon
          className={styles.locationIcon}
          name={isGlobalAIActive ? 'gip-ai' : location.icon.name}
          style={{
            color: isGlobalAIActive ? 'var(--color-white)' : undefined,
          }}
        />
        <h3 className={styles.locationName}>
          {isGlobalAIActive ? obfuscateToBinary(location.name) : location.name}
        </h3>

        <div className={styles.stats}>
          <PreviewContentStats
            rating={isGlobalAIActive ? 5 : contentStats.rating}
            downloads={contentStats.downloads}
            reviews={contentStats.reviews}
          />
        </div>
      </div>

      {isLocationCompleted && (
        <div className={styles.enableAI}>
          <Button
            variant={isAIModeration ? 'white' : 'accentBlue'}
            glow={isAIModeration}
            className={styles.enableAIBtn}
            onClick={handleEnableAI}
          >
            <motion.span
              key={isAIModeration ? 'ai-enabled' : 'ai-disabled'}
              variants={textAnimationVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className={styles.enableAIBtnInner}
            >
              <Icon name={'gip-ai'} className={styles.lockAIIcon} />
              {t(
                isAIModeration
                  ? 'screens.preview.aiEnabled'
                  : 'screens.preview.enableAI',
              )}
            </motion.span>
          </Button>
        </div>
      )}

      <div className={styles.btns}>
        <Button
          className={styles.btn}
          bordered={true}
          variant={'primary'}
          onClick={closePreview}
        >
          {t('screens.preview.cancel')}
        </Button>

        <Button
          className={styles.btn}
          variant={'accentBlue'}
          onClick={handleStart}
        >
          {t('screens.preview.start')}
        </Button>
      </div>

      {!isGlobalAIActive && (
        <div className={styles.scenarios}>
          <PreviewContentScenarios
            location={location}
            scenarios={scenarios}
            completedIds={completedScenarioIds}
          />
        </div>
      )}

      <div className={styles.content}>
        <Button
          className={styles.reviewsBtn}
          onClick={() => setReviewsOpen(true)}
        >
          {t('screens.preview.reviewsTitle')}
          <Icon name={'angle-right'} className={styles.angleRight} />
        </Button>

        <div className={styles.description}>
          {isGlobalAIActive ? (
            obfuscateToBinary(t(location.descriptionKey))
          ) : (
            <ReactMarkdown>{t(location.descriptionKey)}</ReactMarkdown>
          )}
        </div>

        <AnimatePresence>
          {isReviewsOpen && (
            <PreviewContentReviews
              reviews={reviews}
              isGlobalAIActive={isGlobalAIActive}
              onClose={() => setReviewsOpen(false)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
