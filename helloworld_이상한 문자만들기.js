function toWeirdCase(s){
 var result = ""
	var arr = s.split(' ');

  for (var i = 0; i < arr.length; i++){
   	for (var j = 0; j <= arr[i].length; j++){
      	if (i === arr.length - 1 && j === arr[i].length){
          result += '';
        } else if (j === arr[i].length){
					result += ' ';
        } else if (j % 2 === 0){
         result += arr[i][j].toUpperCase()
        } else {
      	 result += arr[i][j].toLowerCase()
        }
    }
  }

  return result;
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + toWeirdCase("try hello world"));
