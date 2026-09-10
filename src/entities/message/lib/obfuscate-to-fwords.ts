export const obfuscateToFwords = (sourceText: string): string => {
  const words = sourceText.split(' ');
  const curseSymbols = ['!@#$', '@#%!$', '!@#@#$', '%$&!#'];

  const withFWords = words.map((word) => {
    if (Math.random() > 0.5 && word.length > 2) {
      return curseSymbols[Math.floor(Math.random() * curseSymbols.length)];
    }

    return word;
  });

  return withFWords.join(' ');
};
