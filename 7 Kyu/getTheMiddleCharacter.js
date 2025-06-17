function getMiddle(s) {
 let length = s.length;
 let char1, char2;
for (let i = 0; i < length; i++){
     if(length % 2 === 0){
     char1 = s[length / 2];
     char2 = s[(length / 2) - 1];
     return char2 + char1;
 }
 else{
     char1 =s[Math.floor(length / 2)];
     return char1;
 }
}
}
