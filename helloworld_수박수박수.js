function waterMelon(n){
  var result = ""
  for (var i = 1; i <= n ; i++){
			if (i % 2 === 1){
					result += '수'
      } else {
					result += '박'
      }
  }

  return result;
}

// 실행을 위한 테스트코드입니다.
console.log("n이 3인 경우: "+ waterMelon(3))
console.log("n이 4인 경우: "+ waterMelon(4))
