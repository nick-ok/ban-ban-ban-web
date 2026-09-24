import * as PIXI from 'pixi.js';

import { createGameMessage } from '@/entities/message';
import { createMessageByScenario } from '@/entities/message/lib/create-message-by-scenario';
import { rollBanAction, type Scenario } from '@/entities/scenario';
import { useGameStore } from '@/features/game';

import { attachMessageInput } from '../lib/attach-message-input';
import { getMessagePosition } from '../lib/get-message-position';
import { initMessageState } from '../lib/init-message-state';

export const useSpawnLogic = (
  scenario: Scenario | null,
  app: PIXI.Application | null,
) => {
  const incrementStat = useGameStore((state) => state.incrementStat);
  const isAutomoderation = useGameStore((state) => state.isAutomoderation);

  const spawnMessage = () => {
    if (!scenario || !app) {
      return;
    }

    const banAction = rollBanAction(scenario.probabilities);

    const message = createMessageByScenario(scenario, banAction);
    const container = createGameMessage(message, isAutomoderation);

    const { x, y } = getMessagePosition(container, app, message.side);
    container.x = x;
    container.y = y;

    initMessageState(container, message.banAction);
    attachMessageInput(container);

    app.stage.addChild(container);
    incrementStat('total');
  };

  return { spawnMessage };
};
