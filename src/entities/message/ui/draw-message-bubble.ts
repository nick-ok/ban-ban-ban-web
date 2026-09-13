import * as PIXI from 'pixi.js';

import { MESSAGE_CONFIG } from '../config/message-config';

export interface Props {
  width: number;
  height: number;
  side: 'left' | 'right';
  color: number;
  strokeColor?: number;
  strokeWidth?: number;
}

export const drawMessageBubble = ({
  width,
  height,
  side,
  color,
  strokeColor = 0x1a1a24,
  strokeWidth = 1,
}: Props): PIXI.Graphics => {
  const graphics = new PIXI.Graphics();

  const { bubble, tail } = MESSAGE_CONFIG;
  const { radius } = bubble;

  const offset = strokeWidth;
  const xMax = width - offset;
  const yMax = height - offset;

  const tailX =
    side === 'left' ? tail.offset + offset : xMax - tail.offset - tail.width;
  const tailY = yMax;

  // top-right side
  graphics
    .moveTo(offset + radius, offset)
    .lineTo(xMax - radius, offset)
    .arcTo(xMax, offset, xMax, offset + radius, radius)
    .lineTo(xMax, yMax - radius)
    .arcTo(xMax, yMax, xMax - radius, yMax, radius);

  // tail
  graphics
    .lineTo(tailX + tail.width, tailY)
    .lineTo(tailX + tail.width / 2, tailY + tail.height)
    .lineTo(tailX, tailY);

  // bottom-left side
  graphics
    .lineTo(offset + radius, yMax)
    .arcTo(offset, yMax, offset, yMax - radius, radius)
    .lineTo(offset, offset + radius)
    .arcTo(offset, offset, offset + radius, offset, radius);

  graphics.fill({ color });

  graphics.stroke({
    color: strokeColor,
    width: strokeWidth,
    alpha: 0.3,
    alignment: 0,
    join: 'round',
    cap: 'round',
  });

  return graphics;
};
