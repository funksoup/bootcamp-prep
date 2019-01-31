// YOUR CODE BELOW
// function myOr(someValue1, someValue2, someValue3) {
//     debugger;
//     if (!!someValue1) {
//         return someValue1;
//     } else if (!!someValue2) {
//         return someValue2;
//     } else if (someValue1==false && someValue2==false) {
//         return someValue3;
//     }
// }

function myOr(someValue1, someValue2, someValue3) {
 
    if (!!someValue1) {
        return someValue1;
    } else if (!!someValue2) {
        return someValue2;
    } else {
        return someValue3;
    }
}

function myAnd(someValue1, someValue2, someValue3) {
    if (!someValue1) {
        return someValue1;
    } else if (!someValue2) {
        return someValue2;
    } else {
        return someValue3;
    }
}