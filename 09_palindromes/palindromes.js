const palindromes = function (a) {
    const cleaned = a.replace(/[^a-z]/gi, "").toLowerCase();
    let revArray = [];
    for (const item of cleaned) {
        revArray.unshift(item);
    }
    return revArray.join('') === cleaned;
};

// Do not edit below this line
module.exports = palindromes;
