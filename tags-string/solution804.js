//Unique Morse Code Words
/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
    var table = {
        "a": ".-",
        "b": "-...",
        "c": "-.-.",
        "d": "-..",
        "e": ".",
        "f": "..-.",
        "g": "--.",
        "h": "....",
        "i": "..",
        "j": ".---",
        "k": "-.-",
        "l": ".-..",
        "m": "--",
        "n": "-.",
        "o": "---",
        "p": ".--.",
        "q": "--.-",
        "r": ".-.",
        "s": "...",
        "t": "-",
        "u": "..-",
        "v": "...-",
        "w": ".--",
        "x": "-..-",
        "y": "-.--",
        "z": "--..",
    }
    if (words.length === 0) {
        return 0
    }
    var sum = 1,
        baseIndex = 0,
        set = new Set();
    //将 words 转换
    for (var i = 0; i < words.length; i++) {
        //words[i]
        words[i] = words[i].split('').map(item => table[item]).join('')
        set.add(words[i])
    }
    return set.size
};
console.log(uniqueMorseRepresentations(["zocd", "gjkl", "hzqk", "hzgq", "gjkl"]))
