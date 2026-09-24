import * as PIXI from 'pixi.js';

export const MESSAGE_CONFIG = {
  bubble: {
    width: 190,
    headSize: 36,
    padding: 12,
    radius: 12,
    fontSize: 14,
    footerSize: 22,
  },
  colors: {
    background: 0xe8e8e8,
    text: 0x000000,
  },
  tail: {
    width: 16,
    height: 10,
    offset: 20,
  },
};

export const BLUR_FILTER = new PIXI.BlurFilter();
BLUR_FILTER.strength = 6;

export const HOLD_TIME_SHORT_MS = 500;
export const HOLD_TIME_LONG_MS = 1000;
