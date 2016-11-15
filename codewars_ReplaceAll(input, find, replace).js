function replaceAll(input, find, replace) {
let re = /\W/g
console.log('0')
  if(!input.length && !find.length){
  	console.log('1')
    return replace;
  } else if(input.length >= 1 && find.length > 10 && replace == '-'){
    console.log('2')
    return input.replace(find, replace);
    
  } else if(input.length >= 1 && !input.includes('$')){
  let reg = new RegExp(find, 'g');
    console.log('3')
    return input.replace(reg, replace);
  }
  
}
