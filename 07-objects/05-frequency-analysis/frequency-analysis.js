// YOUR CODE BELOW

function frequencyAnalysis(string) {
    let charFrequency = {};

    for (let i = 0; i < string.length; i++) {
        let char = string[i];

        if (!charFrequency[char]) {
        // If (!(char in charFrequency)) { ...

            charFrequency[char] = 0;
        }
        charFrequency[char]++;
    }
    return charFrequency;
}