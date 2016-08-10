function gcdlcm(a, b) {
    var answer = [];
  	var numA = Math.max(a, b)
  	var numB = Math.min(a, b)
  	var num3 = 1


  	while (num3 > 0){
      num3 = numA % numB;
      numA = numB;
      numB = num3;
    }
		answer.push(numA)  ;
  	answer.push(a * b / numA)



    return answer;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(gcdlcm(3,12));
