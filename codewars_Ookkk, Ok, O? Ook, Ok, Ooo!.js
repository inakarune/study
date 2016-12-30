function okkOokOo(s){
  let str = s.replace('!', '').split('? ');
  let txt = '';
  let l = str.length;
  
  for(let i = 0; i < l; ++i){
    txt += convert(str[i]);
  }
  return txt;
  
  function convert(str){
    
    str = str.replace(/, /g, '').toLowerCase().replace(/[ok]/g, function(v){
    if(v == 'o'){
      return '0';
    } else if(v == 'k'){
      return '1';
    }
  })
    let num = parseInt(str, 2);
    return String.fromCharCode(num);
  }
  
