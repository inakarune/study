var wordWrap = function (str) {
  let txt = '';
  for(let i = 0; i < str.length; i++){
    if(i == 0){
      txt += str[i];
      continue;
    }
    if(i % 24 == 0 && str[i + 1] == ' '){
      txt += str[i] + '\n';
      continue;
    }
    
    if(i % 24 == 0 && str[i + 1] != ' '){
      txt += '-\n' + str[i];
    } else {
      txt += str[i];
    }
  }

  return txt;
};
