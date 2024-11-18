<?php

function decrypt(array $code, int $k): array
{
  $result = [];
  $len = count($code);
  $size = abs($k);
  for ($i = 0; $i < $len; $i++) {
    $result[$i] = 0;
    for ($j = 1; $j <= $size; $j++) {
      $result[$i] += $code[($len + $i + $j * $k / $size) % $len];
    }
  }
  return $result;
}
//  1,2,3,4,5 k =3 , n = 5, i = 7| -n + 1 <= k <= n -1 