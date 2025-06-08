function automorphic(n){
  let square = Math.pow(n, 2);
  let squareString = square.toString();
  
    if (squareString.endsWith(n.toString())){
      return "Automorphic"
    }
    else{
      return "Not!!"
    }
  }
  
