import * as PIXI from 'pixi.js';

import { BUBBLE_CONFIG } from '../model/constants';

export interface BubbleOptions {
  width: number;
  height: number;
  side: 'left' | 'right';
  color: number;
}

export const createBubble = ({
  width,
  height,
  side,
  color,
}: BubbleOptions): PIXI.Graphics => {
  const bubble = new PIXI.Graphics();

  const { radius, tail } = BUBBLE_CONFIG;
  const tailX =
    side === 'left' ? tail.offset : width - tail.offset - tail.width;
  const tailY = height;

  bubble
    .roundRect(0, 0, width, height, radius)
    .moveTo(tailX, tailY)
    .lineTo(tailX + tail.width / 2, tailY + tail.height)
    .lineTo(tailX + tail.width, tailY);

  bubble.fill(color);

  return bubble;
};
