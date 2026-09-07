import { useCallback } from 'react';

import * as PIXI from 'pixi.js';

import { createGameMessage, type BanAction } from '@/entities/message';
import { createMessageByScenario } from '@/entities/message/lib/create-message-by-scenario';
import type { Scenario } from '@/entities/scenario';
import { useGameStore } from '@/features/game';

export const useSpawnLogic = (
  scenario: Scenario | null,
  app: PIXI.Application | null,
) => {
  const incrementStat = useGameStore((state) => state.incrementStat);

  const spawnMessage = useCallback(() => {
    if (!scenario || !app) {
      return;
    }

    const rand = Math.random();

    let banAction: BanAction = 'none';

    if (rand < scenario.probabilities.ban) {
      banAction = 'ban';
    } else if (
      rand <
      scenario.probabilities.ban + scenario.probabilities.longBan
    ) {
      banAction = 'longBan';
    }

    const message = createMessageByScenario(scenario, banAction);
    const container = createGameMessage(message);

    const stageWidth = app.renderer.width;
    const stageHeight = app.renderer.height;

    const containerWidth = container.getBounds().width || 200;
    const containerHeight = container.getBounds().height || 200;

    container.x = message.side === 'left' ? 0 : stageWidth - containerWidth;
    container.y = stageHeight - containerHeight;

    container.isPressed = false;

    let holdTime = 0;
    const targetTime = message.banAction === 'longBan' ? 1000 : 500;

    const tickHandler = (ticker: PIXI.Ticker) => {
      holdTime += ticker.elapsedMS;

      if (holdTime >= targetTime) {
        app.ticker.remove(tickHandler);

        if (message.banAction === 'ban') {
          incrementStat('banned');
        } else if (message.banAction === 'longBan') {
          incrementStat('longBanned');
        } else {
          incrementStat('wrongBanned');
        }

        app.stage.removeChild(container);
        container.destroy({ children: true });
      }
    };

    const handlePointerUp = () => {
      if (!container.isPressed) {
        return;
      }

      app.ticker.remove(tickHandler);
      container.isPressed = false;
      container.zIndex = 0;
    };

    container.on('pointerdown', () => {
      container.isPressed = true;
      container.zIndex = 10;
      holdTime = 0;

      app.ticker.add(tickHandler);
    });

    container.on('pointerup', handlePointerUp);
    container.on('pointerupoutside', handlePointerUp);

    app.stage.addChild(container);

    incrementStat('total');
  }, [scenario, app, incrementStat]);

  return { spawnMessage };
};
