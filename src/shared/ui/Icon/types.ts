export const ICON_NAMES = [
  'broken-heart',
  'chip-ai',
  'heart-on-fire',
  'hoa',
  'lock',
  'spiritual',
  'zipper-face',
] as const;

export type IconName = (typeof ICON_NAMES)[number];
