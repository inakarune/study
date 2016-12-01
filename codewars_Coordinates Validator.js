function isValidCoordinates(coordinates){
let arrs = coordinates.split(', ');
  if(coordinates.search(/[A-z]/g) > -1){
    return false;
  } else if(coordinates.search(/- /g) > -1){
    return false;
  } else if(coordinates.indexOf(',') != coordinates.lastIndexOf(',')){
    return false;
  }
  arrs = arrs.map(Number);
  
  if(arrs[0] >= -90 && arrs[0] <= 90){
    if(arrs[1] >= -180 && arrs[1] <= 180){
      return true;
    }
  }                                         
  return false; 
}
