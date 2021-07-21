const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  else
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function(arr1, arr2){
  let i = 0;
  
  if (arr1.length !== arr2.length) return false;

  for (element of arr1){
    if (element !== arr2[i])
      return false;  
    i++;
  }
  return true;
};

//Test Cases:
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([0, 4, 5], [1, 2, 3]), false);
assertEqual(eqArrays(['abc', 4, 5], ['fdg', 4, 5]), false); 
assertEqual(eqArrays(['fdg', 'abc', 'hdf'], ['fdg', 'abc', 'hdf']), true);  
assertEqual(eqArrays([[0, 1, 2], 4, 5], [[0, 1, 2], 4, 5]), true);   