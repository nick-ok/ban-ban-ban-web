import { useRef, useState } from 'react';

import clsx from 'clsx';
import { AnimatePresence, motion, useScroll, useTransform } from 'motion/react';
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

export const PreviewContent = () => {
  const { t } = useTranslation();

  const [isReviewsOpen, setReviewsOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll({
    container: containerRef,
  });

  const SCROLL_RANGE = [0, 150];

  const headerHeight = useTransform(scrollY, SCROLL_RANGE, ['150px', '80px']);
  const imageBlur = useTransform(scrollY, SCROLL_RANGE, ['0px', '12px']);
  const filterStyle = useTransform(imageBlur, (blur) => `blur(${blur})`);

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
      <motion.div className={styles.header} style={{ height: headerHeight }}>
        <motion.div
          className={styles.headerImageContainer}
          style={{
            filter: filterStyle,
            background: isGlobalAIActive ? 'black' : 'rgba(0, 0, 0, 0.2)',
          }}
        >
          <div className={styles.headerBg} />

          {!isGlobalAIActive && (
            <img src={location.previewImage} className={styles.headerImage} />
          )}

          {isGlobalAIActive && (
            <Icon name={'lock-ai'} className={styles.lockAIIconHeader} />
          )}
        </motion.div>

        <div className={styles.headerContent}>
          <Icon
            className={styles.locationIcon}
            name={isGlobalAIActive ? 'lock-ai' : location.icon.name}
            style={{ color: isGlobalAIActive ? 'white' : undefined }}
          />
          <h3 className={styles.locationName}>
            {isGlobalAIActive
              ? obfuscateToBinary(location.name)
              : location.name}
          </h3>
        </div>
      </motion.div>

      <div className={styles.stats}>
        <PreviewContentStats
          rating={isGlobalAIActive ? 5 : contentStats.rating}
          downloads={contentStats.downloads}
          reviews={contentStats.reviews}
        />
      </div>

      {isLocationCompleted && (
        <div className={styles.enableAI}>
          <Button
            variant={isAIModeration ? 'success' : 'primary'}
            className={clsx(
              styles.enableAIBtn,
              !isAIModeration && styles.notEnabled,
            )}
            onClick={handleEnableAI}
          >
            <Icon name={'lock-ai'} className={styles.lockAIIcon} />
            {t(
              isAIModeration
                ? 'screens.preview.aiEnabled'
                : 'screens.preview.enableAI',
            )}
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
          variant={'primary'}
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

      <div ref={containerRef} className={styles.content}>
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
