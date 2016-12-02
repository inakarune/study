function stringify(list) {
let arr = [];
  if(list === null){
    arr.push(null + '');
  }
  for(let key in list){
    if(typeof list[key] == 'object' && list[key] !== null){
      arr = arr.concat(stringify(list[key]));
    } else {    
      arr.push(list[key] + '');
    }
  }
  return arr.join(' -> ');
}
