/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 * @description
 * Explain (****)
 * Pre:[2, 4, 9, 3] k = 2
 * At i = 2, j = 1
 * direction = k/abs(k) (require k != 0)
 * index = i + j * direction
 * index = (index) mod (length) (ex: 5 mod 6 = 5)
 * But when index is out of array indices (index >= n or index < 0), need add a buffer so  0 <= index < n
 * => index = (length + i + j * direction) mod (length)
 * ex: (5 + -1) mod 5 = 4
 * ex: (6 + 7) mod 6 = 1
 */
var decrypt = function (code, k) {
    const r = [];
    const s = code.length;
    const d = Math.abs(k);

    for (let i = 0; i < s; i++) {
        r[i] = 0;
        for (let j = 1; j <= d; j++) {
            r[i] += code[(s + i + j * (k / d)) % s]; // (****)
        }
    }

    return r;
};

// Test
console.log({
    outcome: decrypt([2, 4, 9, 3], 2),
    pass: decrypt([2, 4, 9, 3], 2).toString() === "13,12,5,6",
});

// Test
console.log({
    outcome: decrypt([2, 4, 9, 3], 0),
    pass: decrypt([2, 4, 9, 3], 0).toString() === "0,0,0,0",
});

// Test
console.log({
    outcome: decrypt([2, 4, 9, 3], -2),
    pass: decrypt([2, 4, 9, 3], -2).toString() === "12,5,6,13",
});

/**
 * Explain (****)
 * Pre:[2, 4, 9, 3] k = 2
 * At i = 2, j = 1
 * direction = k/abs(k) (require k != 0)
 * index = i + j * direction
 * index = (index) mod (length) (ex: 5 mod 6 = 5)
 * But when index is out of array indices (index >= n or index < 0), need add a buffer so  0 <= index < n
 * => index = (length + i + j * direction) mod (length)
 * ex: (5 + -1) mod 5 = 4
 * ex: (6 + 7) mod 6 = 1
 */
