const repeatString = (word, num) => {
    if (num < 0) return "ERROR";
    
    let repeat = "";
    for (let i = 0; i < num; i++){
        repeat += word;
    }
    return repeat;
};

// Do not edit below this line
module.exports = repeatString;
