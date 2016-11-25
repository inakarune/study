function collatz(n){
let arr = [n];
while(n >= 0){
  if(n == 1 || !n){
    break;
  }
  if(n % 2){
   n = (n * 3) + 1;
   arr.push(n);
  } else {
   n = n / 2;
   arr.push(n);
  }
}
  return arr.length;
}
