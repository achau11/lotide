//eqObjects function:
const eqObjects = function(object1, object2) {
  const obj1Keys = Object.keys(object1); 
  const obj2Keys = Object.keys(object2);
  let result = true;

  for (let key of obj1Keys){
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])){
      result = eqArrays(object1[key], object2[key])
    } else {

      if (obj1Keys.length !== obj2Keys.length){
        return false;
      }

      if (object1[key] !== object2[key]){
        return false;
      }  
    }  
  }
  return result;
};

const assertObjectsEqual = function(actual, expected) {
  //Implement me!
  const inspect = require('util').inspect; 
  const results = eqObjects(actual, expected);

  if (results){
    console.log(`✅ Assertion Passed. Both objects are equal. ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑 Assertion Failed. Both objects are not equal. ${inspect(actual)} === ${inspect(expected)}`);
  }    
};

assertObjectsEqual({a: 1, b: 2}, {a: 1, b: 2});
assertObjectsEqual({a: 4, b: 2}, {a: 1, b: 2});