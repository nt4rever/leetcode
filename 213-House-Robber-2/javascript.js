/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let size = nums.length;
    if (size === 1) return nums[0];
    if (size === 2) return Math.max(nums[0], nums[1]);
    return Math.max(
        helper(nums.slice(0, size - 1)),
        helper(nums.slice(1, size))
    );
};

var helper = function (nums) {
    let n = nums.length;
    let max1 = nums[0];
    let max2 = Math.max(max1, nums[1]);
    for (let i = 2; i < n; i++) {
        let tmp = Math.max(max2, max1 + nums[i]);
        max1 = max2;
        max2 = tmp;
    }
    return max2;
};

let t = rob([2, 1, 0, 1, 3]);
console.log(t);
// [2, 1, 0, 1, 3]
// [2, 2, 2, 3, 5]
