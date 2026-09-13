export const ICON_NAMES = [
  'accuracy',
  'broken-heart',
  'check',
  'chip-ai',
  'crazy-face',
  'cross',
  'floppy-disk',
  'globe',
  'heart-on-fire',
  'hoa',
  'lock',
  'reload',
  'sparkling-heart',
  'spiritual',
  'zipper-face',
] as const;

export type IconName = (typeof ICON_NAMES)[number];
