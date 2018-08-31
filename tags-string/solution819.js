//Most Common Word
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
    var map = new Map(),
        word = '',
        max = 0,
        arr = [],
        res = '';

    arr = paragraph
        .replace(/[!?',;.]+/g, '')
        .split(' ')
        .filter(ele => ele !== '')
        .map(ele => {
            word = ele.toLowerCase()
            if (!map.has(word)) {
                map.set(word, 1)
            } else {
                map.set(word, map.get(word) + 1)
            }
        })
    map.forEach((value, key) => {
        if (value > max && !isBanned(key, banned)) {
            res = key
            max = value
        }
    })
    return res
};

function isBanned(str, banned) {
    for (var i = 0; i < banned.length; i++) {
        if(str === banned[i]){
            return true
        }
    }
    return false
}

console.log(mostCommonWord("Bob hit? a ball, ,the hit! BALL' flew, far after it was hit.", ["hit"]))
