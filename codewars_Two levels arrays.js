function flattenTwoLevels(array) {
  for(let i = 0; i < array.length; i++){
    if(Array.isArray(array[i])){
      for(let j = 0; j < array[i].length; j++){
        if(array[i].some(v => Array.isArray(v))){
          array[i] = array[i].reduce((a, b) => a.concat(Array.isArray(b) ? flattenTwoLevels(b) : b), []);
        } else {
          break;
        }
      }
    }
  }
  return array;
}
