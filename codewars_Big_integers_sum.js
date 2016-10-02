function sum() {

if (arguments.length <= 1){
  return '0';
}

var arr = [...arguments].map(v => v += '');
var count = 0;

for(var i = 0; i < arr.length; i++){
  if(count < arr[i].length){
    count = arr[i].length;
  }
}

var arr_new = new Array(count).fill(0);

for(var i = 0; i < arr.length; i++){
  arr[i] = arr[i].split('').reverse().join('').split('');
}

for (let b of arr){
  for(var i = 0; i < arr_new.length; i++){
    if(b[i] == undefined){
      break;
    } else {
      arr_new[i] += +b[i];
    }
    
  }
}

for(var i = 0; i < arr_new.length; i++){

  if(arr_new[i] >= 10 && arr_new[i] < 20){
    if(arr_new[i + 1] == undefined){
      arr_new[i + 1] = 0;
      arr_new[i + 1] += 1;
      arr_new[i] -= 10
    } else {
      arr_new[i + 1] += 1;
      arr_new[i] -= 10
    }
    
  } else if(arr_new[i] >= 20){
    if(arr_new[i + 1] == undefined){
      arr_new[i + 1] = 0;
      arr_new[i + 1] += 2;
      arr_new[i] -= 20
    } else {
      arr_new[i + 1] += 2;
      arr_new[i] -= 20
    }
  }
}

arr_new = arr_new.map(v => v += '').reverse().join('');
arr_new = arr_new.replace(/\b0{1,}/g, '');

return arr_new;
}
