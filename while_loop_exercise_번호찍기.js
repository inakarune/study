      var n;
      var ask_integer = prompt('번호를 맞춰주세요!?');

        if (ask_integer !== NaN){

          parseInt(ask_integer);
          n = Math.ceil(Math.random() * 10);
          var fail_count = 0
          
          while (fail_count <= 20){

                if (ask_integer < n){
                  alert('n보다 작아요.')
                  var ask_integer = prompt('번호를 맞춰주세요!?');

                } else if (ask_integer > n){
                  alert('n보다 커요.')
                  var ask_integer = prompt('번호를 맞춰주세요!?');
                } else {
                  alert('정답' + n);
                  document.querySelector('#story').innerHTML = '상으로 텍스트를 내리겟노라.';
                  document.querySelector('#count').textContent = '실패 횟수 : ' + fail_count + '번입니다.';
                  break;
                }
                fail_count++

          }
            } else {
              alert('다시 입력해주세요!')
            }
