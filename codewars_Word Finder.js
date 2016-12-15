function Dictionary(words) {
  this.words = words;
}

Dictionary.prototype.getMatchingWords = function(pattern) {
  if(pattern.includes('?')){
    pattern = pattern.replace(/\?/g, '.');
  }
  let pat = pattern;
  let reg = new RegExp(pat, 'g');
  let arr = [];
  
  for(let i = 0; i < this.words.length; i++){
    let item = this.words[i];
    if(pat.length == item.length){
      if(!item.replace(reg, '').length){
        arr.push(item)
      }
    }
  }
  return arr;
}
