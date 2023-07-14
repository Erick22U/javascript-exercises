const fibonacci = function(count) {

    if(count < 0) return "OOPS"

    if(count == 0) return 0;

    if(count == 2 || count == 3) return 1;

    let curCount = 2;

    let cur = 1;
    let prev = 1;
    let sum = 0;

    for(curCount; curCount < count; curCount++) {
        sum = cur + prev;
        prev = cur;
        cur = sum;
    }
    return cur;
};

// Do not edit below this line
module.exports = fibonacci;
