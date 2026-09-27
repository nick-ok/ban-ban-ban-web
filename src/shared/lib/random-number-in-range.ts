interface Props {
  min: number;
  max: number;
  fractionDigits?: number;
}

export const randomNumberInRange = ({
  min,
  max,
  fractionDigits = 0,
}: Props): number => {
  const randomValue = Math.random() * (max - min) + min;

  if (fractionDigits > 0) {
    return +randomValue.toFixed(fractionDigits);
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};
