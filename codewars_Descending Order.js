function descendingOrder(n){
  //...
  var num = n;
  num += '';
  var arr = num.split('');
  arr = arr.sort(function (a, b){
    return b - a
    });
  arr = arr.join('')

  return Number(arr)



}
