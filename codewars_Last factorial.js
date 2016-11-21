function factorial(n){
if(n == 1 || !n){
  return '1';
} else if(n < 5){
  for(let i = 1; i < n; i++){
    n *= i;
  }
  return n + '';
}

let arr = [];
let num = n;
 for(let i = 1; i < n; i++){
   arr.unshift(i.toString());
 }

num *= +arr.shift();

if(num > 9){
  num = num + '';
  num = num.split('').reverse();
}


let count = 0;
for(let i = 0; i < arr.length; i++){
  for(let k = 0; k < num.length; k++){

    if(arr[i].length > 1){
      num = multi(num, arr[i]);
      num = num.split('').reverse();
      break;
    }
    let item = (+num[k] * +arr[i]) + '';

    if(count != 0){
      item = +item + count + '';
      count = 0;
    }

    if(+item > 9 && k == num.length - 1){
    let l = item.slice(0, 1);
      num[k] = item.slice(1);
      num.push(l)

      break;
    } else if(+item > 9){
      count = +item.slice(0, 1);

      num[k] = item.slice(1);
    } else if(item <= 9){
      num[k] = item;
    } 
    
  }
}
  return num.reverse().join('');
}

function multi(arr, num){
num = num.split('').reverse();
  let ars = [];
  let ch = '';
  let count = 0;
  for(let i = 0; i < num.length; i++){

    let save = [];
      for(let j = 0; j < arr.length; j++){
        let nnn = (+arr[j] * +num[i]) + '';
        if(count != 0){
          nnn = +nnn + count;
          nnn += '';
          count = 0;
            if(nnn > 9 && j == arr.length - 1){
              count = +nnn.slice(0, 1);
              nnn = nnn.slice(1);
              save.push(nnn);
              save.push(count + '');
              count = 0;
            } else if(nnn > 9){
              count = +nnn.slice(0, 1);
              nnn = nnn.slice(1);
              save.push(nnn)
            } else {
              save.push(nnn)
            }
          
        } else if(nnn > 9 && j == arr.length - 1){
          count = +nnn.slice(0, 1);
          nnn = nnn.slice(1);
          save.push(nnn);
          save.push(count + '');
          count = 0;
        } else if(nnn > 9){
          count = +nnn.slice(0, 1);
          nnn = nnn.slice(1);
          save.push(nnn)
        } else if(nnn <= 9){
          save.push(nnn)
        }
        
      }
      if(i == 1){
          save.unshift('0')
        } else if(i == 2){
          save.unshift('00')
        }
      ars.push(save.reverse().join(''));

  }
  
  return sum(...ars);
}

 function sum() {

let arr = [...arguments];
let count = 0;

for(let i = 0; i < arr.length; i++){
  if(count < arr[i].length){
    count = arr[i].length;
  }
}

let arr_new = new Array(count).fill(0);

for(let i = 0; i < arr.length; i++){
  arr[i] = arr[i].split('').reverse().join('').split('');
}

for (let b of arr){
  for(let i = 0; i < arr_new.length; i++){
    if(b[i] == undefined){
      break;
    } else {
      arr_new[i] += +b[i];
    }
    
  }
}

for(let i = 0; i < arr_new.length; i++){

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
