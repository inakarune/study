
      var arr3 = [1, 2, 3];
      var fff = function (num){
        return num * 3;
      }

      console.log(map(arr3, fff));

      function map (arr, func){
        for (var i = 0; i < arr.length; i++){
          arr[i] = func(arr[i]);
        }
        return arr
      }
