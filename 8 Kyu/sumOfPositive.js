function positiveSum(arr) {
  let positive = 0;
  for ( let i = 0; i < arr.length; i++){
    if(arr[i] > 0){
      positive = positive + arr[i];
    }
  }
  return positive
}