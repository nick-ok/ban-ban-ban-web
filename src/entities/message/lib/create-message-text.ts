import type { ScenarioId } from '@/entities/scenario';
import { randomArrayItem } from '@/shared/lib';

import {
  AD_MESSAGES,
  ERROR_MESSAGES,
  SCENARIO_MESSAGES,
} from '../config/messages';
import type { ContentType, ScenarioMessageEmotion } from '../model/types';
import { obfuscateToBinary } from './obfuscate-to-binary';
import { obfuscateToFwords } from './obfuscate-to-fwords';

interface Params {
  scenarioId: ScenarioId;
  emotion: ScenarioMessageEmotion;
  contentType: ContentType;
  language: string;
}

export const createMessageText = ({
  scenarioId,
  emotion,
  contentType,
  language,
}: Params) => {
  const lng = language as 'ru' | 'en';
  let text = '';

  let messages = SCENARIO_MESSAGES[scenarioId][lng][emotion];

  if (!messages.length) {
    messages = SCENARIO_MESSAGES[scenarioId][lng]['normal'];
  }

  if (contentType === 'ad') {
    text = randomArrayItem(AD_MESSAGES[lng]) ?? '';
  } else {
    text = randomArrayItem(messages) ?? '';
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
