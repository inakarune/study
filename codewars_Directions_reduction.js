function dirReduc(dir){
var arr = dir.slice();
for (var i = 0; i < arr.length; i++){

  if (arr[i] == 'NORTH' && arr[i + 1] == 'SOUTH'){
    
      arr.splice(i + 1, 1);
      arr.splice(i, 1, 0);
    
  } else if (arr[i] == 'SOUTH' && arr[i + 1] == 'NORTH'){

      arr.splice(i + 1, 1);
      arr.splice(i, 1, 0);
  
  } else if (arr[i] == 'WEST' && arr[i + 1] == 'EAST'){

      arr.splice(i + 1, 1);
      arr.splice(i, 1, 0);

  } else if (arr[i] == 'EAST' && arr[i + 1] == 'WEST'){

      arr.splice(i + 1, 1);
      arr.splice(i, 1, 0);
    
  }
}

arr = arr.filter(v => v != 0);




for (var i = 0; i < arr.length; i++){
  if (arr[i] == 'NORTH' && arr[i + 1] == 'SOUTH'){
    
      arr.splice(i + 1, 1);
      arr.splice(i, 1, 0);
    
  } else if (arr[i] == 'SOUTH' && arr[i + 1] == 'NORTH'){

      arr.splice(i + 1, 1);
      arr.splice(i, 1, 0);
  
  } else if (arr[i] == 'WEST' && arr[i + 1] == 'EAST'){

      arr.splice(i + 1, 1);
      arr.splice(i, 1, 0);

  } else if (arr[i] == 'EAST' && arr[i + 1] == 'WEST'){

      arr.splice(i + 1, 1);
      arr.splice(i, 1, 0);
    
  }
}

arr = arr.filter(v => v != 0);

  if (arr.length === 0){
    if (dir.length == 4){
      return dir;
    } else {
      return arr;
    }
    
  } else {
    return arr;
  }
    
}
