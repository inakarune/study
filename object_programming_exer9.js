
    var car_factory = function (){
      var car = {};

      car.name = 'tiboli';
      car.position = 0
      car.speed = 50;

      car.move = function (){
        this.position += this.speed
      }
      return car
    }
   
