function Harshad(n){
  var result ;
  var answer = 0;
  //함수를 완성하세요
  		n = n + '';

 	for (var i = 0; i < n.length; i++){
    answer += Number(n[i]);
    console.log(answer)
  }
  console.log(Number(n) / answer)
  	if (Number(n) % answer === 0) {
		result = true;
    } else {
     result = false;
    }

  return result;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(Harshad(63))
