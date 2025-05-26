function invert(array) {
  let numbers = [];
  for (let i = 0; i < array.length; i++){
    numbers.push(array[i] * -1);
  }
   return numbers;
}