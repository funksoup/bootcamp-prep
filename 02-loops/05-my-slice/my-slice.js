// YOUR CODE BELOW
// function mySlice(originalString, startIdx, endIdx) {
//     let slicedString = '';

//     if (startIdx == undefined && endIdx == undefined) {
//         return originalString;
//     }

//     if (endIdx == undefined) {
//         endIdx = originalString.length;
//         console.log(endIdx);
//     }
// // debugger;
//     for (i=startIdx; i < endIdx; i++ ) {
//         // i=(startIdx || 0); i < (endIndx || originalString.length)
//         let char = originalString[i];
//         slicedString += char;
//     }
//     return slicedString;

// }


function mySlice(originalString, startIdx, endIdx) {
    let slicedString = '';

    for (i=(startIdx || 0); i < (endIdx || originalString.length); i++) {
        slicedString += originalString[i];
    }
    return slicedString;

}