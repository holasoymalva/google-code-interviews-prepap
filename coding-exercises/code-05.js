// Given an integer array nums, 
// move all 0's to the end of it 
// while maintaining the relative order of the non-zero elements.

// input  : [0,0,2,4,6]
// output : [2,4,6,0,0]

// Example One:
// input  : [0,2,0,4,0,6]
// output : [2,4,6,0,0,0]


const nums = [0,2,0,4,6,0,0,0];

function moveZerosToEnd(nums){
    let nonZeroIndex = 0;
    let i = 0
    // n = 8
    for (i; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[nonZeroIndex] = nums[i];
            nonZeroIndex++;
        }
    }
    // m = 5
    while(nonZeroIndex < nums.length){
        nums[nonZeroIndex] = 0;
        nonZeroIndex++;
    }
    // O(n+m)
    return nums;
}

const output = [2,4,6,0,0,0];

console.log(moveZerosToEnd(nums));

console.log(output);