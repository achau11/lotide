const assertArraysEqual = function (arr1, arr2) {
  const results = eqArrays(arr1, arr2);
  if (results){
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

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  let index = 0

  for (char of sentence){
    if(results[char]){
      results[char].push(index); 
    }

    if(!results[char]){
      results[char] = [index];
    }
    index++;
  }
  return results;
};

const results = letterPositions('hello');

assertArraysEqual(results['h'], [0]);
assertArraysEqual(results['e'], [1]);
assertArraysEqual(results['l'], [2, 3]);
assertArraysEqual(results['o'], [4]);