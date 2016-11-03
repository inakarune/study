var beeramid = function(bonus, price) {
  let ea = Math.floor(bonus / price);
  let arr = [];
  let odd = 1;
  for(let i = 0; i < ea; i++){
    if(i == 0){
      arr[i] = 1;
      ea -= 1;
    } else {
      odd += 2;
      arr[i] = arr[i - 1] + odd;
      ea -= arr[i];
      if(ea < 0){
        return arr.length - 1;
      }
    }
  }
  
  return arr.length;
}
