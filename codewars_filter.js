function searchNames( logins ){
let remember;

  return logins.filter((value, idx, array) => {
  
    if(remember == undefined){
      if(value[value.length - 1] === '.' || value[0] === '.'){
      remember = value.replace(/\./g, '');
      }
    }
    
    if(value.includes('@') && value.includes(remember)){
      return value;
    }

  });

}
