var Trie = function () {
    this.children = {};
    this.end_of_node = false;
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    currentNode = this;
    for (char of word) {
        if (!currentNode.children[char]) {
            currentNode.children[char] = new Trie();
        }
        currentNode = currentNode.children[char];
    }
    currentNode.end_of_node = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    currentNode = this;
    for (char of word) {
        if (!currentNode.children[char]) {
            return false;
        }
        currentNode = currentNode.children[char];
    }
    return currentNode.end_of_node;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    currentNode = this;
    for (char of prefix) {
        if (!currentNode.children[char]) {
            return false;
        }
        currentNode = currentNode.children[char];
    }
    return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

// Test
var trie = new Trie();

trie.insert("apple");
console.log(trie.search("apple")); // return True
console.log(trie.search("app")); // return False
console.log(trie.startsWith("app")); // return True
trie.insert("app");
console.log(trie.search("app")); // return True
