// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let total = {};
    let highest = '';
    total[highest] = 0;

    // Use
    // for (const iterator of object) {
        
    // }
    str.split("").forEach((char) => {
        // console.log(char);
        
        // total[char] = total[char] || 1;

        // if (!total[char]) {
        if (total[char] === undefined) {
            total[char] = 1
        } else {
            // total[char]++
            total[char] += 1
        }
        // console.log(total[char], char);
        // console.log('foreach');
        // console.log('highest', highest);
        // console.log('total[highest]', total[highest]);
        
        // Make the checking variable different. Don't use the same total!
        // For example, use max and maxChar variable
        if (total[char] > total[highest]) {
            highest = char
        }
    })

    return highest
}

module.exports = maxChar;
