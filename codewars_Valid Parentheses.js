function validParentheses(parens){
console.log(parens)
if(parens.length <= 1){
return false;
}
var op = parens.match(/\(/g);
var ed = parens.match(/\)/g);
if (op === null || ed === null){
  return false;
} else if (parens.charAt(parens.length - 1) === '('){
  return false;
}


  return op.length === ed.length ? true : false;
}
