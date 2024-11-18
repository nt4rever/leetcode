<?php
/**
 * @param int[] $nums
 * @return int
 */
function rob($nums)
{
  $n = count($nums);

  if ($n === 1)
    return $nums[0];

  $arr = [$nums[0], max($nums[0], $nums[1])];

  for ($i = 2; $i < $n; $i++) {
    $arr[$i] = max($arr[$i - 1], $nums[$i] + $arr[$i - 2]);
  }

  return $arr[$n - 1];
}

echo rob([2, 1, 1, 2]);
/**
 * 2* 1 1 2
 * 2 2* 1 2
 * 2 2 3* 2
 * 2 2 3 4*
 */