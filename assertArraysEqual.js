const eqArrays = require('./eqArrays');

//This function takes two arrays and console.log appropriate message to console.
const assertArraysEqual = function (arr1, arr2) {
  const results = eqArrays(arr1, arr2);
  if (results){
    console.log(`✅ Assertion Passed. Both Arrays are equal. ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑 Assertion Failed. Both Arrays are not equal. ${arr1} === ${arr2}`);
  }   
}

module.exports = assertArraysEqual;