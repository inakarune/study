function mix(s1, s2) {
  let one = s1.replace(/[^a-z]/g, '').split('').sort();
  let two = s2.replace(/[^a-z]/g, '').split('').sort();
  let obj1 = {};
  let obj2 = {};
 
 for(let i = 0; i < one.length; i++){
   if(!obj1.hasOwnProperty([one[i]])){
     obj1[one[i]] = 1;
   } else {
     obj1[one[i]] += 1;
   }
 }
 
 for(let j = 0; j < two.length; j++){
   if(!obj2.hasOwnProperty([two[j]])){
     obj2[two[j]] = 1;
   } else {
     obj2[two[j]] += 1;
   }
 }
 
  let arr1 = [];
  let arr2 = [];
  let same = [];
  for(let k in obj1){
    if(obj2.hasOwnProperty(k)){
      if(obj1[k] > obj2[k]){
        arr1.push("1:" + k.repeat(obj1[k]));
      } else if(obj1[k] < obj2[k]){
        arr2.push("2:" + k.repeat(obj2[k]));
      } else if(obj1[k] == obj2[k] && obj1[k] > 1){
        same.push("=:" + k.repeat(obj1[k]));
      }
    } else if(obj1[k] > 1){
      arr1.push('1:' + k.repeat(obj1[k]))
    }
  }
  
  for(let k in obj2){
    if(!obj1.hasOwnProperty(k) && obj2[k] > 1){
      arr2.push('2:' + k.repeat(obj2[k]));
    } 
  }
  arr1 = arr1.sort()
  arr2 = arr2.sort()
  same = same.sort()
   let result = [];
  for(let z = 7; z >= 4; z--){
    let af = arr1.filter(v => v.length == z)
    let bf = arr2.filter(v => v.length == z)
    let cf = same.filter(v => v.length == z)
    if(af.length != 0){
      result.push(...af);
    } 
    if(bf.length != 0){
      result.push(...bf)
    } 
    if(cf.length != 0){
      result.push(...cf);
    }
  }
  
  return result.join('/');
}
