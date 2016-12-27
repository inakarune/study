function travel(r, zipcode) {
let str = '';
let sss = '';
let count = 0;
let replay = 0;
let str_arr = r.split(',');

    str += zipcode + ":";

for (let n of str_arr){
    if (n.includes(zipcode)){
      count++
    }
}

for (var i = 0; i < str_arr.length; i++){

  var inclu = str_arr[i].includes(zipcode);
  var r_index = str_arr[i].indexOf(zipcode);
  var ttt = str_arr[i].slice(0, r_index);

    if (zipcode.length !== 8 || r.includes(zipcode) === false){
    str += '/';
    break;
    } else if(count === 2 && inclu === true){

      str += ttt.replace(/[\d]+/g, '').trim();

          if (replay === 0){
             str += ','
             sss += '/' + ttt.replace(/[^\d+]+/g, '');
          } else if (replay === 1){
             str += sss + ',' + ttt.replace(/[^\d+]+/g, '');
          }

      replay += 1

    } else if (inclu === true && count === 1){

      str += ttt.replace(/[\d]+/g, '').trim();
      str += '/' + ttt.replace(/[^\d+]+/g, ''); ///

      } else if (count === 3 && inclu === true){

      str += ttt.replace(/[\d]+/g, '').trim();

          if (replay === 0){
             str += ','
             sss += '/' + ttt.replace(/[^\d+]+/g, '');
          } else if (replay === 1){
             str += ','
             sss += ',' + ttt.replace(/[^\d+]+/g, '');
          } else if (replay === 2){
             str += sss + ',' + ttt.replace(/[^\d+]+/g, '');
          }

      replay += 1
      }
}

  return str

}
