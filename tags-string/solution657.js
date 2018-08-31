//Judge Route Circle
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
    var position = [0, 0]
    for (var i = 0; i < moves.length; i++) {
        if (moves[i] === 'U') {
            position[1]++
        }
        if (moves[i] === 'D') {
            position[1]--
        }
        if (moves[i] === 'L') {
            position[0]--
        }
        if (moves[i] === 'R') {
            position[0]++
        }
    }
    if (position[0] === 0 && position[1] === 0) {
        return true
    }else{
        return false
    }
};
