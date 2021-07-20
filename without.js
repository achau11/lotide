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
const assertArraysEqual = function(arr1, arr2) {
  const result = eqArrays(arr1, arr2);
  if (result){
    console.log('✅ Assertion Passed. Both Arrays are equal. ' + result);
  } else {
    console.log('🛑 Assertion Failed. Both Arrays are not equal. ' + result);
  }   
}

const without = function(source, itemsToRemove){
  let newArr = [];

  for (element of source){
    if (!itemsToRemove.includes(element))
      newArr.push(element);
  }
  return newArr;
}

assertArraysEqual((without([1, 2, 3], [1])), [2, 3]); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
