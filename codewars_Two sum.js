function twoSum(numbers, target) {
console.log(numbers)
console.log(target)
var arr = [];
var di = numbers.slice();

for (var i = 0; i < numbers.length; i++){
  var idx = di.lastIndexOf(target - di[i])
  
  if (idx > 0){
    arr.push(di[i]);
    arr.push(di[idx]);
    
    break;
  } 
  
}
arr[0] = numbers.indexOf(arr[0]);
arr[1] = numbers.lastIndexOf(arr[1]);
return arr;
}
