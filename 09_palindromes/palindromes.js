const palindromes = function (message) {

    message = message.toLowerCase()

    let messageArray = message.split("")
    messageArray = messageArray.filter(letter => letter.match(/[a-z]/i))

    let isPalindrome = true;

    let i = 0;
    let j = messageArray.length - 1;
    let mid = messageArray.length / 2;

    for(i; i < mid; i++){
        if(messageArray[i] != messageArray[j]) return false;
        j--;
    }

    return isPalindrome
};

// Do not edit below this line
module.exports = palindromes;
