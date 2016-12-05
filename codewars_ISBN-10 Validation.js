function validISBN10(isbn) {
let length = isbn.length,
    sum = 0,
    sp = /\D/;

  for(let i = 0; i < length; i++){
    if(i == 0 && sp.test(isbn[i]) || isbn.length < 10){
      return false;
    } 
    sum += +isbn[i] * (i + 1);
  }
  return sum % 11 ? false : true;
}
