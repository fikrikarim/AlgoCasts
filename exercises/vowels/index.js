// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let count = 0;
    let vowelsChars = ['a', 'i', 'u', 'e', 'o']

    for (const char of str) {
        if (vowelsChars.includes(char.toLowerCase())) {
            count++
        }
    }

    return count
}

function vowels(str) {
    array = str.match(/[aiueo]/gi) || []
    return array.length
}

module.exports = vowels;
