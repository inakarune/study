    function collatz(num) {
        var answer = 0;
        //500이상일 때 -1이 반환되지 않는다.

        for (var i = 0; i <= 500; i++){
          if (i === 500){
            answer = -1;
          }else if (num > 1){

          if (num % 2 === 0){
            num = num / 2
          } else if (num % 2 === 1){
            num = num * 3 + 1
          }

         } else if (num === 1){
           answer = i
           break;
         }
        }

        return answer;
        }

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( collatz(1117065) );
