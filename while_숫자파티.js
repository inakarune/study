    var i = 1, n = 5;
    var str = '';
    var j = 1;

    while ( i <= n ) {
    j = 1;
    str = 'welcome ' + i;
      while ( j < i ) {

        if (j === 1){
          str = str + ' meet ' + j
        } else if (j === i - 1){
          str = str + ' and ' + j
        } else {
          str = str + ', ' + j
        }
      j++
      }
      console.log(str)
    i++
    }
