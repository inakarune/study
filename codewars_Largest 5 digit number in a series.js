function solution(digits){
  console.log(digits)
  digits += '';
  var arr = digits.match(/[0-9]{5}/g);
  if (Math.max(...arr) < digits.match(/.....\b/g)[0]){
    return Number(digits.match(/.....\b/g)[0]);
  }
  return Math.max(...arr);
}
