import { useEffect, useRef } from 'react';

import * as PIXI from 'pixi.js';

import type { ExtendedPixiMessageContainer } from '@/entities/message';
import { useNavigationStore } from '@/entities/navigation';
import { useGameStore } from '@/features/game';

import { GAME_MINUTES_PER_SECOND, SPAWN_INTERVAL } from '../lib/constants';

interface UseGameLoopOptions {
  app: PIXI.Application | null;
  isActive: boolean;
  onSpawn: () => void;
}

export const useGameLoop = ({ app, isActive, onSpawn }: UseGameLoopOptions) => {
  const spawnTimerRef = useRef<number>(0);
  const setScene = useNavigationStore((state) => state.setScene);

  const isPaused = useGameStore((state) => state.isPaused);
  const isWorkingDayActive = useGameStore((state) => state.isWorkingDayActive);
  const isDayFinished = useGameStore((state) => state.isDayFinished);
  const isGameComplete = useGameStore((state) => state.isGameComplete);

  const updateGameTime = useGameStore((state) => state.updateGameTime);
  const finishGame = useGameStore((state) => state.finishGame);
  const incrementStat = useGameStore((state) => state.incrementStat);
  const triggerReaction = useGameStore((state) => state.triggerReaction);

  const loopStateRef = useRef({
    isWorkingDayActive,
    isDayFinished,
    onSpawn,
    isPaused,
  });

  useEffect(() => {
    loopStateRef.current = {
      isWorkingDayActive,
      isDayFinished,
      onSpawn,
      isPaused,
    };
  }, [isWorkingDayActive, isDayFinished, onSpawn, isPaused]);

  useEffect(() => {
    if (!app || !isActive) {
      return;
    }

    const handler = (ticker: PIXI.Ticker) => {
      const elapsedMS = ticker.elapsedMS;
      const deltaMS = ticker.deltaMS;
      const {
        isWorkingDayActive: activeDay,
        isDayFinished: dayEnded,
        onSpawn: spawnFn,
        isPaused,
      } = loopStateRef.current;

      if (isPaused) {
        return;
      }

      if (activeDay) {
        const gameMinutesPassed = (deltaMS / 1000) * GAME_MINUTES_PER_SECOND;
        updateGameTime(gameMinutesPassed);

        spawnTimerRef.current += deltaMS;
        if (spawnTimerRef.current >= SPAWN_INTERVAL) {
          spawnTimerRef.current = 0;
          spawnFn();
        }
      }

      const stage = app.stage;
      const margin = 20;
      const children = stage.children.slice() as ExtendedPixiMessageContainer[];

      for (const child of children) {
        if (child.holdTime === undefined) {
          child.holdTime = 0;
        }

        const targetTime = child.targetTime || 500;

        if (child.isPressed) {
          child.holdTime += elapsedMS;

          if (child.holdTime >= targetTime) {
            const banAction = child.messageData?.banAction;

            if (banAction === 'ban') {
              incrementStat('banned');
              triggerReaction('banned');
            } else if (banAction === 'longBan') {
              incrementStat('longBanned');
              triggerReaction('longBanned');
            } else {
              incrementStat('wrongBanned');
              triggerReaction('wrongBanned');
            }

            stage.removeChild(child);
            child.destroy({ children: true });
            continue;
          }
        } else if (child.holdTime > 0) {
          child.holdTime -= elapsedMS * 2;
          if (child.holdTime < 0) {
            child.holdTime = 0;
          }
        }

        const percent = child.holdTime / targetTime;
        child.updateProgress(percent);

        if (child.isPressed) {
          continue;
        }

        const speed = child.messageData?.speed ?? 0.5;
        const moveAmount = speed * (deltaMS / 1000) * 100;
        child.y -= moveAmount;

        const bounds = child.getBounds();
        if (bounds.y + bounds.height < -margin) {
          const banAction = child.messageData?.banAction;

          if (banAction === 'ban') {
            incrementStat('missed');
            triggerReaction('missed');
          } else if (banAction === 'longBan') {
            incrementStat('missedLong');
            triggerReaction('missedLong');
          }

          stage.removeChild(child);
          child.destroy({ children: true });
        }
      }

      if (dayEnded && stage.children.length === 0) {
        finishGame();
      }
    };

    const ticker = app.ticker;
    ticker.add(handler);

    return () => {
      ticker.remove(handler);
      spawnTimerRef.current = 0;
    };
  }, [isActive, app, updateGameTime, finishGame, incrementStat]);

  useEffect(() => {
    if (isGameComplete) {
      setScene('dayend');
    }
  }, [isGameComplete, setScene]);
};
