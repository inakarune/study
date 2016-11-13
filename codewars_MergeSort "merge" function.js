function mergesorted(a, b) {
let arr = a.concat(b);
  
    var j = 0;
    var count = 0;
    while (count <= arr.length){
      for (var i = 0; i < arr.length; i++){
          if (arr[i] > arr[i + 1]){
            j = arr[i + 1];
            arr[i + 1] = arr[i];
            arr[i] = j;
            
          }
      }
      count++
    }
    return arr;
}
