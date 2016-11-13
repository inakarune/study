function intToEnglish(number){
let result = new Array(5).fill(0);
let big = ["quadrillion", "trillion", "billion", "million", 'thousand', ''];

if(number < 1000){
  return convert(number);
}
if(number > 999){
let arr = number + '';
    arr = arr.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,").split(',');
    console.log(arr)
let txt = '';
if(arr.length != 6){
let z = 1;
while(z < 6){
    if(arr.length == 6){
      break;
    }
    arr.unshift(0);
    z++
  }
}
  
  
  for(let i = 0; i < arr.length; i++){
    if(arr[i] != 0){
      txt += convert(+arr[i]) + ' ' + big[i] + ' ';
    }
  }
return txt.replace(/zero/g, '').trim();
}


}
  


function convert(numb){
let num = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(' ');
let nums = { 20: "twenty", 30: "thirty", 40: "forty", 50: "fifty", 60: "sixty", 70: "seventy", 80: "eighty", 90: "ninety" };
let str = '';
let n = Math.floor(numb / 10) * 10;
let a = nums[n] + ' ' + num[numb % 10] + '';

if(numb < 20){
  return num[numb];
} else if(numb == 20){
  return nums[20]
} else if(numb > 20 && numb < 100){
  return a;
} else if(numb >= 100 && numb < 1000){
    str += num[Math.floor(numb / 100)] + ' hundred ';
    numb = Math.floor(numb % 100)
  if(numb > 20 && numb < 100){
    str += nums[Math.floor(numb / 10) * 10] + ' ' + num[numb % 10] + '';
  } else {
    str += num[numb];
  }
  return str.replace('zero', '').trim();
}
}
