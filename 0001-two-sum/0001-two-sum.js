/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    let len = nums.length - 1;

    for (let i = 0; i <= len; i++) {
        for (let j = i + 1; j <= len; j++) {
            // Compare the sum of the values at index i and j to the target
            if (nums[i] + nums[j] == target) {
                return [i, j] // returning the indices
            }
        }
    }

};