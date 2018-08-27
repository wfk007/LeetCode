//Maximize Distance to Closest Person
/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function (seats) {
    var maxDistance = 0,
        distanceLeft = 0,
        distanceRight = 0,
        m, n;
    for (var i = 0; i < seats.length; i++) {
        if (seats[i] === 0) {
            //向左右两边寻找（如果下标存在），找出第一个1
            m = i - 1
            n = i + 1;
            //找左边
            while (m >= 0 && seats[m] !== 1) {
                m--
            }
            if (m >= 0) {
                distanceLeft = i - m
            } else {
                distanceLeft = Number.MAX_VALUE
            }
            //找右边
            while (n < seats.length && seats[n] !== 1) {
                n++
            }
            if (n < seats.length) {
                distanceRight = n - i
            } else {
                distanceRight = Number.MAX_VALUE
            }
            maxDistance = Math.max(maxDistance, Math.min(distanceLeft, distanceRight))
        }
    }
    return maxDistance
};
maxDistToClosest([1,0,0,0,0,1])
