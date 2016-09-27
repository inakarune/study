function powerSumDigTerm(n) {
var arr = [];
var num = 0;
for (var i = 5; i < 70; i++){
  for (var j = 2; j <= 10; j++){
    var num = Math.pow(i, j)
    var vs = num + '';
    vs = vs.split('').map(Number).reduce((a, b) => a + b);
    if (i == vs){
      arr.push(num);
    }
  }
}

return arr.sort((a, b) => a - b)[n - 1];

}
