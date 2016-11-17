function doneOrNot(board){ 
let fail = "Try again!";
let z = 0;
  while(z < 9){
    let arr = [];
    for(let i = 0; i < board.length; i++){
      arr.push(board[i][z]);
    }
    
    if(!height(arr)){
      return fail;
    }
    z++
  }
  let x = 0;
  while(x < 9){
    if(!height(board[x])){
      return fail;
    }
    x++;
  }
  
  let y = 0;
  while(y < 12){
    if(!board[0].length){
      if(!board[0].length){
        break;
      }  
    }
    let group = board[0].splice(0, 3).concat(board[1].splice(0, 3)).concat(board[2].splice(0, 3));
    if(!height(group)){
      return fail;
    }
    y++;
  }
 return 'Finished!'; 
}

function height(array){
  let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  for(let j = 0; j < nums.length; j++){
    if(!array.includes(nums[j])){
      return false;
    }
  }
  return true;
}
