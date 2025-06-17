function accum(s) {
  const result = []; 
  for (let i = 0; i < s.length; i++) {
    const char = s[i]; 
    const capitalizedChar = char.toUpperCase();
    const lowerChar = char.toLowerCase();
    const repeatedLower = lowerChar.repeat(i);
    const part = capitalizedChar + repeatedLower;
  result.push(part);
  }
  return result.join('-');
}

