function EvenOdd(arr){
let sum = arr[0];
  for(let i = 1; i < arr.length; i++){
    if(i % 2 == 1){
    sum *= arr[i] 
    } else {
    sum += arr[i];
    }
  }
  return sum;
}
