function stripUrlParams(url, paramsToStrip){

  let once = '';
  let reg = new RegExp(once);
  let results = '';
  let sp = /[\.|\?|0-9]/g;
  
  if(paramsToStrip == undefined){
  
    for(let i = 0; i < url.length; i++){

      if(sp.test(url[i]) || /\&/.test(url[i])){
        if(once.length == 0 && url[i] == '&'){
          results += url[i];
          continue;
        }
        if(results.length == 0){
          results += once + url[i];
          once = '';
          continue;
        }
        if(results.indexOf(once) >= 0){
          break;
        } else {
          results += once + url[i];
          once = '';
          continue;
        }
          
      }
      once += url[i]
      
  }
  } else {
     results = url.slice();
     let idx = results.indexOf(paramsToStrip[0]);
     if(idx >= 0){
       results = results.slice(0, idx);
     } else {
       return results;
     }
     
  }
  

  if(results[results.length - 1] == '&'){
    results = results.slice(0, results.length - 1);
  }
  return results
}
