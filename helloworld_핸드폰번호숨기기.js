
      function hide_numbers (s){

        var result = '';
        for (count = 0; count < s.length - 4; count++){

          result = result + '*';
        }
        var lastNumber = s[s.length - 4] + s[s.length-3] + s[s.length-2] + s[s.length - 1]
        result = result + lastNumber;
        return result;
      }


      console.log('결과 : ' + hide_numbers('0323284754'));
