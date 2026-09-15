import { useRef } from 'react';

import { motion, useScroll, useTransform } from 'motion/react';

import { getLocationById } from '@/entities/location';
import { useNavigationStore } from '@/entities/navigation';
import { usePlayerProgressStore } from '@/entities/player-progress/model/store';
import { getReviewsByProgress } from '@/entities/review';
import { getLocationScenarios } from '@/entities/scenario';
import { useTranslation } from '@/features/i18n';
import { Button, Icon } from '@/shared/ui';

import { getContentStats } from '../lib/get-content-stats';
import { PreviewContentReviews } from './PreviewContentReviews';
import { PreviewContentScenarios } from './PreviewContentScenarios';
import { PreviewContentStats } from './PreviewContentStats';

import styles from './PreviewContent.module.css';

export const PreviewContent = () => {
  const { t } = useTranslation();

  const { selectedLocationId, closePreview, setScene } = useNavigationStore();
  const playerProgress = usePlayerProgressStore();

  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll({
    container: containerRef,
  });

  const SCROLL_RANGE = [0, 150];

  const headerHeight = useTransform(scrollY, SCROLL_RANGE, ['150px', '80px']);
  const imageBlur = useTransform(scrollY, SCROLL_RANGE, ['2px', '12px']);
  const filterStyle = useTransform(imageBlur, (blur) => `blur(${blur})`);

  const location = getLocationById(selectedLocationId);
  const reviews = getReviewsByProgress({
    locationId: location?.id ?? 'loc1',
    progress: playerProgress,
  });
  const contentStats = getContentStats(location?.id ?? 'loc1', playerProgress);
  const scenarios = getLocationScenarios(selectedLocationId);
  const completedScenarioIds = playerProgress.completedScenarioIds;

  const handleStart = () => {
    setScene('briefing');
  };

  if (!location) {
    return null;
  }

  return (
    <div className={styles.root}>
      <motion.div className={styles.header} style={{ height: headerHeight }}>
        <motion.div
          className={styles.headerImageContainer}
          style={{ filter: filterStyle }}
        >
          <div className={styles.headerBg} />
          <img src={location.previewImage} className={styles.headerImage} />
        </motion.div>

        <div className={styles.headerContent}>
          <Icon className={styles.locationIcon} name={location.icon.name} />
          <h3 className={styles.locationName}>{location.name}</h3>
        </div>
      </motion.div>

      <div className={styles.stats}>
        <PreviewContentStats
          rating={contentStats.rating}
          downloads={contentStats.downloads}
          reviews={contentStats.reviews}
        />
      </div>

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

      <div className={styles.scenarios}>
        <PreviewContentScenarios
          location={location}
          scenarios={scenarios}
          completedIds={completedScenarioIds}
        />
      </div>

      <div ref={containerRef} className={styles.content}>
        <p className={styles.description}>{t(location.descriptionKey)}</p>

        <PreviewContentReviews reviews={reviews} />
      </div>
    </div>
  );
};
