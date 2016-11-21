function isSolved(board) {
for(let i = 0; i < 3; i++){
  if(board[i].every(v => v == 1)){
    return 1;
  } else if(board[i].every(v => v == 2)){
    return 2;
  } 
}

let z = 0;
while(z < 3){
let he = [];
  for(let i = 0; i < 3; i++){
    he.push(board[i][z]);
  }
  if(he.every(v => v == 1)){
    return 1;
  } else if(he.every(v => v == 2)){
    return 2;
  } 
  z++
}

let y = 0;
while(y < 3){
  let cross = [];
  for(let i = 0; i < 3; i++){
    cross.push(board[i][i]);
  }
  if(cross.every(v => v == 1)){
    return 1;
  } else if(cross.every(v => v == 2)){
    return 2;
  } 
  y++
}
  for(let i = 0; i < 3; i++){
    if(board[i].some(v => v == 0)){
      return -1;
    }
  }

  return 0;
}
