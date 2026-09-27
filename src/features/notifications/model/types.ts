import type { ParseKeys } from '@/features/i18n';
import type { IconName } from '@/shared/ui';

export interface AppNotification {
  id: string;
  iconName: IconName;
  title: string;
  description: ParseKeys;
  timestamp: number;
}

export interface NotificationStore {
  notifications: AppNotification[];
  activeLive: AppNotification[];

  addNotifications: (newNotifications: AppNotification[]) => void;
  dismissTopNotification: () => void;
  clearAllNotifications: () => void;
}
