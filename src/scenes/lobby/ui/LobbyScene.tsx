import { motion } from 'motion/react';

import { AppGrid } from '@/widgets/app-grid';
import { BlobsFX } from '@/widgets/blobs-fx/ui/BlobsFX';
import { ScanFX } from '@/widgets/scan-fx';

import styles from './LobbyScene.module.css';

export const LobbyScene = () => {
  return (
    <motion.div
      className={styles.root}
      initial={{ scale: 1.3, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <BlobsFX />

      <ScanFX />

      <AppGrid />
    </motion.div>
  );
};
