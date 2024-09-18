/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // Negative numbers are not palindromes
    if (x < 0) return false;

    let original = x;
    let reversed = 0;

    // Reverse the number
    while (x > 0) {
        reversed = reversed * 10 + (x % 10);
        x = Math.floor(x / 10);
    }

    // Check if reversed number is equal to original
    return original === reversed;
};
