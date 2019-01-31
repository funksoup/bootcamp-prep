// YOUR CODE BELOW
function oddCouple(numArray) {
    let oddNums = [];

    for (let i = 0; i < numArray.length; i++) {
        console.log(numArray, i, oddNums);
        if (numArray[i] % 2 === 1 && oddNums.length<2) { 
            // add number only if there's one existing number, so two total
            oddNums.push(numArray[i]);
         
        }

    }
    return oddNums;
}


// [1,2,3,4,5,6,7].filter(x => x%2!=0).slice(0,2)
// => 'arrow notation'
// [1,2,3].filter(function(x) { return x%2 != 0}.slice(0,2)
// [1,2,3].filter(function(x) { return x%2 != 0}).slice(0,2)