import { ZoomMotion } from '@/shared/ui';
import { AppGrid } from '@/widgets/app-grid';
import { BlobsFX } from '@/widgets/blobs-fx/ui/BlobsFX';
import { ScanFX } from '@/widgets/scan-fx';

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
