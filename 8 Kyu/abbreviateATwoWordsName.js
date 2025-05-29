function abbrevName(name){
let words = name.split(" ");
let firstInitial = words[0][0].toUpperCase();
let secondInitial = words[1][0].toUpperCase();

return firstInitial + "." + secondInitial;

}