import {
  getLocationById,
  getLocationStats,
  type LocationId,
} from '@/entities/location';
import {
  getGlobalAIProgress,
  getIsTotalGameComplete,
} from '@/entities/player-progress';
import { usePlayerProgressStore } from '@/entities/player-progress/model/store';
import { getNextToUnlock, type ScenarioId } from '@/entities/scenario';

import type { AppNotification } from '../model/types';
import { useNotificationsStore } from '../model/useNotificationsStore';

interface SendNotificationsParams {
  locationId: LocationId;
  scenarioId: ScenarioId;
}

export const useGameNotifications = () => {
  const progress = usePlayerProgressStore();
  const existingNotifications = useNotificationsStore(
    (state) => state.notifications,
  );
  const addNotifications = useNotificationsStore(
    (state) => state.addNotifications,
  );

  const sendNotifications = ({
    locationId,
    scenarioId,
  }: SendNotificationsParams) => {
    const location = getLocationById(locationId);
    const generatedNotifications: AppNotification[] = [];
    const timestamp = Date.now();
    const existingIds = new Set(existingNotifications.map((n) => n.id));

    if (!location) {
      return;
    }

    const { total, completed } = getLocationStats(location.id, progress);
    const completion = Math.round((completed / total) * 100);

    const { nextScenarioToUnlock, nextLocationToUnlock } =
      getNextToUnlock(scenarioId);

    // * Next scenario
    if (nextScenarioToUnlock && !nextLocationToUnlock) {
      const storyId = `${nextScenarioToUnlock.id}_newTask`;

      if (!existingIds.has(storyId)) {
        generatedNotifications.push({
          id: storyId,
          iconName: location.icon.name,
          title: location.name,
          description: 'screens.notifications.newTask',
          timestamp,
        });
      }
    }

    // * Next location
    if (nextLocationToUnlock) {
      const appId = `${nextLocationToUnlock.id}_newApp`;

      if (!existingIds.has(appId)) {
        generatedNotifications.push({
          id: appId,
          iconName: nextLocationToUnlock.icon.name,
          title: nextLocationToUnlock.name,
          description: 'screens.notifications.newApp',
          timestamp,
        });
      }
    }

    // * Auto moderation
    if (completion >= 100) {
      const automodId = `${location.id}_automoderation`;

      if (!existingIds.has(automodId)) {
        generatedNotifications.push({
          id: automodId,
          iconName: location.icon.name,
          title: location.name,
          description: 'screens.notifications.automoderation',
          timestamp,
        });
      }
    }

    // * Reviews
    const isPerfectClear =
      completed === total &&
      location.scenarioIds.every(
        (id) => (progress.scenarioResults[id]?.bestAccuracy ?? 0) === 100,
      );

    let threshold: string = '50';

    if (isPerfectClear) {
      threshold = '100_100';
    } else if (completion >= 100) {
      threshold = '100';
    }

    const reviewId = `${location.id}_${threshold}`;

    if (completion >= 50 && !existingIds.has(reviewId)) {
      generatedNotifications.push({
        id: reviewId,
        iconName: location.icon.name,
        title: location.name,
        description: 'screens.notifications.newReviews',
        timestamp,
      });
    }

    // GameEnd
    const isGameFinished = getIsTotalGameComplete(progress);

    if (isGameFinished) {
      const globalAccuracy = getGlobalAIProgress(progress);
      const isPerfectGame = globalAccuracy >= 100;

      const endDesc = isPerfectGame
        ? 'screens.notifications.gameEndCompletely'
        : 'screens.notifications.gameEnd';
      const endId = `system_${endDesc}`;

      if (!existingIds.has(endId)) {
        generatedNotifications.push({
          id: endId,
          iconName: 'gip-ai',
          title: 'GIP AI',
          description: endDesc,
          timestamp,
        });
      }
    }

    if (generatedNotifications.length > 0) {
      addNotifications(generatedNotifications);
    }
  };

  return { sendNotifications };
};
