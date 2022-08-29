const findTheOldest = function(objs) {
    objs.map(function(obj) {
        if(!obj["yearOfDeath"]) {
            obj["yearOfDeath"] = (new Date()).getFullYear();
        }
    });
    return objs.sort((a,b) => a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth ? -1 : 1)[0];
};

// Do not edit below this line
module.exports = findTheOldest;
