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

module.exports = middle;