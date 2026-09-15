import { useEffect, useMemo, useRef, useState } from 'react';

import { getLocationById } from '@/entities/location';
import { useNavigationStore } from '@/entities/navigation';
import { usePlayerProgressStore } from '@/entities/player-progress/model/store';
import {
  getLastUnlockedLocationScenario,
  getScenarioById,
} from '@/entities/scenario';
import { GameStage, useGameStore } from '@/features/game';
import { AppDrawer, Button, Icon, ZoomMotion } from '@/shared/ui';

import { GameClock } from './GameClock';
import { GameDrawerContent } from './GameDrawerContent';
import { GameSceneReaction } from './GameSceneReaction';

import styles from './GameScene.module.css';

export const GameScene = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);

  const sceneRef = useRef<HTMLDivElement>(null);

  const { selectedLocationId, selectedScenarioId } = useNavigationStore();
  const progress = usePlayerProgressStore();

  const startGame = useGameStore((state) => state.startGame);
  const setGamePaused = useGameStore((state) => state.setGamePaused);

  const location = getLocationById(selectedLocationId);

  const activeScenario = useMemo(() => {
    if (selectedScenarioId !== null) {
      return getScenarioById(selectedScenarioId);
    }

    return getLastUnlockedLocationScenario(
      selectedLocationId ?? 'loc1',
      progress,
    );
  }, [progress, selectedLocationId, selectedScenarioId]);

  useEffect(() => {
    if (activeScenario) {
      startGame({
        startTime: activeScenario.startWorktime,
        endTime: activeScenario.endWorktime,
        scenarioId: activeScenario.id,
      });
    }
  }, [activeScenario, startGame]);

  useEffect(() => {
    setGamePaused(menuOpen || infoOpen);
  }, [menuOpen, infoOpen]);

  if (!activeScenario || !location) {
    return null;
  }

  return (
    <ZoomMotion ref={sceneRef} className={styles.root}>
      <div className={styles.hud}>
        <GameClock />

        <div className={styles.reaction}>
          <GameSceneReaction />
        </div>

        <div className={styles.menuWrapper}>
          <AppDrawer
            containerRef={sceneRef}
            direction={'top'}
            open={infoOpen}
            onOpenChange={setInfoOpen}
            trigger={
              <Button withSound={false}>
                <Icon name={'info'} className={styles.menuIcon} />
              </Button>
            }
          >
            {() => <div>INFO</div>}
          </AppDrawer>

          <AppDrawer
            containerRef={sceneRef}
            direction={'right'}
            onOpenChange={setMenuOpen}
            open={menuOpen}
            trigger={
              <Button withSound={false}>
                <Icon name={'menu'} className={styles.menuIcon} />
              </Button>
            }
          >
            {() => (
              <GameDrawerContent
                location={location}
                scenario={activeScenario}
                onClose={() => setMenuOpen(false)}
              />
            )}
          </AppDrawer>
        </div>
      </div>

      <GameStage scenario={activeScenario} />
    </ZoomMotion>
  );
};
