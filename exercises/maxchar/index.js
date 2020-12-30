// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    // Create the map/dictionary
    // Create an array out of the string
    // count up the characters
    // find the max character
    let characters = {}

    for (let ch of str) {
        if (!characters[ch]) {
            characters[ch] = 1
        } else {
            characters[ch] += 1
        }
    }

    let maxCount = 0
    let maxCharacter = ""
    for (let key in characters) {
        if (characters[key] > maxCount) {
            maxCount = characters[key]
            maxCharacter = key
        }
    }

    return maxCharacter
}

module.exports = maxChar;
