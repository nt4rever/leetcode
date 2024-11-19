/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    const n = nums.length;
    let max1 = nums[0];
    let max2 = Math.max(nums[0], nums[1]);
    for (let i = 2; i < n; i++) {
        let tmp = Math.max(max1 + nums[i], max2);
        max1 = max2;
        max2 = tmp;
    }
    return max2;
};

let t = rob([2, 1, 0, 1, 3]);
console.log(t);

