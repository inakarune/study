function parse( data ){    
  let str = data.replace(/[^idso]/g, '');
  let num = 0;
  let arrs = [];
  for(let i = 0; i < str.length; i++){
    if(str[i] == 'i'){
      num++
    } else if(str[i] == 'd'){
      num--
    } else if(str[i] == 's'){
      num = num * num;
    } else if(str[i] == 'o'){
      arrs.push(num);
    }
  }
  return arrs;
}
