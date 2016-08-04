function sumDivisor(num) {
	var answer = 0;
  var arr = [];

  	for (var i = 1; i <= num; i++){
			if (num % i === 0){
        arr.push(i);
      }
    }
  	for (var j = 0; j < arr.length; j++){
			answer += arr[j];

    }


	return answer;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(sumDivisor(12));
