function listToArray(list) {
let count = [];

  for(let k in list){
    if(typeof list[k] === 'object'){
      list[k] = listToArray(list[k]);
      
        count = count.concat(list[k])
      
    } else if(typeof list[k] === 'number' || typeof list[k] === 'string' || typeof list[k] === 'boolean'){
      count.push(list[k]);
    } 
  }
  return count;
}
