<?php

class Trie
{
  private array $children = [];
  private bool $end = false;

  public function insert(string $word)
  {
    $node = $this;
    foreach (str_split($word) as $char) {
      if (!array_key_exists($char, $node->children)) {
        $node->children[$char] = new Trie();
      }
      $node = $node->children[$char];
    }
    $node->end = true;
  }

  public function search(string $word)
  {
    $node = $this;
    foreach (str_split($word) as $char) {
      if (!array_key_exists($char, $node->children)) {
        return false;
      }
      $node = $node->children[$char];
    }
    return $node->end;
  }

  public function startsWith(string $prefix)
  {
    $node = $this;
    foreach (str_split($prefix) as $char) {
      if (!array_key_exists($char, $node->children)) {
        return false;
      }
      $node = $node->children[$char];
    }
    return true;
  }
}