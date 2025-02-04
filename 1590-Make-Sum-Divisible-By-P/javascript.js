//  brute force
//  /**
//  * @param {number[]} nums
//  * @param {number} p
//  * @return {number}
//  */
// var minSubarray = function (nums, p) {
//     const n = nums.length;
//     let totalSum = 0;

//     nums.forEach((x) => (totalSum += x));

//     if (totalSum % p === 0) {
//         return 0;
//     }

//     let minLength = n;

//     for (let start = 0; start < n; ++start) {
//         let subSum = 0;

//         for (let end = start; end < n; ++end) {
//             subSum += nums[end];

//             let remainingSum = totalSum - subSum;

//             if (remainingSum % p === 0) {
//                 minLength = Math.min(minLength, end - start + 1);
//             }
//         }
//     }

//     return minLength === n ? -1 : minLength;
// };

/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minSubarray = function (nums, p) {
    const n = nums.length;
    let totalSum = 0;

    nums.forEach((x) => {
        totalSum = (totalSum + x) % p;
    });

    const target = totalSum % p;

    if (target === 0) {
        return 0;
    }

    const modMap = new Map();
    modMap.set(0, -1);

    let minLength = n;
    let currentSum = 0;

    for (let i = 0; i < n; i++) {
        // (currentSum[i] - currentSum[j]) % p == target
        // assumption we have currentSum[i], we need to find currentSum[j] exist in previous, it's needed
        // needed = currentSum[j] = (currentSum[i] - target + p) % p

        currentSum = (currentSum + nums[i]) % p;

        needed = (currentSum - target + p) % p;

        if (modMap.has(needed)) {
            minLength = Math.min(minLength, i - modMap.get(needed));
        }

        modMap.set(currentSum, i);
    }

    return minLength === n ? -1 : minLength;
};

console.log(minSubarray([6, 3, 5, 2], 9));
