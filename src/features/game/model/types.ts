export interface GameStats {
  total: number;
  banned: number;
  longBanned: number;
  wrongBanned: number;
  missed: number;
  missedLong: number;
}

export type TierLabel = 'c' | 'b' | 'a' | 's';

export type ReactionType =
  'wrongBanned' | 'missedLong' | 'missed' | 'longBanned' | 'banned';

export interface ReactionState {
  id: string;
  type: ReactionType;
}
