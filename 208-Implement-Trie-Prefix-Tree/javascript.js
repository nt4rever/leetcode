class Trie {
    constructor() {
        this.children = {};
        this.end = false;
    }

    // word = 'apple'
    insert(word) {
        let currentNode = this;
        for (let char of word) {
            if (currentNode.children[char] === undefined) {
                currentNode.children[char] = new Trie();
            }
            currentNode = currentNode.children[char];
        }
        currentNode.end = true;
    }

    search(word) {
        let currentNode = this;
        for (let char of word) {
            if (currentNode.children[char] === undefined) {
                return false;
            }
            currentNode = currentNode.children[char];
        }
        return currentNode.end;
    }

    startsWith(prefix) {
        let currentNode = this;
        for (let char of prefix) {
            if (currentNode.children[char] === undefined) {
                return false;
            }
            currentNode = currentNode.children[char];
        }
        return true;
    }
}

// Test
var trie = new Trie();

trie.insert("apple");
console.log(trie.search("apple")); // return True
console.log(trie.search("app")); // return False
console.log(trie.startsWith("app")); // return True
trie.insert("app");
console.log(trie.search("app")); // return True
