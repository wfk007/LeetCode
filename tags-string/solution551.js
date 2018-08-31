//Student Attendance Record I
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
    //不能包含超过一次缺席，或者超过两次连续的迟到
    var absent = 0,
        base = -1,
        continueLateTime = 0; //连续迟到的次数

    for (var i = 0; i < s.length; i++) {
        if (s[i] === 'A') {
            absent++
        } else if (s[i] === 'L') {
            if (base !== -1 && i - base === 1) {
                continueLateTime++
                base = i
            }else{
                continueLateTime = 1
                base = i
            }
        }
        if (absent > 1 || continueLateTime > 2) {
            return false
        }
    }
    return true
};
console.log(checkRecord("PPALLL"))
