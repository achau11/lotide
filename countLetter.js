// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  else
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(string){
  const result = {};
  
  for (let char of string){
    if (char === ' ')    
      continue;

    if (result[char])
      result[char] += 1;
    
    if (!result[char])
      result[char] = 1;
  }

  return result;
}

const result1 = countLetters('hehe');

assertEqual(result1['h'], 2);
assertEqual(result1['e'], 2);
assertEqual(result1['o'], undefined);
