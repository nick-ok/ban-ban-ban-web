export interface Review {
  id: string;
  username: string;
  text: {
    ru: string;
    en: string;
  };
  rating: 1 | 2 | 3 | 4 | 5;
  requiredProgress: number;
  isPerfectOnly?: boolean;
}
