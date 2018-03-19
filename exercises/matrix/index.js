// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n, startIndex = 0, array = [], count = 1) {
    if (!array[startIndex]) {
        for (let i = 0; i < n; i++) {
            array.push([])
        }
    }
    stopIndex = n - startIndex
    
    for (let i = startIndex; i < stopIndex; i++) {
        array[startIndex][i] = count
        count++
    }

    for (let i = startIndex + 1; i < stopIndex; i++) {
        array[i][stopIndex - 1] = count
        count++
    }

    for (let i = stopIndex - 1; i > startIndex; i--) {
        array[stopIndex - 1][i - 1] = count
        count++
    }

    for (let i = stopIndex - 1; i > startIndex + 1; i--) {
        array[i - 1][startIndex] = count
        count++
    }


    if (startIndex < (n / 2) - 1) {
        console.log('masuk if' )
        console.log('n',n);
        console.log('startIndex',startIndex);
        
        return matrix(n, startIndex + 1, array, count)
    } else {
        console.log('return');
        console.log('array', array);
        return array
    }
}

module.exports = matrix;
