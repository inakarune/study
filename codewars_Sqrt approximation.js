function sqrtApproximation(number) {
console.log(number)
var num = 0;
var arr = [];
if (!number){
  return number;
}

for (var i = 0; i <= number; i++){
  if (i * i === number){
    num = i
    break;
  } else if (i * i < number){
    arr.push(i);
  }
}
arr[arr.length] = arr[arr.length - 1] + 1;
console.log(arr);
  return num !== 0 ? num : arr.splice(-2);
}
