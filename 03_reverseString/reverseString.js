const reverseString = function(str) {
    let revStr = []; //declare empty array
    for (const item of str) { //iterate through the string and use unshift to add each letter to the front of the revStr array
        revStr.unshift(item);
    }
    return revStr.join(''); //return the revStr array as a string with no comma separation
};

// Do not edit below this line
module.exports = reverseString;
