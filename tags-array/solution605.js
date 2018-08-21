//Can Place Flowers
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    for (var i = 0; i < flowerbed.length; i++) {
        if (n === 0) {
            break;
        }
        //处理两端
        if (i === 0) {
            if (flowerbed.length === 1 && flowerbed[i] === 0) {
                n--
            }
            if (flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
                flowerbed[i] = 1
                i++
                n--
            }
        }
        if (i === flowerbed.length - 1) {
            if (flowerbed[i] === 0 && flowerbed[i - 1] === 0) {
                flowerbed[i] = 1
                n--
            }
        }
        if (flowerbed[i - 1] === 0 && flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
            flowerbed[i] = i
            i++
            n--
        }
    }
    if (n > 0) {
        return false
    } else {
        return true
    }
};
console.log(canPlaceFlowers([0], 1))
