function scoreHand(cards){

let obj = { 'A': 11, 'Q': 10, 'K': 10, 'J': 10 };
let num = "0 1 2 3 4 5 6 7 8 9 10".split(' ').map(Number);
let arr = cards.slice();
let sum = 0;

for(let i = 0; i < arr.length; i++){
if(!isNaN(+arr[i])){
    sum += +arr[i]
  } else if(typeof arr[i] === 'string'){
    sum += obj[arr[i]]
  }
}
let af = arr.filter(v => v == 'A');
let ae = arr.every(v => v == 'A');
if(af.length == 4 && ae){
  sum -= 11 + 11;
  sum -= 8;
} else if(af.length == 3 && ae){
  sum -= 11 + 1 + 1;
} else if(af.length == 2 && ae){
  sum -= 10;
}

if(sum > 11 && !ae && af.length >= 2){
  sum -= obj['A'] * af.length;
  sum += 1 * af.length;
 
} else if(sum > 12 && af.length == 1 && !ae && arr.length > 2){
    sum -= obj['A'] * af.length;
    sum += 1 * af.length;
}
  return sum;
}
