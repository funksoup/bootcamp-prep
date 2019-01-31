// YOUR CODE BELOW
function zeroDarkThirty(someNum) {

    if (someNum===0) {
        return NaN;
    }

    someNum = String(someNum);
    let newValue = '';

    for (let i=0; i<someNum.length; i++) {
        let newChar = someNum[i];
        
        if (newChar !=='0') {
            newValue += newChar;
        }
    }
    return Number(newValue);
}

// "12301231230001231232300".replace(/0/g,'')
// replace is a method you can call - the value between the slashes gets replaced with the second value