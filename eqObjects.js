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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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

//Test cases
const ab = { a: '1', b: '2'};
const ba = { b: '2', a: '1'};
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); 

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); 