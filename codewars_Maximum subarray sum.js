var maxSequence = function(arr){

  if(!arr.length || arr.every(v => v < 0)){
    return 0;
  } 
  let sum = arr.reduce((a, b) => a + b);
  let count = 0;
  let a = [];
  while(count <= arr.length){
    for(let i = 1; i <= arr.length; i++){
      let s = arr.slice(count, i);
      
      if(s.length == 0){
        continue;
      }
      if(s.reduce((a, b) => a + b) > sum){
        sum = s.reduce((a, b) => a + b);
        a = arr.slice(count, i);
      }
    }
    count++
  }
  return sum;
}
