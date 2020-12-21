// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Solution 1: Reverse a string and then compare
// function palindrome(str) {
//     let reversed = ""
//     for (let letter of str) {
//         reversed = letter + reversed
//     }
//     return str == reversed
// }

// Solution 2
// function palindrome(str) {
//     let arr = str.split("")
//     let len = arr.length

//     let middleIndex = len / 2

//     let isPalindrome = true

//     for (let i = 0; i <= middleIndex; i++) {
//         let leftChar = arr[i]
//         let rightChar = arr[len - 1 - i]
//         if (leftChar != rightChar) {
//             isPalindrome = false
//             break
//         }
//     }
//     return isPalindrome
// }

function palindrome(str) {
    
}

module.exports = palindrome;
