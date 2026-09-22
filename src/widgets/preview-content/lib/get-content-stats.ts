import {
  getLocationStats,
  LOCATIONS,
  type LocationId,
} from '@/entities/location';
import type { PlayerProgress } from '@/entities/player-progress';

const getLocationTier = (locationId: LocationId): number => {
  const index = LOCATIONS.findIndex((l) => l.id === locationId);

  return index !== -1 ? index : 0;
};

export const getContentStats = (
  locationId: LocationId,
  progress: PlayerProgress,
) => {
  const { location, total, completed, averageAccuracy } = getLocationStats(
    locationId,
    progress,
  );
  const tier = getLocationTier(locationId);

  const baseScale = Math.pow(22, tier + 2);
  const seed = locationId
    .split('')
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const minBase = baseScale;
  const maxBase = baseScale * 9;

  const startDownloads = minBase + (seed % (maxBase - minBase));
  const startReviews = Math.round(startDownloads * 0.15);

  const downloadsPerScenario = baseScale * 0.5;
  const reviewsPerScenario = downloadsPerScenario * 0.1;

  let downloads = Math.round(startDownloads + completed * downloadsPerScenario);
  let reviews = Math.round(startReviews + completed * reviewsPerScenario);

  let rating = 1;

  if (completed > 0 && total > 0 && location) {
    const isPerfectClear =
      completed === total &&
      location.scenarioIds.every(
        (id) => (progress.scenarioResults[id]?.bestAccuracy ?? 0) === 100,
      );

    if (isPerfectClear) {
      rating = 5;
    } else {
      const completionRatio = completed / total;
      const progressComponent = 3.0 * completionRatio;

      const accuracyBonus = Math.max(0, (averageAccuracy - 75) / 25);
      const rawRating = 1 + progressComponent + accuracyBonus;

      const roundedRating = Math.round(rawRating * 10) / 10;

      rating = Math.min(4.9, roundedRating);
    }
  }

  return {
    rating,
    downloads,
    reviews,
  };
};
