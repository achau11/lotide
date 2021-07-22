const map = function(array, callback){
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }    
  return results;
};

//Assert Arrays 
const assertArraysEqual = function (arr1, arr2) {
  const results = eqArrays(arr1, arr2);
  if (results){
    console.log(`✅ Assertion Passed. Both Arrays are equal. ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑 Assertion Failed. Both Arrays are not equal. ${arr1} === ${arr2}`);
  }   
}

//Eq arrays for Assert arrays function
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


const words = ["ground", "control", "to", "major", "tom"];
const strings = ['ABC', 'DFG', 'HIJ'];
const results1 = map(words, word => word[0]);
const results2 = map(strings, string => string[0]);

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results2, ['A', 'D', 'H']);
