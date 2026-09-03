import { useNavigationStore } from '@/entities/navigation';
import { PixiStage } from '@/widgets/pixi-stage';

import styles from './GameScene.module.css';

export const GameScene = () => {
  const { selectedLocationId } = useNavigationStore();

  return (
    <div className={styles.root}>
      <div className={styles.hud}>
        <h3>Локация: {selectedLocationId}</h3>
      </div>

      <PixiStage />
    </div>
  );
};
