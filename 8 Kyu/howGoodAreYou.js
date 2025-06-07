function betterThanAverage(classPoints, yourPoints) {
  let sum = 0;
  let average;
  for (let i =0; i < classPoints.length; i++){
      sum += classPoints[i];
      }
      average = (sum + yourPoints) / classPoints.length;
  if (yourPoints >= average){
      return true;
  }
  else{
      return false;
  }
}