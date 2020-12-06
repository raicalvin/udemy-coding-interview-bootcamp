// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/**
 * My Solution 1
 * Create the array, push items into the array in order, and then join
 */
// function reverse(str) {
//     const ans = []
//     for (let c of str) {
//         ans.unshift(c)
//     }
//     return ans.join("")
// }

/**
 * My Solution 2
 * Get the length of the string, use that and a while loop to create a new string or array
 */
//  function reverse(str) {
//      var ans = []
//      var len = str.length
//      var strArr = str.split('')

//      while (len > 0) {
//         var letter = strArr.pop()
//         ans.push(letter)
//         len -= 1
//      }

//      return ans.join('')
//  }

/**
 * My Solution 3
 * "Selena" -> "aneleS"
 */
// function reverse(str) {
//     let ans = "";
//     for (let letter of str) {
//         ans = letter + ans;
//     }
//     return ans
// }

// Solution 1
// function reverse(str) {
//     const arr = str.split('');
//     arr.reverse();
//     return arr.join('')
// }

// Solution 2
function reverse(str) {
    return str.split('').reduce((reversed, letter) => {
        return letter + reversed
    }, '');
}

module.exports = reverse;
