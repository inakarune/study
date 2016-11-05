function solution(input, markers){

  let count = 0;
  let str = '';
  let reg = input.search(/\n/);
  for(let i = 0; i < input.length; i++){
    if(!count && input[i] !== markers[0] && input[i] !== markers[1]){
      str += input[i];
    } else if(input[i] == markers[0] || input[i] == markers[1]){
      count++;
      str = str.trim();
    } else if(count > 0 && i == reg){
      count = 0;
      str += input[i];
    } else if(count > 0){
      continue;
    }
    
  }

  return str.trim();
}
