<?php

class Solution
{
    /**
     * @param array<int> $nums
     * @return int
     */
    public function rob($nums)
    {
        $n = count($nums);

        if ($n === 1)
            return $nums[0];

        if ($n === 2)
            return max($nums[0], $nums[1]);

        return max(
            $this->helper(array_slice($nums, 0, $n - 1)),
            $this->helper(array_slice($nums, 1, $n))
        );
    }

    /**
     * @param array<int> $subNums
     * @return int
     */
    protected function helper($subNums)
    {
        $max1 = $subNums[0];
        $max2 = max($subNums[0], $subNums[1]);

        for ($i = 2; $i < count($subNums); $i++) {
            $tmp = max($max1 + $subNums[$i], $max2);
            $max1 = $max2;
            $max2 = $tmp;
        }

        return $max2;
    }
}

