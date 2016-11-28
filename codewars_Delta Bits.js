function convertBits(a, b){
let aa = twoChange(a);
let bb = twoChange(b);
let count = 0;

  if(aa.length < bb.length){
    let zero = bb.length - aa.length;
    aa = '0'.repeat(zero) + aa;
    for(let i = 0; i < bb.length; i++){
      if(bb[i] != aa[i]){
        count++;
      }
    }
  } else {
    let zero = aa.length - bb.length;
    bb = '0'.repeat(zero) + bb;
    for(let i = 0; i < aa.length; i++){
      if(aa[i] != bb[i]){
        count++
      }
    }
  }
  
  return count;
}

function twoChange(num){
      var arr = [];
      var push = 0;
      var result = ''

      while (num >= 1){ //십진법에서 이진법으로 변환
        push = num % 2
        arr.push(push);
        num = Math.floor(num / 2)
      }

      result = arr.reverse().join('')
      return result
    }
