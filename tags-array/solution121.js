//Best Time to Buy and Sell Stock
/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function (prices) {
//     var profit = 0,
//         currentProfit = 0;
//     for (var i = 0; i < prices.length - 1; i++) {
//         for (var j = i + 1; j < prices.length; j++) {
//             //内层循环找出当前买入值的最大利润
//             if (prices[j] - prices[i] > currentProfit) {
//                 currentProfit = prices[j] - prices[i]
//             }
//         }
//         profit = currentProfit > profit ? currentProfit : profit
//     }
//     return profit
// };
var maxProfit = function (prices) {
    var profit = 0,
        min = Number.MAX_VALUE;
    for (var i = 0; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i]
        } else {
            profit = prices[i] - min > profit ? prices[i] - min : profit
        }
    }
    return profit
};
