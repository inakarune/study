function iqTest(numbers){
  let arr = numbers.split(' ');
      arr.unshift(' ');
      arr.join('')
  let even = numbers.split(' ').filter((v) => Number(v) % 2 === 0);
  let odd = numbers.split(' ').filter((v) => Number(v) % 2 !== 0);
  
  return even.length > odd.length ? arr.indexOf(odd[0]) : arr.indexOf(even[0]);
}
