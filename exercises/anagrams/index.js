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
    let charsA = {};
    let charsB = {};

    for (const char of stringA.toLowerCase().replace(/[^\w]/g).split('')) {
        if (!charsA[char]) {
            charsA[char] = 1;
        } else {
            charsA[char]++
        }
    }

    for (const char of stringB.toLowerCase().replace(/[^\w]/g).split('')) {
        if (!charsB[char]) {
            charsB[char] = 1;
        } else {
            charsB[char]++
        }
    }

    console.log(charsA, charsB);
    

    for (const char in charsA) {
        if (charsA[char] !== charsB[char]) {
            return false
        }
    }

    return true
}

function mapStringToObject(string) {
    const charMap = {};

    for (const char of string.toLowerCase().replace(/[^\w]/g).split('')) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    return charMap
}

function anagrams(stringA, stringB) {
    let charsA = mapStringToObject(stringA)
    let charsB = mapStringToObject(stringB)

    if (Object.keys(charsA).length !== Object.keys(charsB).length) {
        return false
    }

    for (const char in charsA) {
        if (charsA[char] !== charsB[char]) {
            return false
        }
    }

    return true
}

function cleanString(string) {
    return string.toLowerCase().replace(/[^\w]/g).split('').sort().join('')
}

function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB)
}

module.exports = anagrams;
