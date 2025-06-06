function solution(string) {
    let arr = string.split("");
    let newStr = "";
    for (let i = 0; i < arr.length; i++){
        if(arr[i] === arr[i].toUpperCase()){
            newStr += " ";
        }
        newStr += arr[i];
    }
  return newStr;
}