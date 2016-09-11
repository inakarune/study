var moveZeros = function (arr) {

  var zero = arr.filter((v) => v === 0);
  var a = arr.filter(function(v){ return v !== 0;  } );
  for (var i = 0; i < a.length; i++){
    if (Array.isArray(a[i])){
      a[i] = [[]];
    }
  }
  a.push(zero);
  console.log(a);
  
  return a.reduce((a, b) => a.concat(b), []);
  
}
