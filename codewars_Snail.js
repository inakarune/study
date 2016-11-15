snail = function(arr) {
let array = arr.slice();
  if(array.length == 1){
    return array[0];
  }

  let result = [];
  let count = 0;
  while(count < 5){
  for(let i = 0; i < 4; i++){
    if(i == 0 && array[i] !== undefined){
      result.push(...array[0]);
      array.splice(i, 1);
    }
    if(i == 1 && array.length !== 0){
      for(let j = 0; j < array.length; j++){
        result.push(array[j].pop());
      }
    }
    if(i == 2 && array.length !== 0){
      let last = array[array.length - 1].reverse();
      result.push(...last);
      array.pop()
    }

    if(i == 3){
      for(let j = array.length - 1; j > 0; j--){
        result.push(array[j].shift());
      }
    }
  }

  if(array.length == 0){
    break;
  }

  count++
  }


  return result;
}
