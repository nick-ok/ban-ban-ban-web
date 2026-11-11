import { useEffect, useMemo, useRef, useState } from 'react';

import { useGameSettingsStore } from '@/entities/game-settings';
import { getLocationById } from '@/entities/location';
import { useNavigationStore } from '@/entities/navigation';
import { usePlayerProgressStore } from '@/entities/player-progress/model/store';
import {
  getActiveScenario,
  getLastUnlockedLocationScenario,
  getScenarioById,
} from '@/entities/scenario';
import { AudioService } from '@/features/audio';
import { GameStage, useGameStore } from '@/features/game';
import { AppDrawer, Button, Icon, ZoomMotion } from '@/shared/ui';

import { GameClock } from './GameClock';
import { GameClue } from './GameClue';
import { GameDrawerContent } from './GameDrawerContent';

import styles from './GameScene.module.css';

export const GameScene = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [clueOpen, setClueOpen] = useState(false);

  const sceneRef = useRef<HTMLDivElement>(null);

  const gameSettings = useGameSettingsStore();

  const { selectedLocationId, selectedScenarioId } = useNavigationStore();

  const progress = usePlayerProgressStore();

  const startGame = useGameStore((state) => state.startGame);
  const setGamePaused = useGameStore((state) => state.setGamePaused);

  const location = getLocationById(selectedLocationId);

  const isAutoModerationEnabled =
    !!progress.autoModeration?.[selectedLocationId ?? 'loc1'];
  const isGlobalAIActive = progress.isGlobalAIActive;

  const baseScenario = useMemo(() => {
    if (selectedScenarioId !== null) {
      return getScenarioById(selectedScenarioId);
    }

    return getLastUnlockedLocationScenario(
      selectedLocationId ?? 'loc1',
      progress,
    );
  }, [progress, selectedLocationId, selectedScenarioId]);

  const activeScenario = useMemo(() => {
    return getActiveScenario({
      locationId: location?.id ?? null,
      scenario: baseScenario ?? null,
      isAutoModerationEnabled,
      isGlobalAIActive,
    });
  }, [baseScenario, isAutoModerationEnabled]);

  const isLastScenario = useMemo(() => {
    return activeScenario?.id === 'loc6_sc3';
  }, [activeScenario]);

  useEffect(() => {
    if (activeScenario) {
      startGame({
        startTime: activeScenario.startWorktime,
        endTime: activeScenario.endWorktime,
        scenarioId: activeScenario.id,
        isAutomoderation: isAutoModerationEnabled || isGlobalAIActive,
      });
    }
  }, [activeScenario, startGame, isAutoModerationEnabled, isGlobalAIActive]);

  useEffect(() => {
    setGamePaused(menuOpen || clueOpen || gameSettings.isSettingsOpen);
  }, [menuOpen, clueOpen, gameSettings.isSettingsOpen]);

  useEffect(() => {
    if (menuOpen || clueOpen) {
      AudioService.setMusicVolume(0.2);
    }

    return () => AudioService.setMusicVolume(1.0);
  }, [menuOpen, clueOpen]);

  useEffect(() => {
    if (sceneRef.current && !isAutoModerationEnabled && !isGlobalAIActive) {
      setClueOpen(true);
    }
  }, [isAutoModerationEnabled, isGlobalAIActive]);

  useEffect(() => {
    if (location?.id === 'loc6' && !isLastScenario && !isGlobalAIActive) {
      AudioService.playMusic('game');
    }
  }, [location?.id, isLastScenario, isGlobalAIActive]);

  useEffect(() => {
    if (isLastScenario && !isGlobalAIActive && !isAutoModerationEnabled) {
      AudioService.playMusic('involution', false);
    }
  }, [isLastScenario, isGlobalAIActive, isAutoModerationEnabled]);

  if (!activeScenario || !location) {
    return null;
  }

  return (
    <ZoomMotion ref={sceneRef} className={styles.root}>
      <div
        className={styles.hud}
        style={{
          background: isGlobalAIActive
            ? 'var(--color-black)'
            : location.background,
        }}
      >
        {!isAutoModerationEnabled && !isGlobalAIActive ? (
          <GameClock />
        ) : (
          <div />
        )}

        <div className={styles.menuWrapper}>
          {!isAutoModerationEnabled && !isGlobalAIActive && (
            <AppDrawer
              containerRef={sceneRef}
              direction={'top'}
              open={clueOpen}
              onOpenChange={setClueOpen}
              trigger={
                <Button
                  className={styles.clueBtn}
                  variant={'white'}
                  withSound={false}
                  glow={true}
                >
                  <Icon name={'question'} className={styles.questionIcon} />
                </Button>
              }
            >
              {() => <GameClue scenario={activeScenario} />}
            </AppDrawer>
          )}

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
