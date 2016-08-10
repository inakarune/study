
    function nextSqaure(n){

//함수를 완성하세요
var sqt = Math.sqrt(n)
  for (var i = 0; i <= sqt; i++){
   var pow = Math.pow(i, 2);
     var result = 0;
   if (pow === n){
     result = 0;
     pow = Math.pow(i + 1, 2);
     result += pow;
   } else {
        result = '';
     result = 'no'
   }
 }
return result;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + nextSqaure(121));
