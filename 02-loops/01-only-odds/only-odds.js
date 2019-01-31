// YOUR CODE BELOW
function onlyOdds(inputNum) {
    let sum = 0;
    for (i=0;i < inputNum; i++) {
         if (i%2 !== 0) {
            //sum = i + sum;
            sum += i;
         }
    }
    return sum;
}
