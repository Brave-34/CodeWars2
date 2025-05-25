function disemvowel(str) {
  str = str.split("");
  let vowels = "iuoaeIUOAE";
  for( let i = 0; i < str.length; i++){
      if(vowels.includes(str[i])){
          str.splice(i, 1);
          i--;
      }
      }
  return str.join("");
}