function testit(s){
  var str = '';
  s = s.split('');
  var a = s.splice(0, 4);
  
  if(a.length <= 2){
    return '';
  } else if(a.length == 3){
    return a[a.length - 1];
  } else if(a.length == 4){
    str += a[a.length - 2] + a[a.length - 1];
  }
  while(true){
      var c = s.splice(0, 6);
      str += c[1] + c[3];
      if(c.length == 0){
        break;
      }
  
  }
  str = str.replace(/NaN|undefined/g, '');
  return str.length == 0 ? '' : str;
  
}
