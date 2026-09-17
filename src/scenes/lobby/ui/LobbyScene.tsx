import { BlobsFX, ScanFX, ZoomMotion } from '@/shared/ui';
import { AppGrid } from '@/widgets/app-grid';

import styles from './LobbyScene.module.css';

export const LobbyScene = () => {
  return (
    <ZoomMotion className={styles.root}>
      <BlobsFX />

      <ScanFX />

      <AppGrid />
    </ZoomMotion>
  );
};
