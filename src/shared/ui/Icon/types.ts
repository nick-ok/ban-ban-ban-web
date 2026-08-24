export const ICON_NAMES = ['hoc', 'spiritual', 'lock'] as const;

export type IconName = (typeof ICON_NAMES)[number];
