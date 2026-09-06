/**
 * Преобразует строку времени формата "ЧЧ:ММ" в количество минут с начала суток.
 * Пример: "10:15" -> 615
 */
export const timeToMinutes = (timeString: string): number => {
  const [hours, minutes] = timeString.split(':').map(Number);

  if (isNaN(hours) || isNaN(minutes) || hours > 23 || minutes > 59) {
    console.error(`Некорректный формат времени: ${timeString}`);

    return 0;
  }

  return hours * 60 + minutes;
};
