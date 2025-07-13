const removeFromArray = (arr, a, b = '', c = '', d = '') => {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === a || arr[i] === b || arr[i] === c || arr[i] === d) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}

// Do not edit below this line
module.exports = removeFromArray;
