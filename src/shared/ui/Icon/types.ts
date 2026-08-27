export const ICON_NAMES = ['hoa', 'spiritual', 'lock'] as const;

export type IconName = (typeof ICON_NAMES)[number];
