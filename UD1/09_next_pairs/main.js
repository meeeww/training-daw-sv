const assert = require("assert").strict;

function nextPairs(value) {
  return [((value - 1) % 2 == 0 ? value - 1 : value - 2), ((value + 1) % 2 == 0 ? value + 1 : value + 2)];
}

assert.deepStrictEqual(nextPairs(3), [2, 4]);
assert.deepStrictEqual(nextPairs(4), [2, 6]);