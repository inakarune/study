function rot13(message) {

  var az = 'abcdefghijklmnopqrstuvwxyz';
  var AZ = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  message = message.split('').map(v => {
      
      var ch_idx = az.indexOf(v); 
      if (ch_idx < 0){
        if (/[_+-.,!@#$%^&*();\\/|<>"'\[\]`?:{]/.test(v)){
          return v;
        } else if (isNaN(v) === false){
          return v;
        } else if (v === v.toUpperCase()){
        ch_idx = AZ.indexOf(v) + 13;
          if(ch_idx >= AZ.length){
          return AZ.charAt(ch_idx - AZ.length);
      } else {
          return AZ.charAt(ch_idx);
      }
        }
      } else { ch_idx += 13; }
      
      if(ch_idx >= az.length){
          return az.charAt(ch_idx - az.length);
      } else {
          return az.charAt(ch_idx);
      }
  })
  message = message.join('');
  
  return message;
}
