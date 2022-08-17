const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0) {
        return 'ERROR'
    }
    if (typeof num1 != 'number' || typeof num2 != 'number') {
        return 'ERROR'
    }
    let sum = 0;
    let x,y;
    if (num1 > num2) {
        x = num2;
        y = num1;
    }
    else {
        x = num1;
        y = num2;
    }
    for (let i = x; i <= y; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
