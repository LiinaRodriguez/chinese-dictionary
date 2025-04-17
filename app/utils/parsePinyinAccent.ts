const vowelMap: { [key: string]: string[] } = {
  a: ["ā", "á", "ǎ", "à"],
  e: ["ē", "é", "ě", "è"],
  i: ["ī", "í", "ǐ", "ì"],
  o: ["ō", "ó", "ǒ", "ò"],
  u: ["ū", "ú", "ǔ", "ù"],
  ü: ["ǖ", "ǘ", "ǚ", "ǜ"],
};

const tonePriority = ["a", "e", "o", "i", "u", "ü"];

const convertSyllable = (syllable: string): string => {
  const match = syllable.match(/^([a-zü]+)([1-5])$/i);
  if (!match) return syllable;

  const [_, base, toneStr] = match;
  const tone = parseInt(toneStr, 10);

  if (tone === 5) return base;

  for (const vowel of tonePriority) {
    const index = base.indexOf(vowel);
    if (index !== -1) {
      const accented = vowelMap[vowel][tone - 1];
      return base.slice(0, index) + accented + base.slice(index + 1);
    }
  }

  return syllable;
};

const parsePinyinAccent = (input: string): string => {
  return input
    .split(/\s+/)
    .map(convertSyllable)
    .join(" ");
};

export default parsePinyinAccent;
