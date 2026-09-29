export const formatDateTime = (date: Date, lng: string) => {
  const formatter = new Intl.DateTimeFormat(lng, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  return formatter.format(date);
};

export const formatDate = (date: Date, lng: string) =>
  new Intl.DateTimeFormat(lng, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  }).format(date);

export const formatTime = (date: Date, lng: string) =>
  new Intl.DateTimeFormat(lng, {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(date);
