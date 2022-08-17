const removeFromArray = function() {
    let args = Array.from(arguments); //allows a variable number of arguments to be passed
    let targetArray = args[0]; //tests all assume that first argument will be the array
    for (let i = 1; i < args.length; i++) { //identify the index within the array that each argument to be removed is located at, and then splice it out while making sure to not splice if the argument is not in the array at all
        let remove = targetArray.indexOf(args[i]);
        if (remove > -1) {
            targetArray.splice(remove,1);
        }
    }
    return targetArray;
};

// Do not edit below this line
module.exports = removeFromArray;
