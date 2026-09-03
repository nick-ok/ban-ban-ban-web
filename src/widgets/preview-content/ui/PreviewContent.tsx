import { useRef } from 'react';

import clsx from 'clsx';
import { motion, useScroll, useTransform } from 'motion/react';

import type { Location } from '@/entities/location';
import { useTranslation } from '@/features/i18n';
import { Button, Icon } from '@/shared/ui';

import styles from './PreviewContent.module.css';

interface Props {
  location: Location;
  onStart: () => void;
  onClose: () => void;
}

export const PreviewContent = ({ location, onStart, onClose }: Props) => {
  const { t } = useTranslation();

  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll({
    container: containerRef,
  });

  const SCROLL_RANGE = [0, 150];

  const headerHeight = useTransform(scrollY, SCROLL_RANGE, ['150px', '80px']);
  const imageBlur = useTransform(scrollY, SCROLL_RANGE, ['1px', '12px']);
  const filterStyle = useTransform(imageBlur, (blur) => `blur(${blur})`);

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

      <div className={styles.btns}>
        <Button
          className={clsx(styles.btn, styles.cancelBtn)}
          onClick={onClose}
        >
          {t('screens.preview.cancel')}
        </Button>

        <Button className={clsx(styles.btn, styles.startBtn)} onClick={onStart}>
          {t('screens.preview.start')}
        </Button>
      </div>

      <div ref={containerRef} className={styles.content}>
        <p className={styles.description}>{t(location.descriptionKey)}</p>
      </div>
    </div>
  );
};
