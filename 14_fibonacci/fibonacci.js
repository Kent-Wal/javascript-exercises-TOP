const fibonacci = function (seriesIndex) {
    seriesIndex = parseInt(seriesIndex);

    let previous = 1;
    let current = 1;
    let next;

    if (seriesIndex === 0) return 0;
    if (seriesIndex < 0) return 'OOPS';

    for (let i = 0; i < seriesIndex - 2; i++){
        next = previous + current;
        previous = current;
        current = next;
    }

    return current;
};

// Do not edit below this line
module.exports = fibonacci;
