function validBraces(braces){
  let count = 0;
  
  for(let i = 0; i < braces.length; i++){
    if(braces[i] == '0'){
      continue;
    }
    if(braces[i] == ")" || braces[i] == "]" || braces[i] == "}"){
      return false;
    }
    if(braces[i] == '('){
      if(braces.indexOf(')') >= 0){
        if((braces.indexOf(')') - i) % 2){
          braces = braces.replace('(', '00').replace(')', '00');
          
        } 
      }
    }
    
    if(braces[i] == '{'){
      if(braces.indexOf('}') >= 0){
        if((braces.indexOf('}') - i) % 2){
          braces = braces.replace('{', '00').replace('}', '00');
          
        }
      }
    }
    
    if(braces[i] == '['){
      if(braces.indexOf(']') >= 0){
        if((braces.indexOf(']') - i) % 2){
          braces = braces.replace('[', '00').replace(']', '00');
          
        }
      }
    }
    
  }
  
  return braces.split('').every(v => v == '0') ? true : false;
  
}
