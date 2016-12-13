function makeLooper(str) {
  let idx = 0;
  return function(){
    if(idx < str.length){
      return str[idx++];
    } else if(idx == str.length){
      idx = 1;
      return str[0];
    }
  }
}
