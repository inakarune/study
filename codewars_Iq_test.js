function iqTest(numbers){
  var arr = numbers.split(' ');
      arr.unshift(' ');
      arr.join('')
  var even = numbers.split(' ').filter((v) => Number(v) % 2 === 0);
  var odd = numbers.split(' ').filter((v) => Number(v) % 2 !== 0);
  
  return even.length > odd.length ? arr.indexOf(odd[0]) : arr.indexOf(even[0]);
}
