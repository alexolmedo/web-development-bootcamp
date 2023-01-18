function romanToInt(s) {
    var romanNumerals = new Map([
        ["I", 1],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100],
        ["D", 500],
        ["M", 1000],
    ]);
    var total = 0;
    for (var i = 0; i < s.length; i++) {
        var letter = s[i];
        var nextLetter = s[i + 1];
        var value = romanNumerals.get(letter);
        console.log(value);
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
        console.log("value: " + value);
        total += value;
    }
    return total;
}
console.log(romanToInt('MCMXCIV'));
