import * as PIXI from 'pixi.js';

import { MESSAGE_CONFIG } from '../config/message-config';

export interface Props {
  width: number;
  height: number;
  side: 'left' | 'right';
  color: number;
}

export const drawMessageBubble = ({
  width,
  height,
  side,
  color,
}: Props): PIXI.Graphics => {
  const graphics = new PIXI.Graphics();

  const { bubble, tail } = MESSAGE_CONFIG;

  const tailX =
    side === 'left' ? tail.offset : width - tail.offset - tail.width;
  const tailY = height;

  graphics
    .roundRect(0, 0, width, height, bubble.radius)
    .moveTo(tailX, tailY)
    .lineTo(tailX + tail.width / 2, tailY + tail.height)
    .lineTo(tailX + tail.width, tailY);

  graphics.fill(color);

  return graphics;
};
