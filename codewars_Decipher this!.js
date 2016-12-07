function decipherThis(str) {

let arr = str.split(' ')
let nums = arr.map(v => v = String.fromCharCode(parseFloat(v)))

arr = arr.map(v => v = v.replace(/\d/g, '')).map(v => v.split('')).map(move);

for(let i = 0; i < arr.length; i++){
  arr[i] = nums[i] + arr[i];
}
return arr.join(' ');
}

function move(v){
  if(v.length > 3){
    let st = v.shift();
    let m = v.pop();
    v.push(st)
    v.unshift(m)
    return v.join('')
  }
  return v.reverse().join('');
}
