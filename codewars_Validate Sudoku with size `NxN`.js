var Sudoku = function(aaaaa) {//console.log(aaaaa)
  //   Private methods
  // -------------------------



  //   Public methods
  // -------------------------
  return {
    isValid: function() {
      let data = aaaaa.slice();
      let l = data.length;
      
    
      if(Math.sqrt(l) * Math.sqrt(l) === l){
        for(let i = 0; i < data.length; i++){  // 가로 확인
          if(!height(data[i])){
            return false;
          }
        }

        for(let i = 0; i < data.length; i++){  // 세로 확인
          if(data[i].length !== aaaaa.length){
            return false;
          }
        }
         
        for(let i = 0; i < aaaaa.length; i++){  // 작은 스도쿠 확인 , 대각선
          if(!data.length){
            break;
          }
          let sp = data.splice(0, Math.sqrt(aaaaa.length));
          //console.log(sp)
          if(!check(sp)){
            return false;
          }
          i = 0
        }
        
        
        return true;
      } 
      
      return false;
    }
  };
};

function check(array){
let y = 0;
let ars = array.slice();
let l = array.length;
console.log('array', array)
let cc = [];
    for(let i = 0; i < array.length; i++){
    console.log('ars[i]', ars[i])
    let part = ars[i].splice(0, l);
      cc.push(...part);
    }
    console.log('cc', cc)
    if(!height(cc)){
      return false;
    }
  
  return true;
}

function height(array){
  let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
  let arrs = nums.slice(0, array.length);
  //console.log(array)
  if(!array.length){
    return true
  } 
  for(let i = 0; i < array.length; i++){
    if(!array.includes(arrs[i])){
      return false;
    }
  }

  return true;
}
