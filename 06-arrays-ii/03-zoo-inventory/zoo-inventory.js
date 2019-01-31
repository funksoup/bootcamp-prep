// YOUR CODE BELOW

function zooInventory(animalArray) {
    let animalFacts = [];

    for (let i = 0; i < animalArray.length ; i++) {
        let currentAnimal = animalArray[i];
        
        let animalName = currentAnimal[0];
        let animalType = currentAnimal[1][0];
        let animalAge =  currentAnimal[1][1];

        let animalPhrase =  animalName + ' the ' + animalType + ' is ' + animalAge + '.';
        // `${animalName} the ${animalType} is ${animalAge}.` (use back tick `) - template string
        debugger
        animalFacts.push(animalPhrase);

        // currentAnimal[1] = currentAnimal[1].join(' is ');
      
        // currentAnimal.join(' the ') + '.';

    }
    return animalFacts;
}