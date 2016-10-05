function formatDuration (seconds) {

  var second, min, hour, day, year;
  
  if(seconds < 60){
    second = seconds % 60;
  }
  
  if(seconds >= 60){
    min = Math.floor(seconds / 60);
    second = seconds % 60;
  } 
  
  if(min >= 60){
    hour = Math.floor(min / 60);
    min = min % 60;
  }
  
  if(hour >= 60){
    day = Math.floor(hour / 24);
    hour = hour % 24
  }
  
  if(day >= 365){
    year = Math.floor(day / 365);
    day = day % 365;
  }
  
  if(second > 1){
    second += ' seconds';
  } else if(second == 1){
    second += ' second'
  }
  
  if(min > 1){
    min += ' minutes';
  } else if(min == 1){
    min += ' minute';
  }
  
  if(hour > 1){
    hour += ' hours';
  } else if(hour == 1){
    hour += ' hour';
  }
  
  if(day > 1){
    day += ' days';
  } else if(day == 1){
    day += ' day';
  }
  
  if(year > 1){
    year += ' years';
  } else if(year == 1){
    year += ' year';
  }
  
  var arr = [year, day, hour, min, second].filter(v => v !== undefined && v !== 0);
  var str = '';
  
  for(var i = 0; i < arr.length; i++){
 
    if(arr.length == 1){
      str += arr[i];
    } else if(arr.length == 2){
      if(i == arr.length - 1){
        str += arr[i];
      } else {
        str += arr[i] + ' and ';
      }
    } else if(arr.length > 2){
      if(i == arr.length - 1){
        str += arr[i];
      } else if(i == arr.length - 2){
        str += arr[i] + ' and ';
      } else {
        str += arr[i] + ', ';
      }
    }
  }
  
  return arr.length == 0 ? 'now' : str;
  
}
