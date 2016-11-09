function gap(g, m, n) {
  //console.log(g,m,n);
//   let arr = [];
//   for(let i = m; i <= n; i++){
//     if(isPrime(i)){
//       arr.push(i);
//     }
//   }
// //let result = [];

//   for(let j = 0; j < arr.length - 1; j++){
//     if( arr[j] + g == arr[j+1] )
//       return [ arr[j], arr[j+1] ];
//   }
  var last = 0;
  for( var i = m; i <= n; i++ ) {
    if( isPrime(i) ) {
      if( i - last == g )
        return [last,i];
      else
        last = i;
    }
      
  }
  
  
  return null;
//   console.log(arr);
//   return !result.length ? null : result;
}

function isPrime(num){
//     if (num <= 1){
//        return false;
//     } 
    for (var j = 2; j*j <= num; j++){
      if (num % j === 0){
        return false;
      }
    }
    return true;
}
