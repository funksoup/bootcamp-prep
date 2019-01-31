// YOUR CODE BELOW
function exponentiate(baseNum, powerNum) {
    let totalNum = baseNum;

    if (powerNum === 0) {
        return 1;
    }

    for (i=1; i<powerNum; i++) {
        totalNum=baseNum*totalNum;
        debugger;
    }
    return totalNum;
}