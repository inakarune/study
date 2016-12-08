function Spare(array){
let sum = 0;
  for(let i = 0; i < array.length; i++){
    let item = array[i];
    let plus = item[0] + item[1];
    if(plus === 10 && i < 9){
      sum += plus + array[i + 1][0];
    } else if(plus === 10 && i >= 9){
      sum += plus;
    } else if(plus != 10){
      sum += item[0];
    }
  }
  return sum;
}

function Strike(array){
let sum = 0;

  for(let i = 0; i < array.length; i++){
    let group = array.slice(i, i + 3).reduce((a, b) => a.concat(b), []).reduce((a, b) => a + b);
    if(i < 9 && array[i][0] == 10){
      sum += group;
    } else if(i >= 9 ){
      sum += array[i][0];
        if(array[i][1] !== undefined){
          sum += array[i][1];
        }
    }
  }
  return sum;
}

function mix(array){
  let sum = 0;
  for(let i = 0; i < array.length; i++){
    let item = array[i];
    if(item[0] === 10 && i < 9){
      sum += item[0] + array[i + 1][0] + array[i + 1][1];
    } else if(item[1] !== undefined && item[0] + item[1] === 10){
      if(array[i + 1] === undefined){
        sum += item[0] + item[1];
      } else {
        sum += item[0] + item[1] + array[i + 1][0];
      }
      
    }
  }
  return sum;
}

var bowlingScore = function(rolls) {
  let arr = [];
  let copy = rolls.slice();
  let ten = 0;
  let spare = 0;
  
  for(let i = 0; i < rolls.length; i++){
    let move = [];
    if(copy[i] == 10){
      move.push(copy.shift());
      arr.push(move);
      ten++;
      i = -1;
    } else if(copy[i] != undefined){
      move.push(...copy.splice(0, 2))
        if(move[0] + move[1] === 10){
          spare++;
        }
      arr.push(move);
      i = -1;
    }
  }
  
  
  if(!ten && !spare){
    return arr.reduce((a, b) => a.concat(b), []).reduce((a, b) => a + b, 0);
  } else if(!ten && spare){
    return Spare(arr);
  } else if(ten && !spare){
    return Strike(arr);
  } else if(ten && spare){
    return mix(arr);
  }
  
}
