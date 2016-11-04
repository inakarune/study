function solution(hour) {

  let str = hour + '';
  if(str.length == 3){
    return str.split('').map((v, i) => {
      if(i == 0){
        return v = v + ':'
      }
      return v;
    }).join('')
  } else if(str.length == 4){
    return str.split('').map((v, i) => {
      if(i == 1){
        return v = v + ':'
      }
      return v;
    }).join('')
  } 
    throw hour;
  
}
