// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {

    let isNegative = n < 0

    let str = n.toString().split('')

    let reversedString = ""

    for (let ch of str) {
        if (ch != "-") {
            reversedString = ch + reversedString
        }
    }

    let reversedNumber = parseInt(reversedString)

    if (isNegative) {
        reversedNumber = -1 * reversedNumber
    }

    return reversedNumber

}

module.exports = reverseInt;
