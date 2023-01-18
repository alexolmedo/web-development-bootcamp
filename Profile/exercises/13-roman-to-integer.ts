function romanToInt(s: string): number {
  let romanNumerals = new Map<string, number>([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    let letter = s[i];
    let nextLetter = s[i + 1];

    let value = romanNumerals.get(letter);
    if (letter === "I" && (nextLetter === "V" || nextLetter === "X")) {
      value = romanNumerals.get(nextLetter) - value;
      i++;
    }
    if (letter === "X" && (nextLetter === "L" || nextLetter === "C")) {
      value = romanNumerals.get(nextLetter) - value;
      i++;
    }
    if (letter === "C" && (nextLetter === "D" || nextLetter === "M")) {
      value = romanNumerals.get(nextLetter) - value;
      i++;
    }

    total += value;
  }

  return total;
}

