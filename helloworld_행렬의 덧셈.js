function sumMatrix(A,B){
	var answer = new Array();


		for (var i = 0; i < A.length; i++){
      answer[i] = []
      for (var j = 0; j < A[i].length; j++){

       answer[i].push(A[i][j] + B[i][j]);


      }
      }

	return answer;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(sumMatrix([[1,2], [2,3]], [[3,4],[5,6]])) 
