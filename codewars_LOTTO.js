function numberGenerator() {
var arr = [];
  for (var i = 0; i < 7; i++){
    arr[i] = Math.floor(Math.random() * 49);
    if(arr.indexOf(arr[i]) !== i){
      arr[i] = Math.floor(Math.random() * 49);
    }
    
  }

arr = arr.sort((a, b) => a - b);
arr[6] = Math.floor(Math.random() * 10);
  return arr;
}

function checkForWinningCategory(checkCombination, winningCombination) {
  
  var c = checkCombination.slice(0, 6).sort((a, b) => a - b);
  var w = winningCombination.slice(0, 6).sort((a, b) => a - b);
  var count = 0;
  var co = checkCombination[6];
  var wo = winningCombination[6];
  
  
  for(var i = 0; i < c.length; i++){
    if(w.indexOf(c[i]) >= 0){
      count++;
    }
  }
  c.push(co);
  w.push(wo);

  if(count == 6 && c[6] == w[6]){
    count = 1;
  } else if(count == 6 && c[6] !== w[6]){
    count = 2;
  } else if(count == 5 && c[6] == w[6]){
    count = 3;
  } else if(count == 5 && c[6] !== w[6]){
    count = 4;
  } else if(count == 4 && c[6] == w[6]){
    count = 5;
  } else if(count == 4 && c[6] !== w[6]){
    count = 6;
  } else if(count == 3 && c[6] == w[6]){
    count = 7;
  } else if(count == 3 && c[6] !== w[6]){
    count = 8;
  } else if(count == 2 && c[6] == w[6]){
    count = 9;
  } else {
    count = -1;
  }
  return count;
}
