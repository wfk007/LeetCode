//To Lower Case
/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function (str) {
    var arr = str.split('')

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= 'A' && arr[i] <= 'Z') {
            arr[i] = String.fromCharCode(arr[i].charCodeAt(0) + 32)
        }
    }
    return arr.join('')
};
console.log(toLowerCase('dWFO22qa'))
