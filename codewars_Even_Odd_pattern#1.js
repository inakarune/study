function EvenOdd(arr){
var sum = arr[0];
for(var i = 1; i < arr.length; i++){
if(i % 2 == 1){
sum *= arr[i] 
} else {
sum += arr[i];
}
}
return sum;
}
