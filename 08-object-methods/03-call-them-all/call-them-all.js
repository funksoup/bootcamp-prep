// YOUR CODE BELOW

function callThemAll(someObject, someValue) {
    let methodResults = [];

    for (let key in someObject) {
        let currentValue = someObject[key];

        if (typeof currentValue === 'function') {
           let result = currentValue(someValue);

            methodResults.push(result);
        }
    }

    return methodResults;

    // someObject.keys().filter(k => typeof someObject[k] === ‘function’).map(k => someObject[k](someValue))
    // is like saying
    // function(k) { return typeof someObject[k] === ‘function’ }

}