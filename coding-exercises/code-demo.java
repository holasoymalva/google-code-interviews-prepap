
// Initially, player 1 can choose between 1 and 2. 
// If he chooses 2 (or 1), then player 2 can choose from 1 (or 2) and 5. If player 2 chooses 5, then player 1 will be left with 1 (or 2). 
// So, final score of player 1 is 1 + 2 = 3, and player 2 is 5. 
// Hence, player 1 will never be the winner and you need to return false.

// class Solution {
//     public boolean PredictTheWinner(int[] nums) {
//         int n = nums.length;
//         int[][] dp = new int[n][n];

//         for(int i = 0; i < n; i++){
//             dp[i][i] = nums[i];
//         }

//         for(int len = 2; len <= n; len++){
//             for(int i = 0; i <= n - len; i++ ){
//                 int j = i + len - 1;
//                 dp[i][j] = Math.max(nums[i]-dp[i+1][j], nums[j]-dp[i][j-1]);
//             }
//         }
//         return dp[0][n-1] >= 0;
//     }
// }

class Solution {
    public boolean PredictTheWinner(int[] nums) { 
        int user1, user2; 
        int n = nums.length; 
        user1 = user2 = 0; 
        for (int i = 0; i < n; i += 2) {
            user1 += nums[i];
        } 
        for (int i = 1; i < n; i += 2) { 
            user2 += nums[i]; 
        } 
        return (user1 < user2) ? false : true; 
    }
    public static void main(String[] args){
        Solution game = new Solution();
        
        int[] nums1 = {1,5,2};
        System.out.println(game.PredictTheWinner(nums1));
        int[] nums2 = {1,5,233,7};
        System.out.println(game.PredictTheWinner(nums2));
    }
}