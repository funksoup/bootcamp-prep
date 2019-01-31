// YOUR CODE BELOW
function crazyCaps(inputString) {
    var outputString = "";
    for (i = 0; i < inputString.length; i++) {
        if (i %2 !== 0) {
            outputString += inputString[i].toUpperCase();
        } else {
            outputString += inputString[i].toLowerCase();
            console.log(outputString);
        }
    }
    return outputString;
}