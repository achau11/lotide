//This function takes two arrays and console.log appropriate message to console.
const assertArraysEqual = function (arr1, arr2) {
  const result = eqArrays(arr1, arr2);
  if (result){
    console.log(`✅ Assertion Passed. Both Arrays are equal. ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑 Assertion Failed. Both Arrays are not equal. ${arr1} === ${arr2}`);
  }   
}

const eqArrays = function(arr1, arr2){
  let i = 0;
  for (element of arr1){
    if (element !== arr2[i])
      return false;  
    i++;
  }
  return true;
};

const flatten = function(list) {
  let newArr = [];
  for (item of list){
    if(Array.isArray(item)){
      for(val of item)
        newArr.push(val);
    } else {
      newArr.push(item);
    }   
  }
  return newArr;
}
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
