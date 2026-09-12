import type { LocationId } from '@/entities/location';
import { SCENARIOS } from '@/entities/scenario';

import { LOCATION_REVIEWS } from '../config/reviews';
import type { Review } from '../model/types';

interface Options {
  locationId: LocationId;
  completedScenarioIds: string[];
}

export const getReviewsByProgress = ({
  locationId,
  completedScenarioIds,
}: Options): Review[] => {
  const allReviewsForLocation = LOCATION_REVIEWS[locationId] || [];

  const completedInThisLocationCount = SCENARIOS.filter(
    (scenario) =>
      scenario.locationId === locationId &&
      completedScenarioIds.includes(scenario.id),
  ).length;

  const availableReviews = allReviewsForLocation.filter(
    (review) => review.requiredCompletedCount <= completedInThisLocationCount,
  );

  return availableReviews.slice(-5);
};
