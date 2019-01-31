// YOUR CODE BELOW
function bacteriaTime (currentNum, targetNum) {
    let totalMins = 0;
    if (currentNum > targetNum) {
        return "targetNum must be larger than currentNum";
    }
    debugger;
    
    while (currentNum < targetNum) {
        currentNum *=2;
        //currentNum = currentNum*2
        totalMins +=20;
        console.log(currentNum, targetNum, totalMins);
        // if (totalMins===200) {
        //     break;
        // }
    }
    
    return totalMins;
    //or return Math.min(totalMins, 200);
}