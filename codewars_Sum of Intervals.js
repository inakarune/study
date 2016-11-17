function sumIntervals(intervals){

let count = 0;
let idx = 0;
  for(let i = 0; i < intervals.length; i++){
  let num = gap(intervals[i]);
    if(count < num){
      count = num;
      idx = i;
    }
  }
let big = convert(intervals[idx]);

  for(let j = 0; j < intervals.length; j++){
    let item = intervals[j];
    if(big.includes(item[0]) || big.includes(item[1])){
      big.concat(item);
      intervals[j] = [0, 0];
    }
  }

  big = big.sort((a, b) => a - b);
  big = convert(big);

  let result = [];
  result.push(big);
  result.push(...intervals)

let sum = 0;
  for(let k = 0; k < result.length; k++){
    sum += gap(result[k]);
  }
  return sum;
}


function gap(array_e){
return array_e[array_e.length - 1] - array_e[0];
}


function convert(arrs){
let a = [];
for(let i = arrs[0]; i <= arrs[arrs.length - 1]; i++){
  a.push(i);
}
return a;
}
