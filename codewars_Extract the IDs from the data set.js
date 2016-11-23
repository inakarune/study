function extractIds(data){
  let arr = [];
  
  for(let key in data){
    if(typeof data[key] === 'number'){       
      arr = arr.concat(data[key]);
    } 
      for(let i = 0; i < data[key].length; i++){
        let item = data[key];
        if(!Array.isArray(item[i]) && typeof item[i] === 'object'){
         arr = arr.concat(extractIds(item[i]));
        }
      }
     
  }
  return arr;
}
