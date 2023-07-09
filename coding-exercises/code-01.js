/*
You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

 

Example 1:

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1

Example 2:

Input: coins = [2], amount = 3
Output: -1
*/

function coinChange(coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  return coins.reduce((dp, coin) => {
    for (let i = coin; i <= amount; i++) {
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
    return dp;
  }, dp)[amount] === Infinity ? -1 : dp[amount];
}

// Example usage:
const coins1 = [1, 2, 5];
const amount1 = 11;
console.log(coinChange(coins1, amount1)); // Output: 3

const coins2 = [2];
const amount2 = 3;
console.log(coinChange(coins2, amount2)); // Output: -1

/*
In the above solution, we use the reduce function to iterate through the coins array and update the dp array, which stores the minimum number of coins needed for each amount. For each coin, we iterate from its value (coin) to the target amount, and update dp[i] if a smaller number of coins is found.

The reduce function starts with the initial dp array and updates it on each iteration. Finally, we check if the minimum number of coins needed for the amount is still Infinity. If so, it means the amount cannot be made up by any combination of the coins, and we return -1. Otherwise, we return dp[amount], which represents the fewest number of coins needed.

Note that this solution modifies the dp array in place using the reduce function.
*/
