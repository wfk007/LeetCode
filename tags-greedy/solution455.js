//Assign Cookies
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    var map = new Map(),
        res = 0;
    for (var i = 0; i < s.length; i++) {
        if (!map.has(s[i])) {
            map.set(s[i], 1)
        } else {
            map.set(s[i], map.get(s[i]) + 1)
        }
    }

    for (var j = 0; j < g.length; j++) {
        //如果正好有则满足
        if (map.has(g[j]) && map.get(g[j]) > 0) {
            res++
            if (map.get(g[j]) - 1 === 0) {
                map.delete(g[j])
            } else {
                map.set(g[j], map.get(g[j]) - 1)
            }
        } else {
            //没有时，找一个刚好能 cover 的满足
        }
    }
};
