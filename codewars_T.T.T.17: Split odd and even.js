function splitOddAndEven(n) {
let arr = String(n).split('');
let odd = [];
  for (let i = 0; i < arr.length; i++){
    if (arr[i + 1] === undefined){
      break;
    } else {
      if (Number(arr[i]) % 2 === 0 && Number(arr[i + 1]) % 2 === 0){
        arr[i] += arr[i + 1];
        arr.splice(i + 1, 1);
        i--;
      } else if (Number(arr[i]) % 2 !== 0 && Number(arr[i + 1]) % 2 !== 0){
        arr[i] += arr[i + 1];
        arr.splice(i + 1, 1);
        i--;
      }
    }
    
  }
  
  return arr.map(Number);
}
