//First Unique Character in a String
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    var map = new Map(),
        iterator,
        entity;

    for (var i = 0; i < s.length; i++) {
        if (!map.has(s[i])) {
            map.set(s[i], 1)
        } else {
            map.set(s[i], map.get(s[i]) + 1)
        }
    }
    iterator = map.entries()
    entity = iterator.next()
    while (!entity.done && entity.value[1] !== 1) {
        entity = iterator.next()
    }

    if (!entity.done) {
        return s.indexOf(entity.value[0])
    } else {
        return -1
    }
};
console.log(firstUniqChar("loveleetcode"))
