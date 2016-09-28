function minimumSum(values, n) {

values = values.sort((a, b) => b - a);
var vs = [];
var l = values.length;

 if(l == 0 || n == 0){
   return 0;
 } else if (n > l){
   return values.reduce((a, b) => a + b);
 } 
 
for (var i = 0; i < values.length; i++){
 
var v = values.slice(i, n + i);
if(v.length == n){
  vs.push(v.reduce((a, b) => a + b))
}
}

  return Math.min(...vs);

}

function maximumSum(values, n) {

values = values.sort((a, b) => b - a);
var vs = [];
var l = values.length;

 if(l == 0 || n == 0){
   return 0;
 } else if (n > l){
   return values.reduce((a, b) => a + b);
 } 
 for (var i = 0; i < 1; i++){

var v = values.slice(i, n + i);
if(v.length == n){
  vs.push(v.reduce((a, b) => a + b));
}
}
return Math.max(...vs);
}
