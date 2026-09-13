export interface GameStats {
  total: number;
  banned: number;
  longBanned: number;
  wrongBanned: number;
  missed: number;
  missedLong: number;
}

export type TierLabel = 'c' | 'b' | 'a' | 's';
