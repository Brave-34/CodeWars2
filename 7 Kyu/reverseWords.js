function reverseWords(str) {
  let arr = str.split(" ");
  let newStr = "";
  for (let i = 0; i < arr.length; i++){
      newStr += arr[i].split("").reverse().join("");
      if (i < arr.length - 1) {
      newStr += " "; 
    }
  }
  return newStr;
}