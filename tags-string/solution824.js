//Goat Latin
/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function (S) {
    var vowel = 'aeiouAEIOU',
        arr = S.split(' '),
        current = [];
    for (var i = 0; i < arr.length; i++) {
        if (vowel.includes(arr[i][0])) {
            arr[i] += 'ma'
        } else {
            current = arr[i].split('')
            current.push(current.shift())
            arr[i] = current.join('') + 'ma'
        }
        arr[i] += 'a'.repeat(i + 1)
    }
    return arr.join(' ')
};
console.log(toGoatLatin("The quick brown fox jumped over the lazy dog"))
