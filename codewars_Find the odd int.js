function findOdd(A) {
for(let i = 0; i < A.length; i++){
  let o = A.filter(v => v == A[i]).length;
  if(o % 2 == 1){
    return A[i];
  }
}


}
