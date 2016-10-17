function number2words(n){
var str = '';
let obj = {0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen', 20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety'}
  n += '';
if(n.length < 6){
  n = n.split('');
  for(let i = 0; i < 6; i++){
    if(n.length == 6){
      break;
    }
    n.unshift('0');
  }
  n = n.join('');
}
n += '';

if(n[0] == '0' && n[1] == '0' && n[2] == '0' && n[3] == '0' && n[4] == '0' && n[5] == '0'){
  return 'zero';
}

if(n[0] !== '0'){
  str += obj[n[0]] + ' hundred ';
}

if(n[1] !== '0'){
  if(n[2] !== '0'){
    if(+(n[1] + n[2]) < 20){
      str += obj[n[1] + n[2]]
    } else {
    str += obj[n[1] + '0'] + '-' + obj[n[2]];
    }
  } else {
    str += obj[n[1] + n[2]];
  }
}

if(n[1] == '0' && n[2] !== '0'){
  str += obj[n[2]];
}

if(n.slice(0, 3).replace(/0/g, '').length >= 1){
  str += ' thousand ';
}

if(n[3] !== '0'){
  if(n[4] == '0' && n[5] == '0'){
    str += obj[n[3]] + ' hundred'
    return str;
  } else {
    str += obj[n[3]] + ' hundred '
  }
}

if(n[4] !== '0'){
  if(n[5] !== '0'){
    if(+(n[4] + n[5]) < 20){
      str += obj[n[4] + n[5]];
      return str;
    } else {
      str += obj[n[4] + '0'] + '-' + obj[n[5]];
      return str;
    }
  } else {
    return str += obj[n[4] + n[5]];
  }
}

if(n[5] !== '0'){
  return str += obj[n[5]];
}

return str.trim();
}
