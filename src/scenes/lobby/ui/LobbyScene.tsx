import { useEffect } from 'react';

import { AudioService } from '@/shared/lib';
import { BlobsFX, ScanFX, ZoomMotion } from '@/shared/ui';
import { AppGrid } from '@/widgets/app-grid';

import styles from './LobbyScene.module.css';

export const LobbyScene = () => {
  useEffect(() => {
    AudioService.playMusic('mainMenu');
  }, []);

  return (
    <ZoomMotion className={styles.root}>
      <BlobsFX />

      <ScanFX />

      <AppGrid />
    </ZoomMotion>
  );
};
