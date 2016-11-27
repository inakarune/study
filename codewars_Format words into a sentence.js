function formatWords(words){
if(words === null){
  return '';
}
  let arrs = words.filter(v => v !== '');
  let str = '';
  
  if(arrs.length == 1){
    return arrs + '';
  } else if(arrs.length == 2){
    return arrs.join(' and ');
  } else if(arrs.length > 3){
    for(let i = 0; i < arrs.length; i++){
      if(i == arrs.length - 2){
        str += arrs[arrs.length - 2] + ' and ' + arrs[arrs.length - 1];
        break;
      } else {
        str += arrs[i] + ', ';
      }
    }
  }
  return str;
}
