import { useCallback } from 'react';

import * as PIXI from 'pixi.js';

import { createPixiMessage, type BanAction } from '@/entities/message';
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
      banAction = 'long_ban';
    }

    const message = createMessageByScenario(scenario, banAction);
    const container = createPixiMessage(message);

    const stageWidth = app.renderer.width;
    const stageHeight = app.renderer.height;

    const containerWidth = container.getBounds().width || 200;
    const containerHeight = container.getBounds().height || 200;

    container.x = message.side === 'left' ? 0 : stageWidth - containerWidth;
    container.y = stageHeight - containerHeight;

    container.on('pointerdown', () => {
      console.log('Handle tap', message);
    });

    app.stage.addChild(container);

    incrementStat('total');
  }, [scenario, app, incrementStat]);

  return { spawnMessage };
};
