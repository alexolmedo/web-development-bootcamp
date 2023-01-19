function isPalindrome(s: string): boolean {
  let nonAlphaNumeric = s.replace(/[^0-9a-zA-Z]/gi, "");
  let lowercaseString = nonAlphaNumeric.toLowerCase();
  let length = lowercaseString.length;

  for (let i = 0; i < length; i++) {
    if (lowercaseString[i] != lowercaseString[length - i - 1]) {
      return false;
    }
  }

  return true;
}

isPalindrome("A man, a plan, a canal: Panama");
