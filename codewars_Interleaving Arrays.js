function interleave() {

let arrs = [...arguments]; console.log(arrs)
let first = arrs[0] != null ? arrs[0].slice() : [];
let z = 0;
let arr = [];
while(z < first.length){
  for(let i = 0; i < arrs.length; i++){
    arr.push(arrs[i][z]);
  }
  z++
}
  return arr;
}
