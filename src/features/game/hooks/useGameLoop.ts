import { useEffect, useRef } from 'react';

import * as PIXI from 'pixi.js';

import type { ExtendedPixiMessageContainer } from '@/entities/message';
import { useNavigationStore } from '@/entities/navigation';
import { usePlayerProgressStore } from '@/entities/player-progress/model/store';
import type { ScenarioId } from '@/entities/scenario';
import { calculateAccuracy, useGameStore } from '@/features/game';

import {
  createParticleLayer,
  type ParticleLayer,
} from '../lib/create-particle-layer';
import { createSpawnTimer } from '../lib/create-spawn-timer';
import { createScreenShake, type ScreenShake } from '../lib/screen-shake';
import { tickGameClock } from '../lib/tick-game-clock';
import { updateMessage } from '../lib/update-message';
import { updateParticles } from '../lib/update-particles';

interface UseGameLoopOptions {
  app: PIXI.Application | null;
  isActive: boolean;
  scenarioId: ScenarioId;
  spawnSpeed: number;
  onSpawn: () => void;
}

export const useGameLoop = ({
  app,
  isActive,
  scenarioId,
  spawnSpeed,
  onSpawn,
}: UseGameLoopOptions) => {
  const spawnTimerRef = useRef(createSpawnTimer(spawnSpeed));
  const setScene = useNavigationStore((state) => state.setScene);

  const isPaused = useGameStore((state) => state.isPaused);
  const isWorkingDayActive = useGameStore((state) => state.isWorkingDayActive);
  const isDayFinished = useGameStore((state) => state.isDayFinished);
  const isGameComplete = useGameStore((state) => state.isGameComplete);
  const stats = useGameStore((state) => state.stats);

  const updateGameTime = useGameStore((state) => state.updateGameTime);
  const finishGame = useGameStore((state) => state.finishGame);
  const incrementStat = useGameStore((state) => state.incrementStat);
  const isAutomoderation = useGameStore((state) => state.isAutomoderation);

  const recordScenarioResult = usePlayerProgressStore(
    (state) => state.recordScenarioResult,
  );

  const loopStateRef = useRef({
    isWorkingDayActive,
    isDayFinished,
    onSpawn,
    isPaused,
    isAutomoderation,
  });

  const particleLayerRef = useRef<ParticleLayer | null>(null);
  const screenShakeRef = useRef<ScreenShake | null>(null);

  useEffect(() => {
    loopStateRef.current = {
      isWorkingDayActive,
      isDayFinished,
      onSpawn,
      isPaused,
      isAutomoderation,
    };
  }, [isWorkingDayActive, isDayFinished, onSpawn, isPaused, isAutomoderation]);

  useEffect(() => {
    if (!app || !isActive) {
      return;
    }

    const handler = (ticker: PIXI.Ticker) => {
      const { elapsedMS, deltaMS } = ticker;

      const {
        isWorkingDayActive: activeDay,
        isDayFinished: dayEnded,
        onSpawn: spawnFn,
        isPaused,
        isAutomoderation,
      } = loopStateRef.current;

      if (isPaused) {
        return;
      }

      if (particleLayerRef.current) {
        updateParticles(particleLayerRef.current, deltaMS);
      }

      if (screenShakeRef.current) {
        screenShakeRef.current.update(deltaMS);
      }

      if (activeDay) {
        tickGameClock({
          deltaMS,
          isAutomoderation,
          updateGameTime,
        });

        spawnTimerRef.current.tick(deltaMS, spawnFn);
      }

      const stage = app.stage;
      const children = stage.children.slice() as ExtendedPixiMessageContainer[];

      const ctx = {
        stage,
        deltaMS,
        elapsedMS,
        incrementStat,
        particleLayer: particleLayerRef.current,
        screenShake: screenShakeRef.current,
      };

      for (const child of children) {
        if (!child.messageData) {
          continue;
        }

        updateMessage(child, ctx);
      }

      const hasMessages = stage.children.some(
        (child) => 'messageData' in child && !!child.messageData,
      );

      if (dayEnded && !hasMessages) {
        finishGame();
      }
    };

    const ticker = app.ticker;
    ticker.add(handler);

    return () => {
      if (app?.ticker?.started) {
        app.ticker.remove(handler);
        spawnTimerRef.current.reset();
      }
    };
  }, [isActive, app, updateGameTime, incrementStat, finishGame]);

  useEffect(() => {
    if (!app) {
      return;
    }

    const layer = createParticleLayer();

    app.stage.addChild(layer.container);
    particleLayerRef.current = layer;

    return () => {
      if (app.stage) {
        app.stage.removeChild(layer.container);
      }

      screenShakeRef.current = createScreenShake(app);

      if (!layer.container.destroyed) {
        layer.container.destroy({ children: true });
      }

      particleLayerRef.current = null;
    };
  }, [app]);

  useEffect(() => {
    if (!app) {
      return;
    }

    screenShakeRef.current = createScreenShake(app);

    return () => {
      screenShakeRef.current?.reset();
      screenShakeRef.current = null;
    };
  }, [app]);

  useEffect(() => {
    if (!isGameComplete) {
      return;
    }

    const computedAccuracy = calculateAccuracy(stats);

    recordScenarioResult(scenarioId, computedAccuracy);
    setScene('dayend');
  }, [isGameComplete, setScene, stats, scenarioId]);
};
