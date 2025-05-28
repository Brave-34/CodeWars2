const binaryArrayToNumber = arr => {
  let binaryString = arr.join('');
  return parseInt(binaryString, 2);
};