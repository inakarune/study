function tickets(peopleInLine){

  var arr = [];
  for (var i = 0; i < peopleInLine.length; i++){
  
    if (i === 0){
      arr.push(peopleInLine[i]);
      continue;
    } 
    
    if (peopleInLine[i] === 25){
      arr.push(peopleInLine[i]);
    } else if (peopleInLine[i] === 50){
        if (arr.indexOf(25) === -1){
          return 'NO';
        } else {
          arr.push(peopleInLine[i])
          
          arr.splice(arr.indexOf(25), 1);
          
        }
        
    } else if (peopleInLine[i] === 100){
        if (arr.filter((v) => v === 25).length >= 3){
            arr.push(peopleInLine[i]);
            arr = arr.sort().splice(0, 3);
        } else if (arr.filter((v) => v === 50).length >= 1 && arr.filter((v) => v === 25).length >= 1){
          
            arr.push(peopleInLine[i]);
            arr.splice(arr.indexOf(50), 1);
            arr.splice(arr.indexOf(25), 1);
         
        } else {
            return 'NO';
        }   
    } 
    console.log(arr)
  }
  
  return 'YES'
}
