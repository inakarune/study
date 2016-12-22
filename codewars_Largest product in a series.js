function greatestProduct(digits) {
  digits += '';
  let arr = digits.match(/[0-9]{5}/g);
  let nums = arr.map(v => v.split('').map(Number).reduce((a, b) => a + b, 0));
  let last = digits.match(/.....\b/g);
  let end = last.map(v => v.split('').map(Number).reduce((a, b) => a + b, 0));
  let max = Math.max(...nums);
  
  if (max < end[0]){
    return last[0].split('').map(Number).reduce((a, b) => a * b, 1);
  } else if(max === end[0] && last[0].includes('0')){
    arr.pop();
    let count = 0;
    let str = '';
    for(let i = 1; i < 5; ++i){
      last = digits.slice(i).match(/[0-9]{5}/g);
      end = last.map(v => v.split('').map(Number).reduce((a, b) => a + b, 0));
      max = Math.max(...end);
      let zero = end.indexOf(max);
      if(count < max && !last[zero].includes('0')){
        count = max;
        let idx = end.indexOf(count);
        str = last[idx];
      } 
       
    }
    return str.split('').map(Number).reduce((a, b) => a * b, 1);
  }

}
