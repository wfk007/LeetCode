//Ransom Note
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    var index,
        map = new Map();

    for (var i = 0; i < magazine.length; i++) {
        if (!map.has(magazine[i])) {
            map.set(magazine[i], 1)
        } else {
            map.set(magazine[i], map.get(magazine[i]) + 1)
        }
    }

    for (var j = 0; j < ransomNote.length; j++) {
        if (map.get(ransomNote[j]) > 0) {
            map.set(ransomNote[j], map.get(ransomNote[j]) - 1)
        }else{
            return false
        }
    }
    return true
};
console.log(canConstruct("aa","aab"))
