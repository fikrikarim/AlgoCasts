// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Original solution yay!
function reverse(str) {
    var array = str.split('');
    var reversed = '';
    for (var i = array.length - 1; i >= 0; i--) {
        reversed = reversed + array[i];
    }
    return reversed;
}

// Better use this loop, because not too many point for error
// function reverse(str) {
//     var reversed = '';
//     for (let char of str) {
//         reversed = char + reversed;
//     }
//     return reversed;
// }

// Trivial solution
// function reverse(str) {
//     return str.split('').reverse().join('');
// }
 
// Dunno why error
// function reverse(str) {
//     return str.split().reduce((rev, char) => char + rev, '')
// }

module.exports = reverse;
