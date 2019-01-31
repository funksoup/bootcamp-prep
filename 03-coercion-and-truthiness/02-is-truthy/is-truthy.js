// YOUR CODE BELOW
function isTruthy(someValue) {

    if (someValue === null) {
        return 'The null value is falsey';
    }

    if (someValue === 0) {
        return 'The number 0 is falsey (the only falsey number)';
    }

    else if (someValue === undefined) {
        return 'undefined is falsey';
    } 

    else if (someValue === "") {
        return 'The empty string is falsey (the only falsey string)';
    }

    else if (someValue === false) {
        return 'The boolean value false is falsey';
    }
    
    // else if (someValue === true) {
    //     return 'true';
    // }
    // !!1 = true (!! indicates 'is this truthy?' !! of anything is already a boolean)

    else if (!!someValue) {
        // (!!someValue === true) 
        return 'true';
    }
}