// YOUR CODE BELOW

function myLastIndexOf (array, searchValue, startIdx) {

    if (startIdx === undefined) {
        startIdx = array.length - 1;
    }

//     x=[0,1,2]
// (3) [0, 1, 2]
// x[3]
// undefined
// x[2]
// 2

  debugger

    for (let i=startIdx; i >= 0; i--) {
        console.log(i);
        if (array[i] === searchValue) {
            return i;
        }
    }

    return -1;

}