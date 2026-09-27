export const dateFormat = (timestamp: number, lng: string) => {
  const formatter = new Intl.DateTimeFormat(lng, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  return formatter.format(timestamp);
};
