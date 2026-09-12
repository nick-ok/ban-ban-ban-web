export const obfuscateToBinary = (text: string): string => {
  const words = text.split(' ');

  const binaryWords = words.map((word) => {
    if (word.length === 0) {
      return word;
    }

    return Array.from({ length: word.length }, () =>
      Math.random() > 0.5 ? '1' : '0',
    ).join('');
  });

  return binaryWords.join(' ');
};
