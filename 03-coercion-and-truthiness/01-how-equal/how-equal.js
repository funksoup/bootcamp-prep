// YOUR CODE BELOW
// function howEqual(someValue1, someValue2) {
    
//     if (someValue1 === someValue2) {
//         return 'strictly';
//     }
    
//     else if (someValue1 == someValue2) {
//         return 'loosely';
//     }

//     else {
//         return 'not equal';
//     }
// }

function howEqual(someValue1, someValue2) {
    
    if (someValue1 === someValue2) {
        return 'strictly';
    } else if (someValue1 == someValue2) {
        return 'loosely';
    }

    return 'not equal';
    
}