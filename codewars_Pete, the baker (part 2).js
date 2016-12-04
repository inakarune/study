function getMissingIngredients(recipe, added) {  
let need = {};
let t = 0;
let l = Object.keys(added);
if(!l.length){
  return recipe;
}
  for(let key in added){
    let m = added[key] / recipe[key];
    if(recipe[key] * m === added[key] && added[key] > recipe[key]){
      t++;
    }
  }
  if(t == 3){
    return need;
  }
  
  t = 0;
  for(let key in recipe){
    if(added[key] / recipe[key] > 0 && Math.floor(added[key] / recipe[key]) !== 0 && t < added[key] / recipe[key]){
      t = Math.ceil(added[key] / recipe[key]);
    }
  }
  if(!t){
    for(let key in recipe){
      if(!added.hasOwnProperty(key)){
        need[key] = recipe[key];
      } else {
        if(added[key] < recipe[key]){
          need[key] = recipe[key] - added[key];
        }
      }
    }
    return need;
  }
  
  for(let key in recipe){
    need[key] = recipe[key] * t;
  }
 
  for(let key in added){
    need[key] = need[key] - added[key]
  } 
  
  //console.log(need)
  for(let key in need){
    if(!added.hasOwnProperty(key) && need[key] == 0){
      need[key] = recipe[key];
    }
    else if(added[key] == need[key] || need[key] == 0){
      delete need[key];
    }
  }
  return need;
  
}
