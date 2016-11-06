var solution = function(firstArray, secondArray) {
  let arr = [];
  for(let i = 0; i < firstArray.length; i++){
    arr[i] = firstArray[i] - secondArray[i];
  }
  arr = arr.map(v => Math.abs(v) * Math.abs(v)).reduce((a, b) => a + b) / firstArray.length;
  return arr;
}
