function one(value, idx){
  return value.split('').map((v, i) => {if(i == 0){
    return v = v.toUpperCase();
  } else {
    return v = v;
  }}).join('');
  
}

function titleCase(title, minorWords) {
if(title.length == 0){
  return title;
}

if(minorWords === undefined){
  var t = title.toLowerCase().split(' ');
  var arr = [];

  title = title.toLowerCase().split(' ').map(one);

  return title.join(' ');
} else {
  var m = minorWords.toLowerCase().split(' ');
  var t = title.toLowerCase().split(' ');
  var arr = [];

  for(var i = 0; i < m.length; i++){
    var idx = t.lastIndexOf(m[i]);
    arr.push(idx);
  }

  minorWords = minorWords.split(' ');
  title = title.toLowerCase().split(' ').map(one);

  for(var i = 0; i < arr.length; i++){
    if(arr[i] !== -1){
      if(arr[i] == 0){
      continue;
      }
      title[arr[i]] = m[i];
    }
  }
return title.join(' ');
}

}
