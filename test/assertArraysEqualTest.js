const assert = require('chai').assert;
const assertArraysEqual   = require('../assertArraysEqual');

describe("#assertArraysEqual", () => {
  it("returns 3 for [1, 2, 3]", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3]), 3);
  });
});

it("returns '5' for ['5']", () => {
  assert.strictEqual(assertArraysEqual(['5']), '5'); 
});
