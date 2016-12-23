function maxContiguousSum (arr) {
  let sum = 0;
  let len = arr.length;
  let count = 0;
  let idx = 0;
  
  while(count < len){
    let s = 0;
    while(idx < len){
      s += arr[idx];
      if(sum < s){
        sum = s;
      }
      idx++;
    }
    
    count++;
    idx = count;
  }
  
  return sum;
}
