// YOUR CODE BELOW

function arrayFlattener(someArray) {

    let flatArray = [];

    for (let i=0; i < someArray.length; i++) {

    //     if (!Array.isArray(someArray[i])) {
    //         flatArray.push(someArray[i]);
    //         // push mutates current array
    //     } else {

    //    // if (Array.isArray(someArray[i])) {
    //         debugger
          
    //         // concat array to flatArray - concat creates a new array 
    //         flatArray = flatArray.concat(someArray[i]);
          
    //     }

    if (Array.isArray(someArray[i])) {
        // concat array to flatArray - concat creates a new array 
        flatArray = flatArray.concat(someArray[i]);
        
    } else {
        // push mutates current array
        flatArray.push(someArray[i]);
        
   
    }

    }

    return flatArray;
}