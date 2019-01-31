// YOUR CODE BELOW
// function onlyOne(someValue1, someValue2, someValue3) {
//     if (!!someValue1 && !!someValue2) {
//         return false;
//     }
//     if (!!someValue2 && !!someValue3) {
//         return false;
//     }
//     if (!!someValue1 && !!someValue3) {
//         return false;
//     }
//     if (!!someValue1 && !!someValue2 && !!someValue3) {
//         return false;
//     }
//     if (!someValue1 && !someValue2 & !someValue3) {
//         return false;
//     }

//     return true;

// }


// function onlyOne(someValue1, someValue2, someValue3) {
//     if (!!someValue1 && !someValue2 && !someValue3) {
//         return true;
//     } else if (!someValue1 && !!someValue2 && !someValue3) {
//         return true;
//     } else if (!someValue1 && !someValue2 && !!someValue3) {
//         return true;
//     }
   
//     return false;

// }

// can also do it using filter & length
// [1,0,0].filter(e => !!e).length == 1

function onlyOne(someValue1, someValue2, someValue3) {
    return [someValue1,someValue2,someValue3].filter(e => !!e).length == 1;
}