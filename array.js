
      var array_of_functions = [ function (){
        console.log('hi') }, function (){
          console.log('bye') } ]

      array_of_functions.push( function (val1) { console.log(val1 * 2) } )

      var adder = function (val1, val2){ console.log(val1 + val2) }
      array_of_functions[3] = adder;

      array_of_functions.forEach( function (func){ func(3, 4) } )
