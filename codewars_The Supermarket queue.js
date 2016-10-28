function queueTime(customers, n) {
  let tills = new Array(n).fill(0);

  for(let i = 0; i < customers.length; i++){
    if(tills[i] == 0){
      tills[i] = customers[i];
    } else if(tills[i] !== 0){
      let idx = tills.lastIndexOf(Math.min(...tills));
      tills[idx] += customers[i];
    }

  }
  return Math.max(...tills);

}
