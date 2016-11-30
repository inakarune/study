function calculate(num1,num2){

let arrs = [num1, num2];
let sum = 0;
for(let i = 0; i < arrs.length; i++){
  for(let k = 0; k < arrs[i].length; k++){
    if(k == arrs[i].length){
      sum += +arrs[i][k];
    } else {
      sum += +arrs[i][k] * Math.pow(2, arrs[i].length - 1 - k);
    }
  }
}
  return sum;
}
