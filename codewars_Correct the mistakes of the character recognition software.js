function correct(string){
return string.replace(/[501]/g, function(v){
  if(v == "5"){
    return "S"
  } else if(v == "0"){
    return "O"
  } else if(v == "1"){
    return "I";
  }
})
}
