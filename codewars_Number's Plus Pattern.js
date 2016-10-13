function pattern(n){
var output = "";
var str = '';
var arr = new Array(n).fill('');
var count = 1;

while(count < n){
  for(var i = 0; i < n - 1; i++){
    arr[i] += ' ';
  }
  count++;
}


for(var i = 0; i < n; i++){

  if(i == n - 1){
    if(i >= 9){
      i = i + 1;
      i += '';
      arr[i] = str + i[1];    
      break;
    } else {
      arr[i] = str + (i + 1);
      break;  
    }
  
  } else if(i >= 9){
    var num = (i + 1) + '';
    str += num[1];
    arr[i] += num[1];
  } else {
    str += i + 1;
    arr[i] += i + 1;
  }
  
  arr[i] += '\n';
}

arr[arr.length - 1] += str.split('').reverse().join('') + '\n';
var re = arr.slice(0, arr.length - 1).reverse()
re[0] = re[0].replace(' ', ' ');

return arr.join('') + re.join('')
}
