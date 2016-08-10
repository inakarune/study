
    nextBigNumber(210412)
    function nextBigNumber(n){
    	var answer = 0;
    	var o_num = n + 1;
      var str = '';
      var pattern = /[^1]/g;

      while (o_num <= n + 1000000){
      	str = twoChange(o_num)
        if (str.replace(pattern, '') === twoChange(n).replace(pattern, '')){
        	answer = parseInt(o_num);
          break;
        }
      	o_num++
      }

      function twoChange(num){
      var arr = [];
      var push = 0;
      var result = ''

      while (num >= 1){ //십진법에서 이진법으로 변환

        push = num % 2
        arr.push(push);
        num = Math.floor(num / 2)
      }

      result = arr.reverse().join('')
      return result
    }
    	return document.write(answer);
    }
