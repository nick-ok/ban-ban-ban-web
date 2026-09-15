export const ICON_NAMES = [
  'angle-left',
  'anguished-face',
  'check',
  'chip-ai',
  'close',
  'confused-face',
  'crazy-face',
  'cross',
  'globe',
  'heart-on-fire',
  'heart-sparkling',
  'hoa',
  'lock',
  'menu',
  'reload',
  'spiritual',
  'star',
] as const;

export type IconName = (typeof ICON_NAMES)[number];
