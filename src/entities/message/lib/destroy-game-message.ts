import * as PIXI from 'pixi.js';

import type { ExtendedPixiMessageContainer } from '../model/types';

interface Params {
  stage: PIXI.Container;
  container: ExtendedPixiMessageContainer;
}

export const destroyGameMessage = ({ stage, container }: Params): void => {
  stage.removeChild(container);
  container.destroy({ children: true, texture: false });
};
