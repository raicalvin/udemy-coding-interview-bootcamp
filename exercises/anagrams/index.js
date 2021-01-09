// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
     const wordA = stringA.replace(/[^\w]/g, "").toLowerCase()
     const wordB = stringB.replace(/[^\w]/g, "").toLowerCase()

    let mapA = {}
    let mapB = {}

     for (let c of wordA) {
        mapA[c] = mapA[c] + 1 || 1
     }

     for (let c of wordB) {
        mapB[c] = mapB[c] + 1 || 1
     }

     console.log("Comparing the two maps...")
     console.log(mapA.size)
     if (Object.keys(mapA).length != Object.keys(mapB).length) {
         return false
     } else {
         // iterate through each key and check to see if not same, return false
         for (const [key, value] of Object.entries(mapA)) {
            if (mapB[key] != value) {
                return false
            }
         }
     }

     return true
}

module.exports = anagrams;
