var addOne = function(e) {return e + 1;};
var square = function(e) {return e * e;};
Object.prototype.pipe = function(func){
  let that = this;
  return function(){
    let arg = arguments;
    let add = that(arg[0]);
    return func(add);
  }
}
