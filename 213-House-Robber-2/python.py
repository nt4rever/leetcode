class Solution:
    def rob(self, nums: List[int]) -> int:
        def helper(subNums: List[int]) -> int:
            max1, max2 = subNums[0], max(subNums[0], subNums[1])
            for i in range(2, len(subNums)):
                tmp = max(subNums[i] + max1, max2)
                max1 = max2
                max2 = tmp
            return max2
        n = len(nums)
        if (n == 1):
            return nums[0]
        if (n == 2):
            return max(nums[0], nums[1])
        return max(helper(nums[0:n-1]), helper(nums[1:n]))