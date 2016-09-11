function solution(str){
var pat = /[a-z]{2}/g;
var arr = str.match(pat);

if (str.length % 2 !== 0){
  arr.push(str[str.length - 1] + '_');
}
return arr;
   console.log(str)
   
}
