let letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
let leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#','l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'",'><', 'j', '2'];

// YOUR CODE BELOW

function leetTranslator(origString) {
    let leetTranslated = {};

    for (let i = 0; i < letters.length; i++) {

        let singleLetter = letters[i];

        let singleLeetChar = leetChars[i];

        leetTranslated[singleLetter] = singleLeetChar;

    }

    let leetString = '';

    for (let i = 0; i < origString.length; i++) {

        let origStringLetter = origString[i].toLowerCase();
        
        let origStringLeetChar = leetTranslated[origStringLetter];
    
        leetString += origStringLeetChar;

    }

    return leetString;

    
}
