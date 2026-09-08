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

  const spawnMessage = () => {
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
    container.holdTime = 0;
    container.targetTime = message.banAction === 'longBan' ? 1000 : 500;

    container.on('pointerdown', () => {
      container.isPressed = true;
      container.zIndex = 10;
    });

    const handlePointerUp = () => {
      if (!container.isPressed) {
        return;
      }

      container.isPressed = false;
      container.zIndex = 0;
    };

    container.on('pointerup', handlePointerUp);
    container.on('pointerupoutside', handlePointerUp);

    app.stage.addChild(container);

    incrementStat('total');
  };

  return { spawnMessage };
};
