const palindromes = function (word) {
    word = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    const wordCopy = Array.from(word);
    let wordReverse = "";

    //reverse wordCopy
    for (let i = 0; i < word.length; i++){
        wordReverse += wordCopy[word.length - 1 - i];
    }

    return wordReverse === word
};

// Do not edit below this line
module.exports = palindromes;
