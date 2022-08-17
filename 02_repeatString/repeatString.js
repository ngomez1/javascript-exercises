const repeatString = function(str, num) {
    if (num < 0) {
        return 'ERROR'
    }
    const repeatedString = new Array(num).fill(str); //create array of length num filled with str
    return repeatedString.join(''); //return array with no comma separation
};

// Do not edit below this line
module.exports = repeatString;
