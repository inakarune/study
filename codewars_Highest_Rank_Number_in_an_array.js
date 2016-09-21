function highestRank(arr){
  let count = 0;
  let obj = {};
  let array = [];
  
  for (var i = 0; i < arr.length; i++){
    let l = arr.filter(v => v == arr[i]).length;
    obj[arr[i]] = l
    if (l > count){
      count = l;
    }
  }

  for (let i in obj){
    if (obj[i] == count){
      array.push(Number(i));
    }
  }
  return Math.max(...array);

}
