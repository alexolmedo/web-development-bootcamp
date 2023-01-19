function isPalindrome(s) {
    var nonAlphaNumeric = s.replace(/[^0-9a-zA-Z]/gi, '');
    var lowercaseString = nonAlphaNumeric.toLowerCase();
    console.log(lowercaseString);
    return true;
}
;
isPalindrome("A man, a plan, a canal: Panama");
