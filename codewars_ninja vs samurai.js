Position = {
  high: 'h',
  low: 'l'
}

Warrior = function(name){
  this.name = name;  
  this.health = 100;
}

Warrior.prototype = {
  attack: function(enemy, position){
    if (enemy.block != position){
      this.damage = position == Position.high ? 10 : 5;
      // if enemy is not blocking at all then give more damage
      if (!enemy.block){
        this.damage += 5;
      }
      setHealth.call(enemy, enemy.health - this.damage);   
    }
  }
}

// private functions
function setHealth(value){
  this.health = Math.max(0, value);
  if (this.health == 0){
    this.deceased = true;
    this.zombie = false;
  }
  else if(this.deceased){
    this.zombie = true;
  }
}
