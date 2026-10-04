import type { LocationId } from '@/entities/location';
import { LOCATION_MESSAGES } from '@/entities/location/config/locationMessages';
import { randomArrayItem } from '@/shared/lib';

import { AD_MESSAGES } from '../config/ad-messages';
import { ERROR_MESSAGES } from '../config/error-messages';
import type { ContentType } from '../model/types';
import { obfuscateToBinary } from './obfuscate-to-binary';
import { obfuscateToFwords } from './obfuscate-to-fwords';

interface Params {
  locationId: LocationId;
  contentType: ContentType;
  language: string;
}

export const createMessageText = ({
  locationId,
  contentType,
  language,
}: Params) => {
  const lng = language as 'ru' | 'en';
  let text = '';

  if (contentType === 'ad') {
    text = randomArrayItem(AD_MESSAGES[lng]) ?? '';
  } else {
    text = randomArrayItem(LOCATION_MESSAGES[locationId][lng]) ?? '';
  }

  if (contentType === 'caps') {
    text = text.toUpperCase();
  } else if (contentType === 'fwords') {
    text = obfuscateToFwords(text);
  } else if (contentType === 'binary') {
    text = obfuscateToBinary(text);
  } else if (contentType === 'error') {
    text = randomArrayItem(ERROR_MESSAGES) ?? 'ERROR';
  }

  return text;
};
