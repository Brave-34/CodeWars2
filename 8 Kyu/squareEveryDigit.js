function squareDigits(num){
    let numberString = num.toString();
    let result = "";
    for (let i = 0; i < numberString.length; i++){
        let digit = parseInt(numberString[i]);
        result += (digit * digit);
    }
  return parseInt(result);
}
console.log(squareDigits(3212));