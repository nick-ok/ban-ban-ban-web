import { useEffect, useRef } from 'react';

import * as PIXI from 'pixi.js';

import type { ExtendedPixiMessageContainer } from '@/entities/message';
import { useGameStore } from '@/features/game';

const GAME_MINUTES_PER_SECOND = 4;

interface UseGameLoopOptions {
  app: PIXI.Application | null;
  isActive: boolean;
  spawnInterval: number;
  onSpawn: () => void;
}

export const useGameLoop = ({
  app,
  isActive,
  spawnInterval,
  onSpawn,
}: UseGameLoopOptions) => {
  const spawnTimerRef = useRef<number>(0);

  const isWorkingDayActive = useGameStore((state) => state.isWorkingDayActive);
  const isDayFinished = useGameStore((state) => state.isDayFinished);

  const updateGameTime = useGameStore((state) => state.updateGameTime);
  const finishGame = useGameStore((state) => state.finishGame);

  const handler = (ticker: PIXI.Ticker) => {
    if (!app) {
      return;
    }

    const deltaMS = ticker.deltaMS;

    spawnTimerRef.current += deltaMS;

    if (isWorkingDayActive) {
      const gameMinutesPassed = (deltaMS / 1000) * GAME_MINUTES_PER_SECOND;

      updateGameTime(gameMinutesPassed);

      spawnTimerRef.current += deltaMS;

      if (spawnTimerRef.current >= spawnInterval) {
        spawnTimerRef.current = 0;
        onSpawn();
      }
    }

    const stage = app.stage;
    const margin = 20;

    const children = stage.children.slice() as ExtendedPixiMessageContainer[];

    for (const child of children) {
      const speed = child.messageData?.speed ?? 0.5;
      const moveAmount = speed * (deltaMS / 1000) * 100;

      child.y -= moveAmount;

      const bounds = child.getBounds();

      if (bounds.y + bounds.height < -margin) {
        console.log('Handle miss', child.messageData);

        stage.removeChild(child);
        child.destroy({ children: true });
      }
    }

    if (isDayFinished && stage.children.length === 0) {
      finishGame(0);
    }
  };

  useEffect(() => {
    if (!app || !isActive) {
      return;
    }

    const ticker = app.ticker;

    ticker.add(handler);

    return () => {
      ticker.remove(handler);
      spawnTimerRef.current = 0;
    };
  }, [isActive, handler, app]);
};
