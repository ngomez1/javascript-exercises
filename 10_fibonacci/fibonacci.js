const fibonacci = function(a) {
    if(a<1){
        return "OOPS"
    }

    let sequence = [1,1];
    let count = a > 2 ? 2 : a;
    while (count < a) {
        sequence.push(sequence[count-1] + sequence[count-2]);
        count++;
    }
    return sequence[a-1];
};

// Do not edit below this line
module.exports = fibonacci;
