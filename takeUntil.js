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

//This function takes two arrays and console.log appropriate message to console.
const assertArraysEqual = function (arr1, arr2) {
  const results = eqArrays(arr1, arr2);
  if (results){
    console.log(`✅ Assertion Passed. Both Arrays are equal. ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑 Assertion Failed. Both Arrays are not equal. ${arr1} === ${arr2}`);
  }   
}

const takeUntil = function(array, callback) {
  const result = [];

  for(const item of array){
    if (!callback(item)){
      result.push(item)
    } else {
      break;
    }
  }

  return result;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1,2,5,7,2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
