function pascal(depth) {

var arr = [];
var str = [];
var save = '';

for (var i = 0; i < depth; i++){


  if(i == 0){
    arr.push([1]);
    continue;
  } else if (i == 1){
    arr.push([1, 1]);
    save = [1, 1];
  } else {
    str.unshift(1);
    for (var j = 0; j < i - 1; j++){
      str.push(save.slice(j, j + 2).reduce((a, b) => a + b));
    }
    str.push(1);
    arr.push(str);
    save = arr[arr.length - 1];
    str = [];
  }


}

return JSON.stringify(arr);

}
