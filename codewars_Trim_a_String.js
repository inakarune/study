String.prototype.trim = function() {
var str = this;
str = str.split('')
console.log(str)
while(true){
if (str[0] == ' ' || str[0] == '\n' || str[0] == '\t' || str[0] == '\r'){
  str.shift();
} else if (str[str.length - 1] == ' ' || str[str.length - 1] == '\n' || str[str.length - 1] == '\t' || str[str.length - 1] == '\r'){
  str.pop();
}
if (str[0] !== ' ' && str[0] !== '\n' && str[0] !== '\t' && str[0] !== '\r' && str[str.length - 1] !== ' ' && str[str.length - 1] !== '\n' && str[str.length - 1] !== '\t' && str[str.length - 1] !== '\r'){
  break;
}
}
  return str.join('');
};
