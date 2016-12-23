function pipeline(seed /*, args */) {
  if(arguments.length == 1 || !arguments.length){
    return seed;
  }
  return [...arguments].slice(1).reduce((a, b) => b(a), seed);
  
};

function compose() {
  let arg = [...arguments];
  return function(str){
    return arg.reduceRight((a, b) => b(a), str);
  }
};
