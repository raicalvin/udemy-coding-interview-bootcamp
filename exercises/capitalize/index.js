// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// function capitalize(str) {
//     const splitString = str.split(" ")
//     let answer = ""
    
//     for (let i = 0; i < splitString.length; i++) {
//         const word = splitString[i]
//         const firstLetter = word[0].toUpperCase()
//         const restOfWord = word.slice(1)
//         const combined = firstLetter + restOfWord
//         if (i == splitString.length - 1) {
//             answer += combined
//         } else {
//             answer += combined +  " "
//         }
//     }

//     return answer
// }

function capitalize(str) {
    let answer = ""
    for (let i = 0; i < str.length; i++) {
        let letter = str.charAt(i)
        if (i != 0) {
            if (str.charAt(i-1) == " ") {
                answer += letter.toUpperCase()
            } else {
                answer += letter
            }
        } else {
            answer += letter.toUpperCase()
        }
    }
    return answer
}

module.exports = capitalize;
