
    var warrior_factory = function (name, weapon){
      var warrior = {};

      warrior.name = name;
      warrior.weapon = weapon;
      warrior.adventure = function (){
        this.attack();
        this.attack();
    
      }
      warrior.attack = function (){
        console.log(this.name + '은 ' + this.weapon + '을 가지고 있습니다.');
      }
      return warrior
    }
   
