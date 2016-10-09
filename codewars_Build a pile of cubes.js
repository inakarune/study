function findNb(m) {
var num = 0;
var count = 1;

while(count){
  num = Math.pow(count * (count + 1) / 2, 2)
  if(num == m){
    return count;
  } else if(num > m){
    return -1;
  }
  count++;
}
}
