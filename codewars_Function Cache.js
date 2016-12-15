function cache(func) {
  let obj = {};
  
  return function(){
    let args = JSON.stringify(arguments);
    if(!obj.hasOwnProperty(args)){
      obj[args] = func.apply(this, arguments);
    }
    return obj[args];
  }
}
