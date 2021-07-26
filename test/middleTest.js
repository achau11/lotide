const assert = require('chai').assert;
const middle = require('../middle');

//Test Cases
describe('#middle', () => {
  it('return [] for two values', () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it('return [] for one value', () => {
    assert.deepEqual(middle([1]), []);
  });
  it('return [3] for [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it('return [3, 4] for [1, 2, 3, 4, 5, 6]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});