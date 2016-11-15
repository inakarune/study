function flatten(...arg){

var para = [...arg]
var count = 0;
while(count < para.length){
if(para.some(v => Array.isArray(v))){
para = para.reduce((a, b) => a.concat(b), []);
} 
count++;
}

return para;
}
