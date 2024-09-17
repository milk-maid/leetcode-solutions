/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // remove bothsides spaces
    // string to array with space as the delimiter
    s = s.trim().split(" ");
    // Count & return the last word's length
    return s[s.length - 1].length
};

///// more time consumimg ::: LOOP 72ms
// var lengthOfLastWord = function(s) {
//     let length = 0;
//     let i = s.length - 1;

//     // Skip trailing spaces
//     while (i >= 0 && s[i] === ' ') {
//         i--;
//     }

//     // Count the last word's length
//     while (i >= 0 && s[i] !== ' ') {
//         length++;
//         i--;
//     }

//     return length;
// };


//////////// more more time :: RECURSION 76ms
// var lengthOfLastWord = function(s, i = s.length - 1, length = 0) {
//     // Base case: If we've gone through the entire string
//     if (i < 0) return length;

//     // Skip trailing spaces
//     if (s[i] === ' ' && length === 0) {
//         return lengthOfLastWord(s, i - 1, length);
//     }

//     // Stop when we hit the first space after a word
//     if (s[i] === ' ' && length > 0) {
//         return length;
//     }

//     // Keep counting characters in the last word
//     return lengthOfLastWord(s, i - 1, length + 1);
// };