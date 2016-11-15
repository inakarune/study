splitMessage = function(message, count){

if (count > 0 && arguments[0] === null){
  return Array(count).fill('');
}

if(count <= 0){
  return null;
}


if (Array.isArray(message)){
  return message.toString();
}
var arr = [];
for (var i = 0; i < count; i++){
var m = message.split('');
    for (var j = 0; j < m.length; j++){
        if(j % count === i){
          continue;
        } else {
          m[j] = '-'
        }
    
    } 
    arr.push(m.join(''));
    
}
  return arr;
}
