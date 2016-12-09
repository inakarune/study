var justify = function(str, len) {
if(len == undefined){
  return len;
}

  let arr = [];
  let txt = str.split(' ');
  let part = [];
  let count = 0;
  let pop = '';
  
  for(let i = 0; i < txt.length; i++){
    let l = txt[i].length;
    if(part[0] == ' '){
      part.shift();
      count -= 1
    }
    
    if(count < len){
      count += l;
      part.push(txt[i]);
      
        if(count > len){
          pop = part.pop();
          arr.push(part);
          part = [];
          part.push(pop);
          count = pop.length;
          pop = '';
        } 
        
      if(count == len){
        arr.push(part);
        part = [];
        count = 0;
      }
        part.push(' ');
        count += 1;
    } else if(count == len){
        arr.push(part);
        part = [];
        count = 0;
        part.push(txt[i]);
        count = l;
        part.push(' ');
      	count += 1;
      }   
  }
  
  for(let i = 0; i < arr.length; i++){
    if(arr[i][arr[i].length - 1] === ' '){
      arr[i].pop();
    }
  }
  
  let reg = /\s/;
  for(let i = 0; i < arr.length; i++){
    let item = arr[i];
    if(item.join('').length != len){
      for(let j = 0; j < item.length; j++){
            if(item.join('').length !== len){
              if(item[j].search(reg) > -1){
                item[j] += ' ';
              } else if(j == item.length - 1){
                j = 0;
              }  
            }
      }
      
    }
  }
  arr = arr.map(v => v.join(''));
  arr = arr.join('\n');
  arr += '\n' + part.join('');
  
  return arr.trim();
};
