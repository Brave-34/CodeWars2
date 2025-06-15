function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) return [];
  let countPositive = [];
  let sumNegative = 0;
  let result = [];
  for(let i = 0; i< input.length; i++){
    if (input[i] > 0){
      countPositive.push(input[i]);
    }
    
    else{
      sumNegative += input[i];
      
    }
    
  }
  result.push(countPositive.length, sumNegative)
  return result;
 }