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

module.exports = eqArrays; 