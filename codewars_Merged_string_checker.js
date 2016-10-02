function isMerge(s, part1, part2) {

if(s.length == 0 && part1.length == 0 && part2.length == 0){
  return true;
} 

var p3 = '';
var p4 = '';

for(var i = 0; i < s.length; i++){
  if(s[i] == part1[i]){
  p3 += s[i];
  } else {
    break;
  }
}

for(var i = 0; i < s.length; i++){
  if(s[i] == part2[i]){
  p4 += s[i];
  } else {
    break;
  }
}
  s = s.replace(p4, '');
  part2 = part2.replace(p4, '');
  
  s = s.replace(p3, '');
  part1 = part1.replace(p3, '');

if(p3 === p4){
  return false;
} 

var p1 = part1.split('');
var p2 = part2.split('');

if(s.length > p1.length + p2.length){
  return false;
}

for (var i = 0; i < s.length; i++){
  if(p2.indexOf(s[i]) == 0){
    p2.shift();
  } else if(p1.indexOf(s[i]) == 0){
    p1.shift();
  } 
  
}

 if(p1.length == 0 && p2.length == 0){
    return true;
  } else if (p1.length !== 0 || p2.length !== 0){
    return false;
  } 
  
}
