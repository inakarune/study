function hexStringToRGB(hexString) {
hexString = hexString.split('').map(v => v = v.toUpperCase())
var arr = [];
var str = '0123456789ABCDEF';
var tst = [];
var obj = {};
for (var i = 1; i < hexString.length;){
  arr.push(hexString.slice(i, i + 2));
  i += 2;
}
for (var j = 0; j < arr.length; j++){
for (var k = 0; k <= 255; k++){
var one = str.charAt(Math.floor(k / 16));
var two = str.charAt(Math.floor(k % 16));
  if (one == arr[j][0] && two == arr[j][1]){
    tst.push(k);
  }
}
}

return {r: tst[0], g: tst[1], b: tst[2]};

}
