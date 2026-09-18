import { useNavigationStore } from '@/entities/navigation';
import { usePlayerProgressStore } from '@/entities/player-progress/model/store';
import { Button } from '@/shared/ui';

import styles from './GameEndScene.module.css';

export const GameEndScene = () => {
  const { setScene } = useNavigationStore();
  const isGloablAIActive = usePlayerProgressStore(
    (state) => state.isGlobalAIActive,
  );

  return (
    <div className={styles.root}>
      <h1>{isGloablAIActive ? 'GIP Activated!' : 'GIP off'}</h1>

      <Button
        variant={'success'}
        style={{ width: 100, marginTop: 10 }}
        onClick={() => setScene('lobby')}
      >
        OK
      </Button>
    </div>
  );
};
