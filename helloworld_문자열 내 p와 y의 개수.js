function numPY(s){
  var result = true;
  var p_count = 0;
  var y_count = 0;

  	for (var i = 0; i < s.length; i++){
				if (s[i].toLowerCase() === 'p'){
						p_count += 1;
        } else if (s[i].toLowerCase() === 'y'){
          y_count += 1;
        }
    }

  if (p_count === y_count){
    result = true;
  } else if (p_count !== y_count){
		result = false;
  } else {
    result = true;
  }
  return result;
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( numPY("pPoooyY") )
console.log( numPY("Pyy") )
