function trickOrTreat(children,candies){
let trick = 'Trick or treat!';
let thx = 'Thank you, strange uncle!'
let count = 0;
  if(candies.length != children){
    return trick;
  }
  if(!candies.every(v => {
    return v.filter(v => v == 'candy').length >= 2
  })){
    return trick;
  }
  for(let i = 0; i < candies.length; i++){
    let filter = candies[i].filter(v => v == 'candy');
    if(candies[i].some(v => v == 'bomb')){
      return trick;
    }
    if(count == 0){
      count = filter.length;
    } else {
      if(count != filter.length){
        return trick;
      }
    }
    
  }
  
  return thx;
}
