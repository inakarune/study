function genfib(){
  let arr = [0, 1];
  let idx = 0;
  return function fib(){
    if(idx == 0){
      idx++;
      return arr[0];
    } else if(idx == 1){
      idx++;
      return arr[1];
    } else if(idx > 1){
      arr[idx] = arr[idx - 1] + arr[idx - 2];
      idx++;
      return arr[arr.length - 1];
    }
  }
}
