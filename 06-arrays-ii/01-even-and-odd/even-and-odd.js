function evenAndOdd(numArray) {
    let oddArray = [];
    let evenArray = [];

    for (let i=0; i < numArray.length; i++) {
        let currentNum = numArray[i];
        if  (currentNum % 2 === 1) {
            oddArray.push(currentNum);
        } else {
            evenArray.push(currentNum);
        }
    } 

    return [evenArray, oddArray] ;

    // let allArrays = [];
    // allArrays.splice(0, 0, evenArray, oddArray); // yay


    // return allArrays;
}

