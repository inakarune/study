function adder(a, b){
    var result = 0
    var num_a = a;
  	var num_b = b;
    //함수를 완성하세요
  	if (a < b){
    	while (num_a <= num_b){
				result += num_a
        num_a++
      }
    } else if (a > b){
      while (num_b <= num_a){
				result += num_b
        num_b++
      }
    } else {
     	result = a;
    }

    return result;
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( adder(3, 5) )
