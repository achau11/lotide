const tail = require('../tail');
const assertEqual = require('../assertEqual');

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

//Test Case: An array with only one element should yield an empty array for its tail
const result = tail(['Hehe']);
assertEqual(result.length, 0);

//Test Case: An array with only one element should yield an empty array for its tail
const result1 = tail([]);
assertEqual(result1.length, 0);
