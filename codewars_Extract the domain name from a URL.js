function domainName(url){
  var pat = /(https?:\/\/)?(www)?(\.)?(\w+-?\w+-?\w+)\.?\/?/g;
  var a = pat.exec(url);
  
  return a.pop();
}
