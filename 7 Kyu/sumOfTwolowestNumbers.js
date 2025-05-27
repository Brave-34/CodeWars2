function sumTwoSmallestNumbers(numbers) {  
    let sum = 0;
  let arr = numbers.sort((a, b) => a-b);
  for (let i = 0; i < arr.length; i++){
      sum += arr[i];
      if(i === 1){
          break;
      }
  }
  return sum;
}