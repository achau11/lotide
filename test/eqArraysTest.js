const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

//Test Cases:
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([0, 4, 5], [1, 2, 3]), false);
assertEqual(eqArrays(['abc', 4, 5], ['fdg', 4, 5]), false); 
assertEqual(eqArrays(['fdg', 'abc', 'hdf'], ['fdg', 'abc', 'hdf']), true);    
