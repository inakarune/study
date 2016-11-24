Array.prototype.sameStructureAs = function (other) {

let arr = this.slice();
if(!Array.isArray(other)){
  return false;
} else if(!arr.some(v => Array.isArray(v))){
  if(arr.length != other.length){
    return false;
  }
  let sort = other.sort();
  for(let i = 0; i < arr.length; i++){
    if(typeof sort[i] != typeof arr[i]){
      return false;
    }
  }
  return true;
}
for(let i = 0; i < arr.length; i++){
      let arrtype = typeof arr[i];
      let othertype = typeof other[i];
      if(arrtype !== othertype){
        
        return false;
      } else if(arrtype === othertype && Array.isArray(arr[i])){
        return arr.slice(i).reduce((a, b) => a.concat(b), []).sameStructureAs(other[i]);
      }
    }
    
    return true;
};
