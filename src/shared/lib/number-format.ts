export const numberFormat = (value: number, lng: string) => {
  return new Intl.NumberFormat(lng, {
    notation: 'compact',
    maximumFractionDigits: 1,
  })
    .format(value)
    .toLowerCase();
};
