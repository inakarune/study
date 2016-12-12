function fibonacci(n) {
  let arr = fibo(n);
  if(n){
    arr.pop();
  } 
  return arr;
}

function fibo(n) {
  if(n <= 0){
    return [];
  } else if(n == 1){
    return [0, 1];
  }
  let f = fibo(n - 1);
  f[n] = f[n - 1] + f[n - 2];
  return f;
}
