function uniq(a) {
  for(let i = 0; i < a.length; i++){
   if(a[i] == a[i + 1] && a[i + 1] != undefined){
      a.splice(i + 1, 1);
      i = -1;
    }
  }
  return a;
}
