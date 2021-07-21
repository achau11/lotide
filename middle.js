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

//ACTUAL FUNCTION
const middle = function(arr){
  const newArr = [];

  if (arr.length === 1 || arr.length === 2)
    return newArr;
  
  if (arr.length % 2 !== 0){
    const index = (arr.length - 1) / 2;   //index of middle value of the array
    newArr.push(arr[index]);
    return newArr;
  }

  if (arr.length % 2 === 0){
    const index = Math.trunc(arr.length / 2);   //index of middle value of the array
    newArr.push(arr[index - 1], arr[index]);
    return newArr;
  }
}

//Test Cases
assertArraysEqual(middle([1,2]), []); 
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);