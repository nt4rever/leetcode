/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let size = nums.length;
  if (size === 1) return nums[0];
  if (size === 2) return Math.max(nums[0], nums[1]);
  return Math.max(helper(nums.slice(0, size - 1)), helper(nums.slice(1, size)));
};

var helper = function (nums) {
  let n = nums.length;
  let prev2 = nums[0];
  let prev1 = Math.max(prev2, nums[1]);
  for (let i = 2; i < n; i++) {
    let tmp = Math.max(prev1, prev2 + nums[i]);
    prev2 = prev1;
    prev1 = tmp;
  }
  return prev1;
};

let t = rob([2, 1, 0, 1, 3]);
console.log(t);
// [2, 1, 0, 1, 3]
// [2, 2, 2, 3, 5]
