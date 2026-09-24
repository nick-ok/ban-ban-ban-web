import { getLocationStats, type LocationId } from '@/entities/location';
import type { PlayerProgress } from '@/entities/player-progress';

import { LOCATION_REVIEWS } from '../config/reviews';
import type { Review } from '../model/types';

interface Options {
  locationId: LocationId;
  progress: PlayerProgress;
}

export const getReviewsByProgress = ({
  locationId,
  progress,
}: Options): Review[] => {
  const allReviewsForLocation = LOCATION_REVIEWS[locationId] || [];
  const { total, completed, location } = getLocationStats(locationId, progress);

  const completion = Math.round((completed / total) * 100);

  const isPerfectClear =
    completed === total &&
    location?.scenarioIds.every(
      (id) => (progress.scenarioResults[id]?.bestAccuracy ?? 0) === 100,
    );

  const availableReviews = allReviewsForLocation.filter((review) => {
    if (review.isPerfectOnly) {
      return isPerfectClear;
    }

    return review.requiredProgress <= completion;
  });

  return availableReviews.slice(-5);
};
