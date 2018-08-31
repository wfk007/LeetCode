//Longest Palindromic Substring
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    /**
     * brute force：找出所有回文串，输出长度最大值
     * dp：(子问题)
     *      递推关系：P(i,j) = P(i+1,j-1) && s[i]===s[j]
     *      basecase：
     *              P(i,i) = true
     *              P(i,i+1) = s[i] === s[i+1]
     */
    var left = 0,
        right = 0,
        maxLength = 0,
        dp = [],
        i, j;

    //初始化二维数组
    for (i = 0; i < s.length; i++) {
        dp[i] = []
        for (j = i; j < s.length; j++) {
            if (s[i] === s[j] && j - i < 3) {
                dp[i].push(true)
            }else{
                dp[i].push(false)
            }
        }
    }
    for (i = 0; i < s.length; i++) {
        for (j = i; j < s.length; j++) {
            dp[i][j] = s[i] === s[j] && (j - i < 3 || dp[i + 1][j - 1])
            if (dp[i][j] && (j - i + 1 > maxLength)) {
                maxLength = j - i + 1
                left = i;
                right = j;
            }
        }
    }
    return s.slice(left, right + 1)
};
// console.log(longestPalindrome("aaaa"))
console.log(longestPalindrome("cyyoacmjwjubfkzrrbvquqkwhsxvmytmjvbborrtoiyotobzjmohpadfrvmxuagbdczsjuekjrmcwyaovpiogspbslcppxojgbfxhtsxmecgqjfuvahzpgprscjwwutwoiksegfreortttdotgxbfkisyakejihfjnrdngkwjxeituomuhmeiesctywhryqtjimwjadhhymydlsmcpycfdzrjhstxddvoqprrjufvihjcsoseltpyuaywgiocfodtylluuikkqkbrdxgjhrqiselmwnpdzdmpsvbfimnoulayqgdiavdgeiilayrafxlgxxtoqskmtixhbyjikfmsmxwribfzeffccczwdwukubopsoxliagenzwkbiveiajfirzvngverrbcwqmryvckvhpiioccmaqoxgmbwenyeyhzhliusupmrgmrcvwmdnniipvztmtklihobbekkgeopgwipihadswbqhzyxqsdgekazdtnamwzbitwfwezhhqznipalmomanbyezapgpxtjhudlcsfqondoiojkqadacnhcgwkhaxmttfebqelkjfigglxjfqegxpcawhpihrxydprdgavxjygfhgpcylpvsfcizkfbqzdnmxdgsjcekvrhesykldgptbeasktkasyuevtxrcrxmiylrlclocldmiwhuizhuaiophykxskufgjbmcmzpogpmyerzovzhqusxzrjcwgsdpcienkizutedcwrmowwolekockvyukyvmeidhjvbkoortjbemevrsquwnjoaikhbkycvvcscyamffbjyvkqkyeavtlkxyrrnsmqohyyqxzgtjdavgwpsgpjhqzttukynonbnnkuqfxgaatpilrrxhcqhfyyextrvqzktcrtrsbimuokxqtsbfkrgoiznhiysfhzspkpvrhtewthpbafmzgchqpgfsuiddjkhnwchpleibavgmuivfiorpteflholmnxdwewj"))
//xrcrx
//jwj
