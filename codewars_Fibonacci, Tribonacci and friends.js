function Xbonacci(signature,n){

let arr = [];
  for(let i = 0; i < signature.length; i++){
    if(i == 0){
      arr.push(signature.slice(i).reduce((a, b) => a + b));
    } else {
      let push = signature.slice(i).reduce((a, b) => a + b) + arr.slice(-signature.length).reduce((a, b) => a + b);
      arr.push(push);
    }
    
  }
  let sss = signature.concat(...arr);
  let l = sss.length;
 if(l > n){
    return sss.slice(0, n);
  } else if(l < n){
    for(let j = l; j < n; j++){
      sss[j] = sss.slice(-signature.length).reduce((a, b) => a + b)
    }
  }
  
  return sss;
  
}
