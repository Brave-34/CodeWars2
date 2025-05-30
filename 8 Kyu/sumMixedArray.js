function sumMix(x){
let numbers = x.map(Number);
let sum = 0;
for (let i = 0; i < x.length; i++){
    sum += numbers[i];
}
return sum;
}