function fibonacci(num) {
	var answer = 0;
  var num1 = 0;
  var num2 = 1;
  var num3 = 0;

  	for (var i = 0; i <= num; i++){
				if (i === 0){
          num1 = 0;
        } else if (i === 1){
          num2 = 1;
        } else {
          num3 = num1 + num2;
          num1 = num2;
          num2 = num3;
          answer = num3;
    }
    }

	return answer;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(fibonacci(3))
