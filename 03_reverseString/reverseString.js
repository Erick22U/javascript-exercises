const reverseString = function(message) {
    const size = message.length;
    let reverse = "";
    for(let i = size; i >= 0; i--){
        reverse += message.charAt(i)
    }

    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
