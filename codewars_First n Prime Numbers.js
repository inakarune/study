function Primes(){
  let that = this;
  this.cache = [2];
  this.first = first
}

var Primes = new Primes();

function first(num){
    
    let arr = this.cache;
    if(arr.length != num){
      let len = arr.length;
      for(let i = arr[len - 1] + 1; arr.length < num; i++){
        if(isPrime(i)){
          arr.push(i);
        }
      }
    }
    return arr;
  }


function isPrime(num){
    for (var j = 2; j * j <= num; j++){
      if (num % j === 0){
        return false;
      }
    }
    return true;
}
