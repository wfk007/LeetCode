//Detect Capital
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
    var uppercaseNums = 0, //大写字母个数
        uppercaseIndex = -1; //大写字母下标

    for (var i = 0; i <= word.length; i++) {
        if (word[i] >= 'A' && word[i] <= 'Z') {
            uppercaseIndex = i
            uppercaseNums++
        }
    }

    if ((uppercaseNums === word.length) ||
        (uppercaseNums === 0) ||
        (uppercaseNums === 1 && word.length > 1 && uppercaseIndex === 0)) {
        return true
    } else {
        return false
    }
};
console.log(detectCapitalUse("G"))
