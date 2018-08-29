//Number of Segments in a String
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
    return s.split(" ").filter(ele => {
        return ele !== ''
    }).length
};
console.log(countSegments("Hello   , my name is John"))
