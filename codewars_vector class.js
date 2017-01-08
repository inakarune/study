var Vector = function (components) {
  this.arr = components;
  this.add = add;
  this.subtract = subtract;
  this.dot = dot;
  this.norm = norm;
  this.equals = equals;
  this.rem = {};
};

function check(a, b){
  if(a.length !== b.length){
    throw 'array length is not equal.';
  }
  return true;
}

function add(obj){
  let a = this.arr;
  let b = obj.arr;
  let result = [];
  check(a, b);
  for(let i = 0, len = a.length; i < len; ++i){
    result[i] = a[i] + b[i];
  }
  return result;
}

function subtract(obj){
  let a = this.arr;
  let b = obj.arr;
  let result = [];
  check(a, b);
  for(let i = 0, len = a.length; i < len; ++i){
    result[i] = a[i] - b[i];
  }
  return result;
  
}
function dot(obj){
  let a = this.arr;
  let b = obj.arr;
  let result = 0;
  check(a, b);
  for(let i = 0, len = b.length; i < len; ++i){
    result += a[i] * b[i];
  }
  return result;

}

function norm(obj){
  let a = this.arr;
  if(obj === undefined){
    return 0;
  }
  return a.map(v => v = Math.pow(v, 2));
}

function equals(obj){
  let a = this.arr;  
  let b = obj.arr;
  let think = b.join(',');
  
  if(obj.rem[think] != undefined){
    return false;
  }
  
  this.rem[think] = true;
  return a.length == b.length;
}

Object.prototype.equals = function(obj){
  return this.length == obj.arr.length;
}

Object.prototype.toString = function(){
  return '(' + this.arr + '' + ')';
}
