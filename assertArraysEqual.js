const eqArrays = function(arr1, arr2) {
  let i = 0;
  for (element of arr1){
    if (element !== arr2[i])
      return false;  
    i++;
  }
  return true;
};

//This function takes two arrays and console.log appropriate message to console.
const assertArraysEqual = function (arr1, arr2) {
  const result = eqArrays(arr1, arr2);
  if (result){
    console.log('✅ Assertion Passed. Both Arrays are equal. ' + result);
  } else {
    console.log('🛑 Assertion Failed. Both Arrays are not equal. ' + result);
  }  
  
}
//Test cases:
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([0, 1, 2], [0, 3]);