function pigIt(str){
  str = str.split(' ').map(function(v){
    var pat = /\b\w/g;
    var box = v.match(pat);
    v = v.replace(pat, '');
    
    return v += box + 'ay';
  })
  return str.join(' ');
}
